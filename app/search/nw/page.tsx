import type { Metadata } from "next";
import NWListings from "@/components/NWListings";

export const metadata: Metadata = {
  title: "NW Calgary Homes | Chan Kawaguchi",
  description:
    "Search homes in Calgary's North West — Tuscany, Rocky Ridge, Scenic Acres and more. Browse current listings with Chan Kawaguchi, REMAX.",
};

export default function NWSearchPage() {
  return (
    <section className="bg-neutral-light py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary NW
          </span>
          <h1 className="text-3xl font-bold text-primary mt-2">
            North West Calgary Homes
          </h1>
          <p className="text-gray-500 mt-3 text-sm">
            Tuscany, Rocky Ridge, Scenic Acres &amp; more
          </p>
        </div>

        <NWListings />
      </div>
    </section>
  );
}
