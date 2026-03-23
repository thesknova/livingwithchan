import type { Metadata } from "next";
import NEListings from "@/components/NEListings";

export const metadata: Metadata = {
  title: "NE Calgary Homes | Chan Kawaguchi",
  description:
    "Search homes in Calgary's North East — Evanston, Nolan Hill, Redstone and more. Browse current listings with Chan Kawaguchi, REMAX.",
};

export default function NESearchPage() {
  return (
    <section className="bg-neutral-light py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary NE
          </span>
          <h1 className="text-3xl font-bold text-primary mt-2">
            North East Calgary Homes
          </h1>
          <p className="text-gray-500 mt-3 text-sm">
            Evanston, Nolan Hill, Redstone &amp; more
          </p>
        </div>

        <NEListings />
      </div>
    </section>
  );
}
