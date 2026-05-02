import { MetadataRoute } from "next";
import { listings } from "@/lib/listings";
import { getAllReports } from "@/lib/market-reports";

const BASE = "https://livingwithchan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/listings`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/sell`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/investors`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/market-reports`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/mortgage-calculator`, changeFrequency: "yearly", priority: 0.6 },
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
    { url: `${BASE}/blog/calgary-property-tax-assessment`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/blog/renting-vs-buying`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/blog/bitcoin-real-estate-calgary`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/blog/calgary-zoning-explained`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/blog/legal-vs-illegal-basement-suites-calgary`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const listingRoutes: MetadataRoute.Sitemap = listings.map((l) => ({
    url: `${BASE}/listings/${l.id}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  let reportRoutes: MetadataRoute.Sitemap = [];
  try {
    const reports = getAllReports();
    reportRoutes = reports.map((r) => ({
      url: `${BASE}/market-reports/${r.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));
  } catch {
    // data dir may not exist in all environments
  }

  return [...staticRoutes, ...listingRoutes, ...reportRoutes];
}
