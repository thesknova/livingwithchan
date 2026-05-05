import { unstable_cache } from "next/cache";

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
  date: string;    // "YYYY-MM-DD"
  time?: string;   // "HH:MM"
  venue: string;
  category: EventCategory;
  imageUrl?: string;
  ticketUrl: string;
  priceMin?: number;
  priceMax?: number;
  isFree: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapCategory(raw: any): EventCategory {
  const segment: string = raw.classifications?.[0]?.segment?.name ?? "";
  const genre: string = raw.classifications?.[0]?.genre?.name ?? "";
  const name = (raw.name as string).toLowerCase();

  if (genre === "Festival" || name.includes("festival")) return "Festivals";
  if (
    genre === "Food & Drink" ||
    name.includes("food") ||
    name.includes("taste of") ||
    name.includes("culinary") ||
    name.includes("wine festival") ||
    name.includes("beer festival") ||
    name.includes("cocktail")
  )
    return "Food & Drink";
  if (segment === "Music") return "Concerts";
  if (segment === "Sports") return "Sports";
  if (segment === "Arts & Theatre") return "Arts & Theatre";
  if (segment === "Family") return "Family";
  return "Other";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapEvent(raw: any): CalgaryEvent | null {
  const date: string = raw.dates?.start?.localDate ?? "";
  if (!date) return null;

  const venue = raw._embedded?.venues?.[0];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const image = (raw.images as any[] | undefined)?.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (img: any) => img.ratio === "16_9" && img.width >= 640
  ) ?? raw.images?.[0];
  const price = raw.priceRanges?.[0];

  return {
    id: raw.id as string,
    name: raw.name as string,
    date,
    time: (raw.dates?.start?.localTime as string | undefined)?.slice(0, 5),
    venue: (venue?.name as string | undefined) ?? "Calgary",
    category: mapCategory(raw),
    imageUrl: image?.url as string | undefined,
    ticketUrl: raw.url as string,
    priceMin: price?.min as number | undefined,
    priceMax: price?.max as number | undefined,
    isFree: price?.min === 0 || String(raw.pleaseNote ?? "").toLowerCase().includes("free"),
  };
}

async function _fetchCalgaryEvents(): Promise<CalgaryEvent[]> {
  const apiKey = process.env.TICKETMASTER_API_KEY;
  if (!apiKey) return [];

  const now = new Date();
  const end = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
  const toISO = (d: Date) => d.toISOString().replace(/\.\d{3}Z$/, "Z");

  const base = "https://app.ticketmaster.com/discovery/v2/events.json";
  const allEvents: CalgaryEvent[] = [];

  for (let page = 0; page < 3; page++) {
    const params = new URLSearchParams({
      city: "Calgary",
      countryCode: "CA",
      size: "100",
      page: String(page),
      sort: "date,asc",
      startDateTime: toISO(now),
      endDateTime: toISO(end),
      apikey: apiKey,
    });

    try {
      const res = await fetch(`${base}?${params}`);
      if (!res.ok) break;
      const data = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const events: any[] = data._embedded?.events ?? [];
      if (events.length === 0) break;
      const mapped = events.map(mapEvent).filter(Boolean) as CalgaryEvent[];
      allEvents.push(...mapped);
      const totalPages: number = data.page?.totalPages ?? 1;
      if (page >= totalPages - 1) break;
    } catch {
      break;
    }
  }

  return allEvents;
}

export const fetchCalgaryEvents = unstable_cache(
  _fetchCalgaryEvents,
  ["calgary-events"],
  { tags: ["calgary-events"], revalidate: 604800 }
);
