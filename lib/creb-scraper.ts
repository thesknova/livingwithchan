/**
 * CREB Daily Housing Summary scraper
 * Source: https://www.creb.com/Housing_Statistics/Daily_Housing_Summary/
 *
 * Each property type lives on a separate tab (query param):
 *   (no param / ?tab=1) = Total  |  ?tab=2 = Detached
 *   ?tab=3 = Row & TownHouse     |  ?tab=4 = Semi-Detached
 *   ?tab=5 = Apartment
 */

import { parse } from "node-html-parser";
import type { MarketReport, PricePoint } from "./market-reports";

const BASE_URL = "https://www.creb.com/Housing_Statistics/Daily_Housing_Summary/";

const TABS = {
  total: "",
  detached: "?tab=2",
  townhouse: "?tab=3",
  semiDetached: "?tab=4",
  apartment: "?tab=5",
} as const;

export type PropertyKey = keyof typeof TABS;

export interface TabStats {
  sales: number;
  newListings: number;
  activeListings: number;
  benchmarkPrice: number;
  daysOnMarket: number;
}

/** Strip currency symbols, commas, percent signs, and footnote markers */
function parseNum(s: string): number {
  const n = parseFloat(s.replace(/[$,\s%†*]/g, ""));
  return isFinite(n) ? n : 0;
}

/**
 * Fetch one CREB tab and extract stats for the given month label.
 * monthLabel should be e.g. "March 2026".
 * Also fetches the prior-year column (e.g. "March 2025") to compute YoY %.
 */
async function fetchTabStats(
  tabParam: string,
  monthLabel: string
): Promise<{ current: TabStats; yoyChange: Partial<TabStats> } | null> {
  const url = `${BASE_URL}${tabParam}`;

  let html: string;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; LivingWithChan/1.0)" },
      next: { revalidate: 0 },
    });
    if (!res.ok) return null;
    html = await res.text();
  } catch {
    return null;
  }

  const root = parse(html);

  // Derive the prior year label (e.g. "March 2025" from "March 2026")
  const [month, yearStr] = monthLabel.split(" ");
  const priorLabel = `${month} ${parseInt(yearStr) - 1}`;

  for (const table of root.querySelectorAll("table")) {
    const rows = table.querySelectorAll("tr");
    if (rows.length < 3) continue;

    // Scan the first 3 rows for a header containing our month label
    let currentCol = -1;
    let priorCol = -1;
    let headerRow = -1;

    for (let r = 0; r < Math.min(3, rows.length); r++) {
      const cells = rows[r].querySelectorAll("th, td");
      for (let c = 0; c < cells.length; c++) {
        const text = cells[c].text.trim();
        if (text.includes(monthLabel)) { currentCol = c; headerRow = r; }
        if (text.includes(priorLabel)) priorCol = c;
      }
      if (currentCol !== -1) break;
    }

    if (currentCol === -1) continue;

    const current: Partial<TabStats> = {};
    const prior: Partial<TabStats> = {};

    for (let r = headerRow + 1; r < rows.length; r++) {
      const cells = rows[r].querySelectorAll("td, th");
      if (cells.length <= currentCol) continue;

      const label = cells[0].text.trim().toLowerCase();
      const curVal = parseNum(cells[currentCol].text);
      const prvVal = priorCol !== -1 && cells.length > priorCol
        ? parseNum(cells[priorCol].text)
        : 0;

      if (label.includes("total sales"))         { current.sales = curVal;          prior.sales = prvVal; }
      else if (label.includes("new listing"))     { current.newListings = curVal;    prior.newListings = prvVal; }
      else if (label.includes("active listing"))  { current.activeListings = curVal; prior.activeListings = prvVal; }
      else if (label.includes("benchmark"))       { current.benchmarkPrice = curVal; prior.benchmarkPrice = prvVal; }
      else if (label.includes("days on market"))  { current.daysOnMarket = curVal;   prior.daysOnMarket = prvVal; }
    }

    // Require at minimum sales + benchmark to count as a valid parse
    if (!current.sales || !current.benchmarkPrice) continue;

    // Compute YoY % changes
    const yoyChange: Partial<TabStats> = {};
    for (const key of Object.keys(current) as (keyof TabStats)[]) {
      const cur = current[key] ?? 0;
      const prv = prior[key] ?? 0;
      yoyChange[key] = prv !== 0 ? Math.round(((cur - prv) / prv) * 1000) / 10 : 0;
    }

    return { current: current as TabStats, yoyChange };
  }

  return null;
}

export interface TabResult {
  current: TabStats | null;
  yoyChange: Partial<TabStats>;
}

/** Scrape all five tabs for the given month — returns current stats and YoY % changes. */
export async function scrapeAllTabs(monthLabel: string): Promise<Record<PropertyKey, TabResult>> {
  const results = await Promise.all(
    (Object.entries(TABS) as [PropertyKey, string][]).map(async ([key, param]) => {
      const data = await fetchTabStats(param, monthLabel);
      return [key, { current: data?.current ?? null, yoyChange: data?.yoyChange ?? {} }] as [PropertyKey, TabResult];
    })
  );
  return Object.fromEntries(results) as Record<PropertyKey, TabResult>;
}

/** Build the full MarketReport JSON from scraped data + previous reports for price history. */
export function buildReport(
  month: string,
  year: number,
  slug: string,
  tabs: Record<PropertyKey, TabResult>,
  previousReports: MarketReport[]
): MarketReport {
  const t = tabs.total.current;
  const d = tabs.detached.current;
  const s = tabs.semiDetached.current;
  const th = tabs.townhouse.current;
  const a = tabs.apartment.current;

  // Sales-to-new-listings ratio determines market type
  const snlr = t && t.newListings > 0
    ? Math.round((t.sales / t.newListings) * 1000) / 10
    : 0;
  const marketType: MarketReport["marketType"] =
    snlr < 40 ? "buyers" : snlr <= 60 ? "balanced" : "sellers";

  // YoY benchmark price changes from scraped prior-year columns
  const yoy = {
    overall:     tabs.total.yoyChange.benchmarkPrice       ?? 0,
    detached:    tabs.detached.yoyChange.benchmarkPrice    ?? 0,
    semiDetached: tabs.semiDetached.yoyChange.benchmarkPrice ?? 0,
    townhouse:   tabs.townhouse.yoyChange.benchmarkPrice   ?? 0,
    condo:       tabs.apartment.yoyChange.benchmarkPrice   ?? 0,
  };

  // Build price history: up to 5 previous months + current
  const priceHistory: PricePoint[] = previousReports
    .slice(0, 5)
    .reverse()
    .map((r) => ({
      label: `${r.month.slice(0, 3)} '${String(r.year).slice(2)}`,
      price: r.benchmarkPrice.overall,
    }));

  if (t?.benchmarkPrice) {
    priceHistory.push({
      label: `${month.slice(0, 3)} '${String(year).slice(2)}`,
      price: t.benchmarkPrice,
    });
  }

  // MoM changes — compare against most recent prior report
  const prev = previousReports[0];
  const momPct = (cur: number, prior: number) =>
    prior > 0 ? Math.round(((cur - prior) / prior) * 1000) / 10 : 0;

  return {
    slug,
    month,
    year,
    publishedAt: new Date().toISOString().slice(0, 10),
    headline: `TODO: Add headline for ${month} ${year} Calgary Market Report`,
    summary: "TODO: Replace with a 2–3 sentence summary of this month's market conditions.",
    benchmarkPrice: {
      overall:     t?.benchmarkPrice  ?? 0,
      detached:    d?.benchmarkPrice  ?? 0,
      semiDetached: s?.benchmarkPrice ?? 0,
      townhouse:   th?.benchmarkPrice ?? 0,
      condo:       a?.benchmarkPrice  ?? 0,
    },
    benchmarkPriceYoy: yoy,
    sales: {
      total: t?.sales ?? 0,
      momChange: prev ? momPct(t?.sales ?? 0, prev.sales.total) : 0,
      yoyChange: tabs.total.yoyChange.sales ?? 0,
    },
    newListings: {
      total: t?.newListings ?? 0,
      momChange: prev ? momPct(t?.newListings ?? 0, prev.newListings.total) : 0,
      yoyChange: tabs.total.yoyChange.newListings ?? 0,
    },
    activeListings: {
      total: t?.activeListings ?? 0,
      momChange: prev ? momPct(t?.activeListings ?? 0, prev.activeListings.total) : 0,
      yoyChange: tabs.total.yoyChange.activeListings ?? 0,
    },
    daysOnMarket: t?.daysOnMarket ?? 0,
    salesToNewListingsRatio: snlr,
    marketType,
    priceHistory,
    insights: [
      "TODO: Add key takeaway 1.",
      "TODO: Add key takeaway 2.",
      "TODO: Add key takeaway 3.",
      "TODO: Add key takeaway 4.",
    ],
  };
}

/** Build a month label string like "March 2026" */
export function monthLabel(month: string, year: number): string {
  return `${month} ${year}`;
}
