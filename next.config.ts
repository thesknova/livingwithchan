import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    // Reports used to be slugged by the month their data covered. They are now
    // slugged by the month they are published in (one later), so readers who
    // arrive in September find a "September 2026" report.
    //
    // Every slug shifted forward by one, which means 2026-04, 2026-05 and
    // 2026-06 are still live URLs — they just serve the report one month
    // earlier than they used to. Redirecting those would shadow a real page, so
    // only 2026-03 needs a rule: it is the one slug that no longer exists, and
    // the report it used to serve (March data) now lives at 2026-04.
    const RESLUGGED: Record<string, string> = {
      "2026-03": "2026-04",
    };
    return Object.entries(RESLUGGED).flatMap(([from, to]) => [
      {
        source: `/market-reports/${from}`,
        destination: `/market-reports/${to}`,
        permanent: true,
      },
      {
        source: `/market-reports/${from}/infographic`,
        destination: `/market-reports/${to}/infographic`,
        permanent: true,
      },
    ]);
  },
  async headers() {
    return [
      // Vercel serves this app on *.vercel.app as well as the canonical
      // www.livingwithchan.com. Without this, Google indexes the deployment
      // domains as duplicates of every page and splits ranking signal.
      // Matched positively on the preview hosts so a matcher change can never
      // accidentally de-index production.
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
