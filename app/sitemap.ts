import { MetadataRoute } from "next";
import { getAllReports } from "@/lib/market-reports";
import { posts, postLastModified } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site";
import { fetchSoldPosts } from "@/lib/sold";

const BASE = SITE_URL;

/**
 * `lastmod` is the one hint in this file Google actually reads — it ignores
 * `changefreq` and `priority` outright. It only trusts `lastmod` while the
 * dates stay honest, and stamping every URL with the build time would make
 * the whole sitemap look like it changes on each deploy. So a date is emitted
 * only where the content itself carries one (market reports, from their
 * publication date) and omitted everywhere else.
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/listings`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/sold`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/sell`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/investors`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/market-reports`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/mortgage-calculator`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/things-to-do`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/buyer-intake`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/buyers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/buyers/first-time`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/buyers/luxury`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/buyers/investors`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/buyers/acreages`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/buyers/downsizing`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/buyers/move-up`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/buyers/new-construction`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/buyers/new-to-calgary`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/search/ne`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/search/nw`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/search/sw`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/search/se`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Derived from the post registry so a new post cannot be live but missing
  // here, and carries the post's own date as lastmod.
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: postLastModified(post),
    changeFrequency: post.changeFrequency ?? ("yearly" as const),
    priority: post.priority ?? 0.7,
  }));

  let reportRoutes: MetadataRoute.Sitemap = [];
  let latestReportDate: Date | undefined;
  try {
    const reports = getAllReports();
    reportRoutes = reports.map((r) => ({
      url: `${BASE}/market-reports/${r.slug}`,
      lastModified: new Date(r.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));
    // The index carries the newest report's data and its district map, so it is
    // genuinely as fresh as that report.
    if (reports[0]) latestReportDate = new Date(reports[0].publishedAt);
  } catch {
    // data dir may not exist in all environments
  }

  // Max rather than blogRoutes[0], so appending a post to the registry in any
  // order still dates the index correctly.
  const newestPost = posts.length
    ? new Date(Math.max(...posts.map((p) => postLastModified(p).getTime())))
    : undefined;
  // /sold is as fresh as the most recently published sale.
  const sold = await fetchSoldPosts();
  const newestSale = sold[0] ? new Date(sold[0].publishedAt) : undefined;
  const dated = staticRoutes.map((route) => {
    if (route.url === `${BASE}/sold` && newestSale) {
      return { ...route, lastModified: newestSale };
    }
    if (route.url === `${BASE}/market-reports` && latestReportDate) {
      return { ...route, lastModified: latestReportDate };
    }
    // The blog index lists every post, so it is as fresh as the newest one.
    if (route.url === `${BASE}/blog` && newestPost) {
      return { ...route, lastModified: newestPost };
    }
    return route;
  });

  return [...dated, ...blogRoutes, ...reportRoutes];
}
