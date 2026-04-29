import type { Metadata } from "next";
import SWListings from "@/components/SWListings";

export const metadata: Metadata = {
  title: "SE Calgary Homes for Sale | Chan Kawaguchi",
  description:
    "Search homes in Calgary's South East: Mahogany, McKenzie Towne, Auburn Bay, Copperfield, and more. Browse current listings with Chan Kawaguchi, REMAX Complete Realty.",
};

export default function SESearchPage() {
  return (
    <section className="bg-neutral-light py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary SE
          </span>
          <h1 className="text-3xl font-bold text-primary mt-2">
            South East Calgary Homes
          </h1>
          <p className="text-gray-500 mt-3 text-sm">
            Mahogany, McKenzie Towne, Auburn Bay, Copperfield &amp; more
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-mid shadow-sm p-8 mb-10">
          <h2 className="text-xl font-bold text-primary mb-3">Why SE Calgary?</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Southeast Calgary is one of the city&apos;s fastest-growing and most desirable areas.
            From the lake community of Mahogany to the charming streetscapes of McKenzie Towne,
            SE Calgary offers a wide range of homes at accessible price points with excellent
            amenities, schools, and access to Fish Creek Provincial Park.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
            {[
              "Mahogany — Calgary&apos;s largest lake community",
              "McKenzie Towne — award-winning new urbanism",
              "Auburn Bay — four-season lake living",
              "Copperfield — family-friendly with great value",
              "Legacy — master-planned with modern amenities",
              "New Brighton — established community, great schools",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>

        <SWListings />

        <div className="mt-12 bg-primary rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Looking for a Specific SE Calgary Home?
          </h2>
          <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
            Chan has access to SE Calgary listings before they hit MLS. Get in touch to start your search.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
          >
            Talk to Chan About SE Calgary
          </a>
        </div>
      </div>
    </section>
  );
}
