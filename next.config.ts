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
