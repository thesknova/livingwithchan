import type { Metadata } from "next";
import SWListings from "@/components/SWListings";

export const metadata: Metadata = {
  title: "SW Calgary Homes | Chan Kawaguchi",
  description:
    "Search homes in Calgary's South West — Aspen Woods, Cougar Ridge, Signal Hill and more. Browse current listings with Chan Kawaguchi, REMAX.",
};

export default function SWSearchPage() {
  return (
    <section className="bg-neutral-light py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary SW
          </span>
          <h1 className="text-3xl font-bold text-primary mt-2">
            South West Calgary Homes
          </h1>
          <p className="text-gray-500 mt-3 text-sm">
            Aspen Woods, Cougar Ridge, Signal Hill &amp; more
          </p>
        </div>

        <SWListings />
      </div>
    </section>
  );
}
