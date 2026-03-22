"use client";

import Script from "next/script";

export default function FeaturedListings() {
  return (
    <section className="bg-neutral-light py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Browse Properties
          </span>
          <h2 className="text-3xl font-bold text-primary mt-2">
            Featured Listings
          </h2>
        </div>

        <div
          className="rn-embed"
          data-name="shinkawaguchi"
          data-path="featured-properties"
          style={{ minHeight: "95vh" }}
        />

        <Script
          src="https://s.realtyninja.com/static/js/prod/embed.min.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  );
}
