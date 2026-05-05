import { unstable_cache } from "next/cache";
import { parse } from "node-html-parser";

export type EventCategory =
  | "All"
  | "Concerts"
  | "Sports"
  | "Arts & Theatre"
  | "Family"
  | "Festivals"
  | "Food & Drink"
  | "Other";

export interface CalgaryEvent {
  id: string;
  name: string;
  date: string;        // YYYY-MM-DD (start / first day)
  endDate?: string;    // YYYY-MM-DD (last day for multi-day events)
  description: string;
  category: EventCategory;
  imageUrl?: string;
  sourceUrl: string;
  source: string;
}

// ─── Date parsing ────────────────────────────────────────────────────────────

const MONTH_NUM: Record<string, number> = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
};

function fmt(year: number, month: number, day: number) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function parseDateText(text: string): { start: string; end?: string } | null {
  const t = text.trim().toLowerCase().replace(/\s+/g, " ");
  const year = new Date().getFullYear();

  // "may 9 to june 7" — cross-month
  const cross = t.match(/^(\w+)\s+(\d+)\s+to\s+(\w+)\s+(\d+)/);
  if (cross) {
    const m1 = MONTH_NUM[cross[1]], m2 = MONTH_NUM[cross[3]];
    if (m1 && m2)
      return { start: fmt(year, m1, +cross[2]), end: fmt(year, m2, +cross[4]) };
  }

  // "may 8 to 17" — same-month range (also handles "-")
  const range = t.match(/^(\w+)\s+(\d+)\s*(?:to|-)\s*(\d+)/);
  if (range) {
    const m = MONTH_NUM[range[1]];
    if (m) return { start: fmt(year, m, +range[2]), end: fmt(year, m, +range[3]) };
  }

  // "june 7" — single day
  const single = t.match(/^(\w+)\s+(\d+)/);
  if (single) {
    const m = MONTH_NUM[single[1]];
    if (m) return { start: fmt(year, m, +single[2]) };
  }

  return null;
}

// ─── Category mapping ─────────────────────────────────────────────────────────

function mapSection(sectionText: string): EventCategory {
  const t = sectionText.toLowerCase();
  if (t.includes("listen") || t.includes("music"))  return "Concerts";
  if (t.includes("see")    || t.includes("theatre")) return "Arts & Theatre";
  if (t.includes("eat")    || t.includes("food"))    return "Food & Drink";
  if (t.includes("family") || t.includes("kid"))     return "Family";
  return "Festivals";
}

function refineCategory(name: string, description: string, base: EventCategory): EventCategory {
  const t = (name + " " + description).toLowerCase();
  if (/marathon|5k|10k|run|race|walk|sport|hockey|football|soccer|basketball|swim/.test(t)) return "Sports";
  if (/food|taste|culinary|beer fest|wine fest|cocktail|dining/.test(t)) return "Food & Drink";
  if (/anime|comic|cosplay|film|movie|gallery|exhibit|theatre|opera|ballet|dance/.test(t)) return "Arts & Theatre";
  if (/kids|children|family|toddler|youth/.test(t)) return "Family";
  if (/festival|fair|parade|carnival/.test(t)) return "Festivals";
  if (/concert|live music|jazz|country|band|orchestra|symphony/.test(t)) return "Concerts";
  return base;
}

// ─── Avenue Calgary scraper ──────────────────────────────────────────────────

const AVENUE_CATEGORY_URL = "https://www.avenuecalgary.com/things-to-do/";
const USER_AGENT = "Mozilla/5.0 (compatible; LivingWithChan/1.0)";

async function discoverLatestArticle(): Promise<string> {
  const res = await fetch(AVENUE_CATEGORY_URL, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) throw new Error("Failed to fetch Avenue Calgary category page");
  const html = await res.text();
  const root = parse(html);

  // Find first link whose href contains "fun-things-to-do-calgary"
  const links = root.querySelectorAll("a[href*='fun-things-to-do-calgary']");
  const href = links[0]?.getAttribute("href");
  if (!href) throw new Error("Could not find events article on Avenue Calgary");
  return href.startsWith("http") ? href : `https://www.avenuecalgary.com${href}`;
}

async function scrapeAvenueCalgary(articleUrl: string): Promise<CalgaryEvent[]> {
  const res = await fetch(articleUrl, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) throw new Error(`Failed to fetch article: ${articleUrl}`);
  const html = await res.text();
  const root = parse(html);

  const events: CalgaryEvent[] = [];
  let currentSection: EventCategory = "Festivals";

  // Walk all h3, p, and figure elements in document order
  const nodes = root.querySelectorAll("h3, p, figure");

  let pending: Partial<CalgaryEvent> | null = null;

  function flush() {
    if (pending?.name && pending?.date) {
      events.push({
        id: `avenue-${pending.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}`,
        name: pending.name,
        date: pending.date,
        endDate: pending.endDate,
        description: pending.description ?? "",
        category: pending.category ?? "Other",
        imageUrl: pending.imageUrl,
        sourceUrl: pending.sourceUrl ?? articleUrl,
        source: "Avenue Calgary",
      } as CalgaryEvent);
    }
    pending = null;
  }

  for (const node of nodes) {
    const tag = node.tagName.toLowerCase();

    if (tag === "h3") {
      // Find non-anchor links (external event links)
      const extLinks = node.querySelectorAll("a").filter(
        (a) => a.getAttribute("target") === "_blank" || (a.getAttribute("href") ?? "").startsWith("http")
      );

      if (extLinks.length === 0) {
        // Section header ("Do", "See", "Listen")
        flush();
        currentSection = mapSection(node.text.trim());
      } else {
        // Event entry
        flush();
        const link = extLinks[0];
        pending = {
          name: link.text.trim(),
          sourceUrl: link.getAttribute("href") ?? articleUrl,
          category: currentSection,
        };
      }
      continue;
    }

    if (!pending) continue;

    if (tag === "p") {
      const text = node.text.trim().replace(/ /g, "").trim();
      if (!text) continue;

      // First p with bold/strong = date line
      const strong = node.querySelector("strong, b");
      if (strong && !pending.date) {
        const parsed = parseDateText(strong.text);
        if (parsed) {
          pending.date = parsed.start;
          pending.endDate = parsed.end;
          continue;
        }
      }

      // Skip the website link paragraph (short, italic)
      if (node.querySelector("em") && text.length < 40) continue;

      // First real description paragraph
      if (pending.date && !pending.description && text.length > 20) {
        pending.description = text;
        // Refine category with description context
        pending.category = refineCategory(pending.name ?? "", text, currentSection);
      }
    }

    if (tag === "figure" && pending) {
      for (const img of node.querySelectorAll("img")) {
        // Prefer data-src (lazy-load real URL) over src (often a blank data URI)
        const src = img.getAttribute("data-src") ?? img.getAttribute("src");
        if (src && !src.startsWith("data:") && !pending.imageUrl) {
          pending.imageUrl = src;
          break;
        }
      }
    }
  }

  flush();
  return events.filter((e) => e.date && e.name);
}

// ─── Public API ──────────────────────────────────────────────────────────────

async function _fetchCalgaryEvents(): Promise<CalgaryEvent[]> {
  try {
    const articleUrl = await discoverLatestArticle();
    const events = await scrapeAvenueCalgary(articleUrl);
    return events;
  } catch (err) {
    console.error("[fetchCalgaryEvents]", err);
    return [];
  }
}

export const fetchCalgaryEvents = unstable_cache(
  _fetchCalgaryEvents,
  ["calgary-events"],
  { tags: ["calgary-events"], revalidate: 604800 }
);
