import type { Metadata } from "next";
import Link from "next/link";
import BlogCTA from "@/components/BlogCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/calgary-housing-market-september-2026" },
  title:
    "Calgary Housing Market, September 2026: Detached Holds While Condos Slide | Chan Kawaguchi",
  description:
    "CREB's September 2026 numbers show detached sales up more than 4% while apartment prices fell 8%. Chan Kawaguchi breaks down the widening gap between property types, district by district, and what it means for buyers and sellers.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Calgary Housing Market, September 2026: Detached Holds the Line While High-Density Keeps Sliding",
  description:
    "CREB's September 2026 numbers show detached sales up more than 4% while apartment prices fell 8%. Chan Kawaguchi breaks down the widening gap between property types, district by district, and what it means for buyers and sellers.",
  author: {
    "@type": "Person",
    name: "Chan Kawaguchi",
    url: "https://www.livingwithchan.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Living With Chan",
    url: "https://www.livingwithchan.com",
  },
  datePublished: "2026-10-06",
  dateModified: "2026-10-06",
  url: "https://www.livingwithchan.com/blog/calgary-housing-market-september-2026",
};

const snapshot = [
  { label: "Benchmark Price", value: "$566,700", change: "0.8% lower than September 2025", down: true },
  { label: "Sales", value: "1,650", change: "3.8% lower than September 2025", down: true },
  { label: "New Listings", value: "3,354", change: "11.3% lower than September 2025", down: true },
  { label: "Inventory", value: "6,486", change: "6.3% lower than September 2025", down: true },
  { label: "Months of Supply", value: "3.93", change: "2.5% lower than September 2025", down: true },
  { label: "Days on Market", value: "44", change: "Up from 42 a year ago", down: false },
];

const propertyTypes = [
  {
    name: "Detached",
    price: "$739,400",
    yoy: "Down about 1% year over year",
    tone: "neutral",
    body:
      "The one segment that grew. Sales rose more than 4% from last September to 896 units, helped by 1,726 new listings that finally gave buyers something to choose from. Inventory sits at 2,968 and months of supply at 3.31, the tightest in the city.",
    detail:
      "Detached is still the floor under the citywide benchmark. Supply has loosened, but not enough to force sellers into cuts.",
  },
  {
    name: "Semi-Detached",
    price: "$685,200",
    yoy: "Flat year over year",
    tone: "neutral",
    body:
      "163 sales against 359 new listings dropped the sales-to-new-listings ratio to 45%, the lowest monthly reading of the year, and pushed months of supply to 3.67. Year-to-date sales are down about 2%.",
    detail:
      "A one-month shift rather than a trend, but it ends a long run of tight conditions in this segment.",
  },
  {
    name: "Row / Townhouse",
    price: "$412,400",
    yoy: "Down 5.5% year over year",
    tone: "down",
    body:
      "248 sales against 552 new listings, a 45% ratio, lifted inventory to 1,103 and months of supply to 4.45. That is the first time row has carried more than four months of supply this year.",
    detail:
      "New row product is still landing, and the price gap between new and resale is narrow enough that buyers keep choosing new.",
  },
  {
    name: "Apartment Condominium",
    price: "$291,400",
    yoy: "Down 8.3% year over year",
    tone: "down",
    body:
      "Sales improved from August to 343 units, which slowed the year-over-year decline to 14%. New listings were 717, inventory eased to 1,816, and months of supply held at 5.29.",
    detail:
      "Still the most oversupplied segment in Calgary, but the monthly gain in sales stopped supply from climbing further.",
  },
];

const regional = [
  {
    name: "Airdrie",
    price: "$505,800",
    line: "Down about 1% from August and 3.8% year over year",
    body:
      "Sales slowed to 115 units, down 12% from last September, and year-to-date sales are off 13%. New listings fell faster, by almost 28%, so inventory dropped to 480. Even so, the sales pullback outpaced it and months of supply rose to 4.17. Competition from the new home market and from Calgary itself keeps weighing on resale prices.",
  },
  {
    name: "Cochrane",
    price: "$575,400",
    line: "Up about 1% from August, down 0.4% year over year",
    body:
      "The one regional market with sales growth: 68 sales, up nearly 10% year over year, and year-to-date sales up almost 6%. New homes made up close to 30% of this year's listings. With 163 new listings, the ratio dropped to 42% and months of supply reached 5.19, though prices improved over August.",
  },
  {
    name: "Okotoks",
    price: "$606,800",
    line: "Down slightly from August, flat year over year",
    body:
      "Still the tightest market in the region. 56 sales against 74 new listings is a 76% ratio, and with 122 units in inventory supply sits at 2.18 months. Prices are stable against last September and only about 1% lower year to date.",
  },
  {
    name: "Chestermere",
    price: "$690,200",
    line: "Down about 1% from August, flat year over year",
    body:
      "Sales rose to 51, but a 38% sales-to-new-listings ratio keeps this the loosest of the four. Inventory fell to 292 and months of supply came back below six, to 5.73. Heavy new construction locally and competing supply in Calgary have both weighed on prices here.",
  },
];

const buyerNotes = [
  "The gap between segments is now the whole story. Detached sits at 3.31 months of supply, apartments at 5.29. Those are two different markets with opposite leverage, in the same city, in the same month.",
  "Apartments and rows are where your negotiating room is. Apartment prices are 8.3% off last year and row prices 5.5%, and both carry more supply than detached.",
  "If you want detached in the West or City Centre, come prepared. Those are the only two districts where detached prices rose year over year, at 2.7% and 0.7%.",
  "More new listings arrived in September than August, up almost 7%. That is more choice than Calgary buyers had through most of the summer.",
];

const sellerNotes = [
  "Price to September, not to spring. Days on market stretched to 44 and the citywide benchmark eased 0.8% year over year, so last season's comparables will cost you weeks.",
  "Detached sellers still have the strongest hand, especially in the West, North West, South and South East, all under three months of supply.",
  "Row and apartment sellers are competing on price, not on features. Above four months of supply, the listing that sells is usually the one priced at the front of the pack.",
  "September brought 6.8% more new listings than August. More competition arriving means the window for a quiet, well-priced launch is narrower than it was.",
];

const investorNotes = [
  "Apartment entry prices keep falling: $291,400, down 8.3% on the year, and down 13.1% in the North East alone. If your numbers work on today's rents, the entry point keeps improving.",
  "Watch where the supply actually is. The North East carries 15.4 months of apartment supply and the East 13.7 months of row supply. Those are the softest corners of the market.",
  "Row in the North West held up best in its segment, down only 2% year over year, against nearly 12% in the North East.",
  "Underwrite on current rents and a realistic vacancy assumption, not on the 2024 figures. The construction boom of the past three years is what created this supply.",
];

export default function SeptemberMarketPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="bg-neutral-light min-h-screen">

        {/* Header */}
        <div className="bg-primary text-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="text-xs font-semibold uppercase tracking-widest text-accent hover:text-white transition-colors mb-6 inline-block"
            >
              &larr; Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Market Insights
              </span>
              <span className="text-stone-500 text-xs">&middot;</span>
              <span className="text-xs text-stone-400">9 min read</span>
              <span className="text-stone-500 text-xs">&middot;</span>
              <span className="text-xs text-stone-400">October 6, 2026</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Calgary Housing Market, September 2026: Detached Holds the Line While High-Density Keeps Sliding
            </h1>
            <p className="text-stone-400 text-lg mb-6">
              By Chan Kawaguchi &middot; REMAX Complete Realty Agent, Calgary AB
            </p>
            <a
              href="#september-cta"
              className="inline-block bg-accent text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-accent/90 transition-colors"
            >
              Talk Through Your Options &darr;
            </a>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="prose prose-gray max-w-none">

            {/* Intro */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              September usually gives some ground back after August. This year it did not. Sales finished at 1,650 units, essentially flat against August and about 4% below last September, and the reason they held is specific: detached sales went up. Everything else in CREB&apos;s release is a variation on the same theme, which is that Calgary now has two housing markets running at once, and the distance between them grew again last month.
            </p>

            {/* Snapshot */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The September Scoreboard</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              City of Calgary, September 2026, all residential property types:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {snapshot.map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-neutral-mid p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    {s.label}
                  </p>
                  <p className="text-2xl font-bold text-primary">{s.value}</p>
                  <p className={`text-xs mt-1 font-medium ${s.down ? "text-red-500" : "text-emerald-600"}`}>
                    {s.change}
                  </p>
                </div>
              ))}
            </div>

            {/* What held the month up */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              What Held the Month Up
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Two things happened in September that pull in opposite directions. Sellers came back: new listings rose almost 7% from August to 3,354. Buyers did not match that pace, so the sales-to-new-listings ratio fell to 49%. When more listings arrive than sales can absorb, supply normally builds.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              It mostly did not, because inventory finished at 6,486 units, slightly below August and more than 6% below last September. Months of supply stayed at 3.93, almost exactly where August left it. Calgary spent September in the same broadly balanced position it has held since spring, with prices drifting rather than dropping: the benchmark eased to $566,700, down 0.8% on the year.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl px-6 py-4 mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Worth knowing about fall numbers:</strong> some of September&apos;s price decline is just the season. CREB&apos;s seasonally adjusted figures show prices essentially stable against August. When you see a monthly dip in October or November, check whether it is bigger than the usual seasonal move before reading anything into it.
              </p>
            </div>

            {/* Split */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              The Split Is Now the Headline
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Detached homes are down about 1% year over year and semi-detached is flat. Row homes are down 5.5% and apartments are down 8.3%. That is a seven-point spread between the top and bottom of the same market, and it traces back to where the last construction boom put its money.
            </p>
            <blockquote className="border-l-4 border-neutral-mid pl-6 py-2 mb-6 text-gray-600 italic leading-relaxed">
              &ldquo;The variation in market conditions between property types is related to where the supply was added. The construction boom over the past three years was mostly driven by gains in higher-density sectors, significantly increasing the supply of apartment and row-style homes. Meanwhile, detached homes did not see the same boost in construction, preventing broad-based supply growth.&rdquo;
              <span className="block not-italic text-sm text-gray-500 mt-3">
                Ann-Marie Lurie, Chief Economist, Calgary Real Estate Board
              </span>
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              Demand has not collapsed. A steady job market and continued, if slower, migration keep absorbing homes. What demand could not do is absorb an unusually large wave of apartment and row completions at the same time that renting stayed easy. So the segment that got the least new supply is the segment holding its price.
            </p>

            <BlogCTA
              id="september-2026-mid"
              eyebrow="Ask Chan"
              heading="Which of the two markets are you actually in?"
              body="A detached search in the West and a condo search in the North East are running at opposite ends of this market right now. Chan will pull the supply, pricing and days-on-market picture for your property type, price band and quadrant."
              href="/buyer-intake"
              action="Get your segment breakdown"
            />

            {/* Property types */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              Four Property Types, Four Different Months
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here is where each segment finished September:
            </p>
            <div className="space-y-4 mb-8">
              {propertyTypes.map((p) => (
                <div key={p.name} className="bg-white rounded-xl border border-neutral-mid p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-primary">{p.name}</h3>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">{p.price}</p>
                      <p
                        className={`text-xs font-medium ${
                          p.tone === "up"
                            ? "text-emerald-600"
                            : p.tone === "down"
                              ? "text-red-500"
                              : "text-gray-500"
                        }`}
                      >
                        {p.yoy}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{p.body}</p>
                  <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-accent pl-4">
                    {p.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Geography */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              Your Quadrant Matters More Than the Citywide Number
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Detached prices rose in two districts and fell in six. The spread between the strongest and weakest was nearly nine percentage points.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-neutral-mid p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Detached, still firm
                </p>
                <p className="text-lg font-bold text-primary mb-1">West, City Centre</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The only districts with detached prices up year over year: the West at 2.7% and the City Centre at 0.7%. The West sits at 2.73 months of supply.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-neutral-mid p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Detached, softest
                </p>
                <p className="text-lg font-bold text-primary mb-1">North East, East, North</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Down 6.0%, 5.0% and 3.8%. The North East also carries the most detached inventory in the city at 494 units and 5.61 months of supply.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The row segment shows the same geography, sharper. Prices fell 12.5% in the East and 11.9% in the North East, but only 2.0% in the North West. For apartments, the North East is down 13.1% and carries 15.4 months of supply, which is the single softest corner of the Calgary market right now.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can see all eight districts, by property type, on the{" "}
              <Link href="/market-reports" className="text-accent underline underline-offset-2">
                market reports page
              </Link>
              , where the map carries September&apos;s numbers.
            </p>

            {/* Regional */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Outside the City Limits</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The surrounding towns are as different from each other as Calgary&apos;s own quadrants:
            </p>
            <div className="space-y-4 mb-8">
              {regional.map((r) => (
                <div key={r.name} className="bg-white rounded-xl border border-neutral-mid p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-primary">{r.name}</h3>
                    <p className="text-sm font-semibold text-primary">{r.price}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{r.line}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Okotoks at 2.18 months of supply and Chestermere at 5.73 are about twenty minutes apart. Treating &ldquo;the surrounding communities&rdquo; as one market will give you the wrong answer in both.
            </p>

            {/* Backdrop */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              The Backdrop: Rates and Supply
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Borrowing costs have stopped moving.</strong> The Bank of Canada held its policy rate at 2.25% on September 2, its third consecutive hold. For anyone buying this fall, the practical read is that waiting for a materially cheaper mortgage is a weaker plan than it was a year ago, because the rate is stable rather than falling.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The supply story is a few years old.</strong> The apartment and row inventory weighing on prices today was mostly started during the 2023 to 2025 construction boom. That matters in both directions: it explains why high-density prices keep easing, and it means today&apos;s softness is working through supply that has already been built rather than supply still arriving.
            </p>

            {/* What it means */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              What September Means for You
            </h2>

            <h3 className="text-lg font-bold text-primary mt-6 mb-3">If you are buying</h3>
            <ul className="space-y-2 mb-6">
              {buyerNotes.map((t) => (
                <li key={t} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">&rarr;</span>
                  {t}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-primary mt-6 mb-3">If you are selling</h3>
            <ul className="space-y-2 mb-6">
              {sellerNotes.map((t) => (
                <li key={t} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">&rarr;</span>
                  {t}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-primary mt-6 mb-3">If you are investing</h3>
            <ul className="space-y-2 mb-8">
              {investorNotes.map((t) => (
                <li key={t} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">&rarr;</span>
                  {t}
                </li>
              ))}
            </ul>

            {/* Bottom line */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Bottom Line</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              September was a steady month with an uneven middle. Detached sales grew, semi-detached gave back some of its tight conditions, and row and apartment homes kept adjusting to supply the city built for a faster pace of growth. Sales held, inventory held, and the citywide benchmark drifted down less than a percent on the year.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              That citywide figure of $566,700 is an average of two markets that are moving apart. It is a fine place to start a conversation and a poor place to end one. What matters for your decision is your property type, your price band and your quadrant, and in September those three things were pulling in different directions.
            </p>

            {/* Related */}
            <div className="bg-white rounded-xl border border-neutral-mid px-6 py-5 mb-8">
              <p className="font-semibold text-primary mb-3 text-sm">Keep reading</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/market-reports" className="text-accent underline underline-offset-2">
                    Calgary monthly market reports
                  </Link>
                  <span className="text-gray-500">
                    {" "}
                    &middot; charts, the district map, and the full property-type breakdown
                  </span>
                </li>
                <li>
                  <Link
                    href="/blog/calgary-housing-market-august-2026"
                    className="text-accent underline underline-offset-2"
                  >
                    Last month: August 2026
                  </Link>
                  <span className="text-gray-500"> &middot; where this split started to widen</span>
                </li>
                <li>
                  <Link href="/blog/renting-vs-buying" className="text-accent underline underline-offset-2">
                    Renting vs. Buying in Calgary
                  </Link>
                  <span className="text-gray-500"> &middot; the math behind the entry-level slowdown</span>
                </li>
                <li>
                  <Link href="/mortgage-calculator" className="text-accent underline underline-offset-2">
                    Mortgage calculator
                  </Link>
                  <span className="text-gray-500"> &middot; run a payment at today&apos;s rates</span>
                </li>
              </ul>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-xl border border-neutral-mid px-6 py-4 mb-10 text-sm text-gray-600">
              <p className="font-semibold text-primary mb-2">Sources</p>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://www.creb.com/News/Media_Releases/2026/October/September_2026_Stats/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    CREB: September 2026 media release
                  </a>
                  <span className="text-gray-500"> &middot; citywide and regional market facts</span>
                </li>
                <li>
                  <a
                    href="https://www.creb.com/Housing_Statistics/documents/09_2026_Calgary_Monthly_Stats_Package.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    CREB: City of Calgary monthly stats package, September 2026
                  </a>
                  <span className="text-gray-500">
                    {" "}
                    &middot; property-type and district tables
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.creb.com/Housing_Statistics/documents/09_2026_Regional_Monthly_Stats_Package.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    CREB: Regional monthly stats package, September 2026
                  </a>
                  <span className="text-gray-500">
                    {" "}
                    &middot; Airdrie, Cochrane, Okotoks and Chestermere
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.bankofcanada.ca/press/press-releases/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    Bank of Canada: September 2, 2026 rate decision
                  </a>
                  <span className="text-gray-500"> &middot; policy rate held at 2.25%</span>
                </li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div id="september-cta" className="bg-primary rounded-2xl p-8 md:p-10 text-white">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              No Cost, No Pressure
            </span>
            <h2 className="text-2xl font-bold mt-2 mb-3">
              What Do September&apos;s Numbers Mean for Your Address?
            </h2>
            <p className="text-stone-400 leading-relaxed mb-6 max-w-2xl">
              Citywide averages are a starting point, not an answer. Chan will pull the sales, supply and pricing picture for your specific property type, price band and quadrant, and tell you plainly whether this is a good month to move or a good month to wait.
            </p>
            <ul className="space-y-2 text-sm text-stone-300 mb-7">
              {[
                "Months of supply and days on market for your segment",
                "Recent comparable sales in your neighbourhood",
                "A straight answer on timing, including when it is not yet",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/buyer-intake"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
              >
                Start your home search
              </Link>
              <Link
                href="/sell"
                className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-3 text-sm font-semibold text-stone-300 transition-colors hover:border-accent hover:text-accent"
              >
                Thinking of selling?
              </Link>
              <a
                href="tel:4036810107"
                className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-3 text-sm font-semibold text-stone-300 transition-colors hover:border-accent hover:text-accent"
              >
                Or call 403-681-0107
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-8">
            Data sourced from CREB monthly statistics for September 2026, released October 1, 2026. Benchmark prices reflect the City of Calgary unless a community is named. For informational purposes only and not a substitute for advice on your specific situation.
          </p>

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
              &larr; Back to Blog
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
