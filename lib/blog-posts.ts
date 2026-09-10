/**
 * The blog post registry: one entry per post under app/blog/<slug>/.
 *
 * Both the blog index and the sitemap read this list, so a new post needs
 * adding in exactly one place. It used to be a private array inside the index
 * page with the sitemap keeping its own hand-written copy of the URLs, which is
 * how the August 2026 zoning post ended up live but absent from the sitemap.
 *
 * `publishedAt` is an ISO date and the single source of truth for the date:
 * the index formats it for display, and the sitemap emits it as `lastmod`.
 * It must match the `datePublished` in that post's Article schema.
 *
 * Set `updatedAt` only when a published post is genuinely revised. `lastmod` is
 * the one hint in the sitemap Google actually reads, and it only stays useful
 * while it stays honest, so it should never be bumped just to look fresh.
 */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, matches the post's schema `datePublished`. */
  publishedAt: string;
  /** ISO date, set only when the post is revised after publication. */
  updatedAt?: string;
  category: string;
  readTime: string;
  /** Sitemap hints. Google ignores both, so these are set only where they were. */
  changeFrequency?: "monthly" | "yearly";
  priority?: number;
};

export const posts: BlogPost[] = [
  {
    slug: "calgary-zoning-changes-august-2026",
    title: "Calgary's Blanket Rezoning Is Gone: What the August 2026 Repeal Actually Changed",
    excerpt:
      "On August 4, 2026 the citywide R-CG rezoning was undone and about 99% of affected lots reverted to R-C1 or R-C2. Chan explains what reverted, what kept R-CG, and what it means for buyers, sellers, and investors.",
    publishedAt: "2026-09-10",
    category: "Market Insights",
    readTime: "9 min read",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    slug: "calgary-housing-market-august-2026",
    title: "Calgary Housing Market, August 2026: Slower Sales, Steadier Prices",
    excerpt:
      "Sales fell 16% and new listings fell 10%, yet the benchmark barely moved. Chan breaks down CREB's August numbers, why the condo segment keeps sliding, and how the market has split in two.",
    publishedAt: "2026-09-03",
    category: "Market Insights",
    readTime: "11 min read",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    slug: "calgary-property-tax-assessment",
    title: "Calgary Property Tax Assessment: How It Works and How to Challenge It",
    excerpt:
      "Every January, your assessment notice determines how much tax you'll pay. Chan explains how Calgary calculates your assessed value, common errors to look for, and exactly how to challenge it through the ARB.",
    publishedAt: "2026-05-01",
    category: "Homeowner Tips",
    readTime: "10 min read",
    priority: 0.8,
  },
  {
    slug: "bitcoin-real-estate-calgary",
    title: "Bitcoin and Real Estate in Calgary: How Crypto Transactions Actually Work",
    excerpt:
      "Calgary has been at the forefront of Bitcoin real estate in Canada. Chan breaks down how it works, the CRA tax implications, and includes a live BTC/CAD calculator.",
    publishedAt: "2026-04-01",
    category: "Investor Tips",
    readTime: "12 min read",
  },
  {
    slug: "legal-vs-illegal-basement-suites-calgary",
    title: "Legal vs. Illegal Basement Suites in Calgary: What Every Landlord and Tenant Needs to Know",
    excerpt:
      "Calgary has 20,000+ registered suites, but many more aren't. Chan breaks down what makes a suite legal, the real risks of an illegal one, and how to legalize yours.",
    publishedAt: "2026-04-01",
    category: "Investor Tips",
    readTime: "11 min read",
  },
  {
    slug: "calgary-zoning-explained",
    title: "Calgary Zoning Explained: R-CG, R-C1, M-C1, and the Blanket Rezoning That Changed Everything",
    excerpt:
      "The 2024 blanket rezoning automatically converted thousands of Calgary lots to R-CG. Here's what that means and what the potential 2026 repeal could change again.",
    publishedAt: "2026-04-01",
    category: "Investor Tips",
    readTime: "10 min read",
  },
  {
    slug: "renting-vs-buying",
    title: "Renting vs. Buying in Calgary: A Honest Comparison",
    excerpt:
      "Not sure whether to rent or buy? Chan breaks down the real pros and cons of each, including what most people get wrong about the math.",
    publishedAt: "2026-03-31",
    category: "Buyer Tips",
    readTime: "8 min read",
  },
];

/** Newest first, so a new entry surfaces at the top wherever it was added. */
export const postsByNewest: BlogPost[] = [...posts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

/**
 * "2026-09-10" reads as UTC midnight, so it has to be formatted in UTC too or
 * a browser west of Greenwich renders the previous day.
 */
export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** The date a post was last genuinely changed, for sitemap `lastmod`. */
export function postLastModified(post: BlogPost): Date {
  return new Date(post.updatedAt ?? post.publishedAt);
}
