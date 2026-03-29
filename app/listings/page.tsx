import type { Metadata } from "next";
import ListingsClient from "@/components/ListingsClient";
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
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary Real Estate
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-2">Current Listings</h1>
          <p className="text-stone-400 text-lg">
            {listings.length} properties across Calgary&apos;s top communities
          </p>
        </div>
      </div>

      <ListingsClient listings={listings} />

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
