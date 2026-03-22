import type { Metadata } from "next";
import ListingGrid from "@/components/ListingGrid";
import { listings } from "@/lib/listings";

export const metadata: Metadata = {
  title: "Listings",
  description:
    "Browse current real estate listings in Calgary, AB with Chan Kawaguchi — REMAX Real Estate Agent.",
};

export default function ListingsPage() {
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Page header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
            Calgary Real Estate
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-2">Current Listings</h1>
          <p className="text-blue-200 text-lg">
            {listings.length} properties across Calgary&apos;s top communities
          </p>
        </div>
      </div>

      {/* Filter bar (placeholder — wire up with real filter logic) */}
      <div className="bg-white border-b border-neutral-mid sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap gap-3">
          {["All", "Detached", "Semi-Detached", "Condo", "Townhouse"].map(
            (type) => (
              <button
                key={type}
                className="text-sm font-medium px-4 py-1.5 rounded-full border border-neutral-mid hover:border-accent hover:text-accent transition-colors first:bg-primary first:text-white first:border-primary"
              >
                {type}
              </button>
            )
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <ListingGrid listings={listings} />

        {/* TODO: Pagination or load-more */}
        <p className="text-center text-sm text-gray-400 mt-10">
          Showing all {listings.length} listings · Contact Chan for off-market opportunities
        </p>
      </div>

      {/* CTA */}
      <div className="bg-white border-t border-neutral-mid py-12 px-6 text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Don&apos;t See What You&apos;re Looking For?
        </h2>
        <p className="text-gray-500 mb-6">
          Chan has access to exclusive and off-market listings. Get in touch and let&apos;s talk.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-accent text-white font-semibold rounded-full px-6 py-3 hover:bg-accent-dark transition-colors"
        >
          Contact Chan
        </a>
      </div>
    </div>
  );
}
