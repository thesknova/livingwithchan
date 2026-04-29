import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Calgary Zoning Explained: R-CG, R-C1, M-C1 and the Blanket Rezoning | Chan Kawaguchi",
  description:
    "Everything Calgary homeowners and investors need to know about zoning types (R-C1, R-C2, R-CG, M-C1) and the city's historic blanket rezoning that changed thousands of properties in 2024.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Calgary Zoning Explained: R-CG, R-C1, M-C1, and the Blanket Rezoning That Changed Everything",
  description: "Everything Calgary homeowners and investors need to know about zoning types and the city's historic blanket rezoning that changed thousands of properties in 2024.",
  author: { "@type": "Person", name: "Chan Kawaguchi", url: "https://livingwithchan.com/about" },
  publisher: { "@type": "Organization", name: "Living With Chan", url: "https://livingwithchan.com" },
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  url: "https://livingwithchan.com/blog/calgary-zoning-explained",
};

export default function CalgaryZoningPost() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <div className="bg-neutral-light min-h-screen">

      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-xs font-semibold uppercase tracking-widest text-accent hover:text-white transition-colors mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Investor Tips
            </span>
            <span className="text-stone-500 text-xs">·</span>
            <span className="text-xs text-stone-400">10 min read</span>
            <span className="text-stone-500 text-xs">·</span>
            <span className="text-xs text-stone-400">April 1, 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Calgary Zoning Explained: R-CG, R-C1, M-C1, and the Blanket Rezoning That Changed Everything
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed">
            Whether you&apos;re buying a home, planning an infill project, or evaluating an investment property, understanding Calgary&apos;s zoning is essential. Here&apos;s what you need to know, including the sweeping 2024 change that reclassified thousands of inner-city lots.
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-12 text-gray-700 leading-relaxed text-sm">

        {/* Intro */}
        <section className="space-y-4">
          <p>
            Zoning is the invisible rulebook that governs what can be built on every parcel of land in Calgary. It determines whether your neighbour can convert their garage into a rental suite, whether a developer can build rowhouses on the corner lot, or whether a low-rise apartment can rise next door. For buyers, sellers, and investors, knowing the zoning on a property (and what it actually permits) can be the difference between a great purchase and a missed opportunity.
          </p>
          <p>
            Calgary&apos;s zoning landscape has changed significantly since 2014, and dramatically so after August 2024. This article walks through the most important residential zones, explains the landmark blanket rezoning, and compares two zones that often create confusion: R-CG and M-C1.
          </p>
        </section>

        {/* The main zones */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Calgary&apos;s Main Residential Zones</h2>
          <p>
            Calgary uses a layered system of land use designations. At the low-density end you have single-family focused zones; at the higher end you have multi-residential zones that allow apartment buildings. Here is a plain-language overview of the zones most relevant to residential buyers and investors in established Calgary neighbourhoods.
          </p>

          {/* Zone cards */}
          {[
            {
              zone: "R-C1",
              label: "Residential Contextual: One Dwelling",
              tag: "Single detached only",
              color: "bg-blue-50 border-blue-200",
              tagColor: "text-blue-600",
              body: "The most restrictive common zone in established Calgary neighbourhoods. Only single-detached homes are permitted: no duplexes, no secondary suites, no infill development beyond a replacement single-family home. Design standards are intentionally strict to preserve the look and feel of mature streets. If you\'re buying in an R-C1 area, your neighbours cannot legally subdivide or add suites, which many buyers find reassuring.",
            },
            {
              zone: "R-C2",
              label: "Residential Contextual: One/Two Dwelling",
              tag: "Single detached · Semi-detached · Duplex",
              color: "bg-purple-50 border-purple-200",
              tagColor: "text-purple-600",
              body: "A step up from R-C1, this zone allowed single-family homes, side-by-side semi-detached homes, and duplexes. Basement suites were permitted with proper permits. R-C2 was the most common residential designation in Calgary\'s established neighbourhoods before the 2024 blanket rezoning automatically converted most R-C2 lots to R-CG.",
            },
            {
              zone: "R-CG",
              label: "Residential — Grade-Oriented Infill",
              tag: "Up to 4 units · Suites · Rowhouses",
              color: "bg-amber-50 border-amber-200",
              tagColor: "text-amber-600",
              body: "Introduced in 2014, R-CG is now the citywide base zone for established Calgary neighbourhoods following the August 2024 blanket rezoning. It allows single-detached and semi-detached homes (as always), plus rowhouses, townhouses, and fourplexes on a typical 50\' x 120\' lot, up to four units. Every unit must have its own ground-level entrance; stacking is not permitted. Secondary suites, carriage suites (above a detached garage), and garden suites are all allowed, potentially enabling three households on a single property. Maximum height is 11 metres.",
            },
            {
              zone: "H-GO",
              label: "Housing — Grade Oriented",
              tag: "Stacked townhouses · Near transit",
              color: "bg-teal-50 border-teal-200",
              tagColor: "text-teal-600",
              body: "Effective January 2023, H-GO sits just above R-CG in density and is typically applied within 200 m of main streets, 600 m of LRT stations, or 400 m of BRT stops. Unlike R-CG, units CAN stack, allowing stacked townhouses. Height limit is 12 metres and two separate buildings are permitted on the same parcel. This is the zone you see appearing on arterial corridors as part of Local Area Plans.",
            },
            {
              zone: "M-C1",
              label: "Multi-Residential Contextual — Low Profile",
              tag: "3–4 storey apartments · Higher density",
              color: "bg-rose-50 border-rose-200",
              tagColor: "text-rose-600",
              body: "M-C1 is Calgary\'s entry-level apartment zone for established neighbourhoods. It permits 3–4 storey apartment buildings and townhouses with a maximum height of 14 metres (reduced to 9 m where the lot borders low-density residential). Density can reach 148 units per hectare, nearly double what R-CG allows. Secondary suites are permitted; backyard suites are discretionary. M-C1 sites are typically found along transit corridors, near commercial nodes, or at neighbourhood edges where a transition to higher density is appropriate.",
            },
            {
              zone: "M-C2",
              label: "Multi-Residential Contextual — Medium Profile",
              tag: "3–5 storey apartments",
              color: "bg-rose-100 border-rose-300",
              tagColor: "text-rose-700",
              body: "A step up from M-C1, M-C2 allows 3–5 storey apartment buildings at even higher densities. You\'ll find M-C2 designations near major transit stations, along 17th Avenue, and on key main streets in the inner city.",
            },
          ].map((z) => (
            <div key={z.zone} className={`rounded-xl border p-6 ${z.color}`}>
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <span className="text-lg font-black text-primary">{z.zone}</span>
                <span className="text-sm font-semibold text-gray-600">{z.label}</span>
                <span className={`text-xs font-semibold uppercase tracking-wider ${z.tagColor}`}>{z.tag}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{z.body}</p>
            </div>
          ))}
        </section>

        {/* Blanket rezoning */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">The 2024 Blanket Rezoning: What Changed and Why</h2>

          <p>
            In August 2024, the City of Calgary enacted what became the largest single zoning change in the city&apos;s history. Virtually every residential lot in established Calgary neighbourhoods that was zoned R-C1 or R-C2 was automatically converted to R-CG, without any application, cost, or approval process required by property owners.
          </p>

          <h3 className="text-base font-bold text-primary mt-4">Why It Happened</h3>
          <p>
            The rezoning grew out of Calgary&apos;s &quot;Home is Here&quot; housing strategy, approved by Council in September 2023. The strategy identified 98 action items to address a growing housing affordability crisis. Despite 12,500+ new home approvals in new suburban communities in 2023 alone, demand continued to outpace supply, driving rents and purchase prices higher.
          </p>
          <p>
            The old system required anyone wanting to build a rowhouse in an R-C2 neighbourhood to submit a formal land use redesignation application, a process that could take months, cost thousands of dollars, and be rejected based on community opposition. The blanket rezoning eliminated that step entirely for established areas.
          </p>

          <h3 className="text-base font-bold text-primary mt-4">The Vote and Timeline</h3>
          <div className="bg-white rounded-xl border border-neutral-mid p-5 space-y-2">
            {[
              { date: "September 2023", event: `Council approves "Home is Here" housing strategy` },
              { date: "April 22, 2024", event: "Rezoning for Housing proposal formally presented to Council" },
              { date: "May 14, 2024", event: "Council votes 9–6 to pass blanket rezoning" },
              { date: "June 11, 2024", event: "Final approval with 15 amendments incorporated" },
              { date: "August 6, 2024", event: "Bylaw takes effect; thousands of properties automatically converted to R-CG" },
              { date: "October 2025", event: "Civic election; new council composition reflects voter opposition" },
              { date: "December 15, 2025", event: "New council votes 13–2 to initiate repeal process" },
              { date: "March 23, 2026", event: "Public hearing on repeal (scheduled)" },
              { date: "August 4, 2026", event: "Repeal effective date (if approved)" },
            ].map((row) => (
              <div key={row.date} className="flex gap-4 text-sm">
                <span className="font-semibold text-accent whitespace-nowrap w-36 flex-shrink-0">{row.date}</span>
                <span className="text-gray-600">{row.event}</span>
              </div>
            ))}
          </div>

          <h3 className="text-base font-bold text-primary mt-4">What the Numbers Show</h3>
          <p>
            The results were immediate and dramatic. Calgary issued <strong>18,168 residential building permits</strong> in 2024, an all-time record. Within the first months after the August 6 rezoning:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
            <li>Development permits for rowhouses and townhouses increased <strong>271%</strong> compared to the same period in 2023</li>
            <li>Semi-detached permits increased <strong>289%</strong></li>
            <li>478 development permits directly enabled by the rezoning created <strong>1,904 new units</strong></li>
            <li>Citywide rezoning was responsible for <strong>58% of all low-density units</strong> receiving development permits between Q4 2024 and Q3 2025</li>
            <li>Ward 7 saw the most activity, with 127 rezoning-enabled developments including 75 rowhomes and townhouses</li>
          </ul>

          <h3 className="text-base font-bold text-primary mt-4">The Repeal Movement</h3>
          <p>
            The blanket rezoning became one of the most divisive issues in the October 2025 Calgary civic election. Many incumbents who voted for it lost their seats. By December 2025, the new council voted 13–2 to begin the repeal process, a dramatic reversal from the original 9–6 vote in favour.
          </p>
          <p>
            If the repeal passes after the March 2026 public hearing, most properties would return to their pre-August 2024 zoning on August 4, 2026. Projects with approved permits or submitted applications before the public hearing would be exempt. The debate around the repeal is ongoing. Critics warn it would meaningfully reduce housing production and affordability; supporters argue it overstepped community planning.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900">
            <strong>Important if you own property in Calgary:</strong> As of April 2026, the repeal has not yet been finalized. The outcome of the March 23 public hearing will determine whether your property reverts to its pre-2024 zoning or keeps the current R-CG designation. Chan can help you understand what this means for your specific property.
          </div>
        </section>

        {/* R-CG vs M-C1 */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">R-CG vs M-C1: What&apos;s the Difference?</h2>
          <p>
            These two zones are often confused by buyers and investors because both allow multi-unit housing in established Calgary neighbourhoods. But they serve very different purposes, and the distinction matters a lot if you&apos;re evaluating an infill project or an income property.
          </p>

          {/* Comparison table */}
          <div className="bg-white rounded-2xl border border-neutral-mid overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-primary text-white text-xs font-bold uppercase tracking-widest">
              <div className="p-4">Feature</div>
              <div className="p-4 text-accent">R-CG</div>
              <div className="p-4 text-rose-300">M-C1</div>
            </div>
            {[
              ["Category", "Low-density residential", "Multi-residential"],
              ["Primary housing type", "Rowhouses, semi-detached, fourplexes", "3–4 storey apartments, townhouses"],
              ["Max height", "11 metres", "14 m (9 m at low-density borders)"],
              ["Max density", "75 units/hectare", "148 units/hectare"],
              ["Stacking units", "Not permitted", "Permitted"],
              ["Secondary suites", "Yes (non-rowhouse units)", "Yes (permitted use)"],
              ["Backyard/carriage suites", "Yes (permitted)", "Discretionary"],
              ["Parking minimum", "0.5 stalls/unit", "0.5 stalls/unit"],
              ["Street feel", "Ground-level, front-door access", "Apartment corridor / lobby access"],
              ["Redesignation needed?", "No (post-Aug 2024, may revert)", "Yes (requires application)"],
            ].map(([feature, rcg, mc1], i) => (
              <div
                key={feature}
                className={`grid grid-cols-3 text-xs ${i % 2 === 0 ? "bg-neutral-light" : "bg-white"}`}
              >
                <div className="p-4 font-semibold text-gray-700">{feature}</div>
                <div className="p-4 text-gray-600">{rcg}</div>
                <div className="p-4 text-gray-600">{mc1}</div>
              </div>
            ))}
          </div>

          <h3 className="text-base font-bold text-primary mt-4">The Defining Difference: Grade Orientation</h3>
          <p>
            The single most important distinction between R-CG and M-C1 is what urban planners call <em>grade orientation</em>. In R-CG, every dwelling unit must have its own front door at street or grade level. You walk from the sidewalk directly into your home, just like a house. There are no shared lobbies, no elevators, no units stacked on top of each other.
          </p>
          <p>
            In M-C1, units can be stacked in apartment form. Residents may share a lobby, hallways, and elevators. This enables nearly <strong>double the density</strong> on the same land area (148 vs 75 units/hectare) and <strong>30% more height</strong> (14 m vs 11 m). The trade-off is a fundamentally different neighbourhood experience on the street.
          </p>

          <h3 className="text-base font-bold text-primary mt-4">When Does M-C1 Make Sense?</h3>
          <p>
            M-C1 designations are typically found at transition points in the urban fabric, along arterial roads, near commercial nodes, or adjacent to LRT stations. They&apos;re appropriate when the goal is a meaningful increase in housing supply in a compact footprint. If you&apos;re evaluating a development site and want to build apartments rather than rowhouses, you would need to apply for M-C1 (or higher) through the formal redesignation process, which involves a public hearing.
          </p>
          <p>
            R-CG, by contrast, is the tool for <em>gentle densification</em>, adding a few more families to a residential street without dramatically changing its character. For most investors and infill builders, R-CG is the relevant zone.
          </p>
        </section>

        {/* What this means for you */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">What This Means If You Own Property in Calgary</h2>
          <p>
            If you own a home in an established Calgary neighbourhood, there is a reasonable chance your property&apos;s zoning changed in August 2024 and may change again if the repeal is approved in mid-2026.
          </p>
          <p>
            Here is what to consider depending on your situation:
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Thinking about adding a suite?",
                body: "Under current R-CG zoning, you may be able to add both a secondary suite (basement) and a carriage suite (above your garage) simultaneously, potentially three households on one property. This can dramatically change the cash flow profile of a property. Confirm your current zoning designation at the City of Calgary's property portal before making plans.",
              },
              {
                title: "Considering selling to a developer?",
                body: "Your property's R-CG designation may make it more attractive and valuable to infill builders who want to develop rowhouses or a fourplex. A corner lot or oversized lot in a desirable inner-city neighbourhood is particularly in demand. Chan can help you evaluate whether your property has development potential and how to price it accordingly.",
              },
              {
                title: "Buying in an R-CG neighbourhood?",
                body: "Be aware that your future neighbours are permitted to build rowhouses and add suites. If the blanket rezoning repeal does not pass, this is the new normal for established Calgary neighbourhoods. If the repeal does pass, the rules become more restrictive again, but developers with approved permits are still protected.",
              },
              {
                title: "Evaluating an investment property?",
                body: "R-CG zoning is a green light to explore secondary suites, carriage suites, or rowhouse development as part of your return strategy. Always verify the current zoning and confirm your intended use with the City before purchasing. Zoning does not guarantee a development permit. Site-specific factors (lot size, setbacks, neighbourhood context) also apply.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-neutral-mid p-5">
                <h3 className="text-sm font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chan quote */}
        <blockquote className="border-l-4 border-accent pl-6 py-2">
          <p className="text-base italic text-gray-700 leading-relaxed mb-3">
            &quot;Zoning is one of the most underrated pieces of due diligence when buying in Calgary right now. With everything that changed in 2024 — and possibly changing again in 2026 — it pays to understand exactly what a property can and can&apos;t become. I walk every buyer and investor through this before we write an offer.&quot;
          </p>
          <footer className="text-sm font-semibold text-primary">
            — Chan Kawaguchi, REMAX Complete Realty Agent, Calgary
          </footer>
        </blockquote>

        {/* Disclaimer */}
        <div className="bg-neutral-light rounded-xl border border-neutral-mid p-5 text-xs text-gray-500 leading-relaxed">
          <strong>Disclaimer:</strong> Zoning designations and bylaws change frequently. The information in this article reflects the state of Calgary&apos;s Land Use Bylaw as of April 2026. The repeal of the August 2024 blanket rezoning was pending a public hearing at time of publication. Always verify current zoning directly with the City of Calgary and consult a qualified professional before making real estate or development decisions.
        </div>

        {/* Back to blog */}
        <div className="pt-4">
          <Link
            href="/blog"
            className="text-sm font-semibold text-accent hover:underline"
          >
            ← Back to all articles
          </Link>
        </div>

        {/* Contact */}
        <div className="border-t border-neutral-mid pt-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-primary mb-1">Questions About Zoning?</h2>
              <p className="text-gray-500 text-sm">REMAX Complete Realty Agent · Calgary, AB</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Not sure what your property&apos;s zoning means for your plans? Chan will walk you through the specifics, whether you&apos;re buying, selling, or developing.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:4036810107" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                  403-681-0107
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a href="mailto:hello@livingwithchan.com" className="text-sm font-medium text-primary hover:text-accent transition-colors">
                  hello@livingwithchan.com
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-neutral-mid p-8">
            <h2 className="text-xl font-bold text-primary mb-1">Send a Message</h2>
            <p className="text-sm text-gray-500 mb-6">
              Have a question about a specific property or neighbourhood? Chan will get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
