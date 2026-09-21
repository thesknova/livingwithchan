import { unstable_cache } from "next/cache";

// Sold deals come from the CRM, where each one starts life as an Instagram
// "Sold Post". Only posts Chan switched on for the website are returned, with
// only the fields shown here; see chan-crm app/api/public/sold-posts.

export type SoldSide = "sellers" | "buyers" | "both";

export interface SoldPost {
  id: string;
  side: SoldSide;
  community: string;
  headline: string;
  /** Chan's first-person account of the sale; shown as her quote. */
  story: string;
  /** Present only when the clients agreed to show it. */
  price: string | null;
  /** The Instagram cover, SOLD sash included. Always 1080×1350. */
  coverUrl: string;
  publishedAt: string;
}

export const SIDE_LABEL: Record<SoldSide, string> = {
  sellers: "Represented the sellers",
  buyers: "Represented the buyers",
  both: "Represented buyers and sellers",
};

const CRM_URL = process.env.NEXT_PUBLIC_CRM_INGEST_URL || "https://chan-crm.vercel.app";

async function _fetchSoldPosts(): Promise<SoldPost[]> {
  try {
    const res = await fetch(`${CRM_URL}/api/public/sold-posts`);
    if (!res.ok) throw new Error(`CRM answered ${res.status}`);
    const { posts } = (await res.json()) as { posts: SoldPost[] };
    return posts;
  } catch (err) {
    // A CRM outage should cost the page its cards, not the whole page.
    console.error("[fetchSoldPosts]", err);
    return [];
  }
}

// Ten minutes: a post Chan publishes appears on the site shortly after, without
// the site calling the CRM on every visit.
export const fetchSoldPosts = unstable_cache(_fetchSoldPosts, ["sold-posts"], {
  tags: ["sold-posts"],
  revalidate: 600,
});
