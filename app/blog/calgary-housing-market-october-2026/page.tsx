import type { Metadata } from "next";
import Link from "next/link";
import BlogCTA from "@/components/BlogCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/calgary-housing-market-october-2026" },
  title:
    "Calgary Housing Market, October 2026: Supply Eases, and Rates Turn | Chan Kawaguchi",
  description:
    "CREB's October 2026 numbers show sales down 15% but listings down too, holding supply under four months. Chan Kawaguchi breaks down the steady half of the market, the softening half, and what the Bank of Canada's first rate hike in three years changes.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Calgary Housing Market, October 2026: Supply Eases Into Winter, and Rates Turn the Other Way",
  description:
    "CREB's October 2026 numbers show sales down 15% but listings down too, holding supply under four months. Chan Kawaguchi breaks down the steady half of the market, the softening half, and what the Bank of Canada's first rate hike in three years changes.",
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
  datePublished: "2026-11-10",
  dateModified: "2026-11-10",
  url: "https://www.livingwithchan.com/blog/calgary-housing-market-october-2026",
};

const snapshot = [
  { label: "Benchmark Price", value: "$564,200", change: "0.4% lower than October 2025", down: true },
  { label: "Sales", value: "1,592", change: "15.3% lower than October 2025", down: true },
  { label: "New Listings", value: "2,928", change: "9.4% lower than October 2025", down: true },
  { label: "Inventory", value: "6,173", change: "4.6% lower than October 2025", down: true },
  { label: "Months of Supply", value: "3.88", change: "12.6% higher than October 2025", down: false },
  { label: "Days on Market", value: "43", change: "Level with October 2025", down: false },
];

const propertyTypes = [
  {
    name: "Detached",
    price: "$735,100",
    yoy: "Down 0.7% year over year",
    tone: "neutral",
    body:
      "847 sales, down about 16% from last October, but new listings fell further to 1,505. That pushed the sales-to-new-listings ratio up to 56% and held inventory at 2,832, right about where it sat a year ago. Months of supply: 3.34.",
    detail:
      "Fewer homes traded hands, yet the balance between buyers and sellers barely moved. This is still the anchor of the citywide benchmark.",
  },
  {
    name: "Semi-Detached",
    price: "$685,200",
    yoy: "Up 0.8% year over year",
    tone: "up",
    body:
      "The tightest segment in the city. 184 sales against 302 new listings is a 61% ratio, the highest of the four types, and months of supply fell back to 3.16 from nearly four in September. Inventory sits at 581.",
    detail:
      "The only property type with a higher benchmark than a year ago, and the one that firmed up in October rather than loosening.",
  },
  {
    name: "Row / Townhouse",
    price: "$407,500",
    yoy: "Down 5.1% year over year",
    tone: "down",
    body:
      "241 sales against 483 new listings kept the ratio under 50% for a second straight month. Inventory of 1,069 is about 5% above last October, and months of supply sits at 4.44. Year-to-date sales are off more than 15%.",
    detail:
      "Prices have now slipped for four months running. Competition from new builds and from the rental market is still pulling buyers away.",
  },
  {
    name: "Apartment Condominium",
    price: "$288,800",
    yoy: "Down 7.9% year over year",
    tone: "down",
    body:
      "320 sales and 638 new listings. Inventory eased to 1,691 as sellers pulled back, but that is still about 13% above a typical October, and months of supply stayed above five at 5.28.",
    detail:
      "Roughly 15% below the peak this segment hit in August 2024. Prices eased in every district again this month.",
  },
];

const regional = [
  {
    name: "Airdrie",
    price: "$502,500",
    line: "Down about 1% from September and 3.9% year over year",
    body:
      "113 sales, down nearly 17% year over year, with year-to-date sales off 13%. New listings slowed to 204 and inventory fell to 461, leaving just over four months of supply at 4.08. Prices eased across every property type, and the detached benchmark of $587,300 puts Airdrie about 20% below Calgary.",
  },
  {
    name: "Cochrane",
    price: "$571,100",
    line: "Down about 1% from September and 1.9% year over year",
    body:
      "Year-to-date sales are still up near 4%, the only regional market in the black, but October brought 62 sales against 142 new listings, a 44% ratio. Inventory rose to 361, which is unusual for October, and months of supply reached 5.82, the highest since early 2020.",
  },
  {
    name: "Okotoks",
    price: "$600,100",
    line: "Down about 1% from September and 3.3% year over year",
    body:
      "Still the tightest town in the region, but loosening: 45 sales and 137 units in inventory put months of supply at 3.04, the highest reading this year. The sales-to-new-listings ratio fell back into the 50s after four strong months.",
  },
  {
    name: "Chestermere",
    price: "$683,800",
    line: "Down about 1% from September and 3.5% year over year",
    body:
      "49 sales against 142 new listings, a ratio in the 30s, with 291 units in inventory and 5.94 months of supply. Prices have trended down since July, though on a year-to-date basis they are only about 1% below last year.",
  },
];

const buyerNotes = [
  "The rate math changed on October 28. If you are shopping with a pre-approval issued before that, confirm what it is still worth before you write an offer.",
  "Fewer listings came to market than in September, down 12.7%, so there is less to choose from than there was in the fall. Waiting for selection to improve is not an obvious win right now.",
  "Apartments and rows still carry the supply, at 5.28 and 4.44 months. That is where your negotiating room is, especially in the North East and East.",
  "Detached in the City Centre and West is still rising, at 3.3% and just over 3% year over year. Those two districts are not where you will find a discount.",
];

const sellerNotes = [
  "Inventory fell almost 5% from last October, so your listing faces less competition than it would have a year ago. That is the quiet good news in this month's numbers.",
  "Semi-detached sellers have the strongest position in the city: 61% of new listings sold through, and supply back down to 3.16 months.",
  "Row and apartment sellers should price to the front of the pack. Both segments have given back ground for four straight months.",
  "Days on market held at 43, the same as last October. The homes that sell are still selling at a normal pace, as long as the price is right.",
];

const investorNotes = [
  "Borrowing costs rose for the first time in three years. Rerun your financing numbers before committing, and do not assume the next move is down.",
  "Apartment entry prices keep sliding: $288,800 citywide, down 7.9% on the year, and down 13.1% in the East and 11.8% in the North East.",
  "Watch the supply, not just the price. The North carries 9.47 months of apartment supply and the North East 8.60, with 8.47 months of row supply in the North East.",
  "Inventory is thinning across the board, down 4.6% year over year. If sellers keep stepping back through winter, the oversupply story could change faster than the price story suggests.",
];

export default function OctoberMarketPost() {
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
              <span className="text-xs text-stone-400">November 10, 2026</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Calgary Housing Market, October 2026: Supply Eases Into Winter, and Rates Turn the Other Way
            </h1>
            <p className="text-stone-400 text-lg mb-6">
              By Chan Kawaguchi &middot; REMAX Complete Realty Agent, Calgary AB
            </p>
            <a
              href="#october-cta"
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
              Two things happened in Calgary this month that pull against each other. CREB&apos;s October numbers show a market that quietly slowed on both sides: 1,592 sales, down 15% from last October, with sellers pulling back just as fast. Four days before those numbers landed, the Bank of Canada raised its policy rate for the first time in more than three years. The first story is about a market settling into winter. The second changes the arithmetic for anyone planning to buy in it.
            </p>

            {/* Snapshot */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The October Scoreboard</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              City of Calgary, October 2026, all residential property types:
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

            {/* Both sides stepped back */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              Both Sides Stepped Back
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A 15% drop in sales sounds alarming until you look at what sellers did. New listings fell to 2,928, down 9.4% from last October and 12.7% from September. With fewer homes arriving than leaving, inventory actually fell to 6,173 units, nearly 5% below last October.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              That is why the benchmark barely moved. At $564,200, Calgary prices are 0.4% below where they sat a year ago. Months of supply finished at 3.88, up about 13% on the year but still under four, and days on market held at 43, exactly where it was last October. This is a quieter market, not a falling one.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl px-6 py-4 mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>The year-to-date picture is softer than the month:</strong> sales are down nearly 11% for 2026 so far, and year-to-date benchmark prices are close to 3% below last year. October looks steady partly because last autumn is a gentler comparison than last spring.
              </p>
            </div>

            {/* The split */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              The Same Split, One Month Later
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Detached prices are 0.7% below last October and semi-detached prices are actually 0.8% higher. Row homes are down 5.1% and apartments 7.9%. The gap between the steady half of the market and the softening half has been the defining feature of 2026, and October did not close it.
            </p>
            <blockquote className="border-l-4 border-neutral-mid pl-6 py-2 mb-6 text-gray-600 italic leading-relaxed">
              &ldquo;Much of the downward pressure on prices is occurring in the oversupplied higher-density segments of the market, while detached and semi-detached prices have remained more stable. Even within the detached market, we see variation as the City Centre and West districts continue to report price gains over 2025, while prices have declined by more than six per cent in the North East district.&rdquo;
              <span className="block not-italic text-sm text-gray-500 mt-3">
                Ann-Marie Lurie, Chief Economist, Calgary Real Estate Board
              </span>
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              One encouraging detail underneath the apartment numbers: inventory in that segment fell again, because sellers stopped listing. The supply that has weighed on condo prices for two years is finally being drawn down, slowly.
            </p>

            <BlogCTA
              id="october-2026-mid"
              eyebrow="Ask Chan"
              heading="The rate changed. Does your plan still work?"
              body="A quarter point does not sound like much until you put it against your actual mortgage, price range and timeline. Chan will run the numbers for your situation and tell you plainly whether this is still the right winter to move."
              href="/contact"
              action="Talk it through with Chan"
            />

            {/* Property types */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              Four Property Types, Four Different Months
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here is where each segment finished October:
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

            {/* Rates */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              What Changed on October 28
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Bank of Canada raised its policy rate by a quarter point to 2.5%, the first increase in more than three years. The Bank pointed to inflation running near 3% since April and expected to reach about 3.5% by year end, driven largely by energy prices. In its words, Governing Council moved &ldquo;to reduce the risk that continuing high energy prices spread broadly&rdquo; through the rest of the economy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Bank also said that &ldquo;there could be a need to increase the policy rate further, but given uncertainties, Governing Council agreed to proceed carefully.&rdquo; The next decision comes on December 9.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For most of this year, the argument for waiting was that borrowing might get cheaper. That argument is now weaker, not stronger. If you hold a pre-approval written before late October, it is worth asking your broker what it is worth today rather than assuming.
            </p>

            {/* Geography */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              Where the Declines Actually Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The citywide number of 0.4% hides a ten-point spread across the detached market alone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-neutral-mid p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Detached, still rising
                </p>
                <p className="text-lg font-bold text-primary mb-1">City Centre, West</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Up 3.3% to $992,500 and just over 3% to $988,400 year over year. The West is the tightest district in the city at 2.51 months of supply.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-neutral-mid p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Detached, falling hardest
                </p>
                <p className="text-lg font-bold text-primary mb-1">East, North East, North</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Down 6.8% to $463,800, 6.6% to $548,000, and 3.5% to $635,700. Both the East and North East carry over four months of detached supply.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The same geography runs deeper in the other segments. Apartments fell 13.1% in the East and 11.8% in the North East, and row homes fell 11.5% in the East and 8.9% in the North East. The supply tells the same story: 9.47 months of apartment supply in the North, 8.60 in the North East, and 8.47 months of row supply in the North East. Those are genuine buyer&apos;s markets inside a city that, on average, is not one.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can see all eight districts, by property type, on the{" "}
              <Link href="/market-reports" className="text-accent underline underline-offset-2">
                market reports page
              </Link>
              , where the map now carries October&apos;s numbers.
            </p>

            {/* Regional */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Outside the City Limits</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              October loosened every one of the surrounding towns:
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
              Cochrane is the one to watch. It has been the only regional market with sales growth this year, and it just posted its highest months of supply since early 2020. A single month is not a trend, but it is worth a second look if you are buying or selling there.
            </p>

            {/* What it means */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              What October Means for You
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
              October was a slow month that held its shape. Sales fell, listings fell with them, inventory tightened, and the benchmark finished within half a percent of last year. Detached and semi-detached homes stayed steady, row and apartment homes kept giving back ground, and the gap between the north east corner of the city and the west side widened again.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              What is genuinely new is the rate. For three years the direction of travel on borrowing costs was down or flat, and that shaped how people timed their moves. If you have been waiting for cheaper money before buying, the past two weeks are a good reason to revisit the plan rather than extend it.
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
                    href="/blog/calgary-housing-market-september-2026"
                    className="text-accent underline underline-offset-2"
                  >
                    Last month: September 2026
                  </Link>
                  <span className="text-gray-500"> &middot; when detached sales held the line</span>
                </li>
                <li>
                  <Link href="/mortgage-calculator" className="text-accent underline underline-offset-2">
                    Mortgage calculator
                  </Link>
                  <span className="text-gray-500"> &middot; run a payment at the new rate</span>
                </li>
                <li>
                  <Link href="/blog/renting-vs-buying" className="text-accent underline underline-offset-2">
                    Renting vs. Buying in Calgary
                  </Link>
                  <span className="text-gray-500"> &middot; the math behind the entry-level slowdown</span>
                </li>
              </ul>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-xl border border-neutral-mid px-6 py-4 mb-10 text-sm text-gray-600">
              <p className="font-semibold text-primary mb-2">Sources</p>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://www.creb.com/News/Media_Releases/2026/November/October_2026_Stats/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    CREB: October 2026 media release
                  </a>
                  <span className="text-gray-500"> &middot; citywide and regional market facts</span>
                </li>
                <li>
                  <a
                    href="https://www.creb.com/Housing_Statistics/documents/10_2026_Calgary_Monthly_Stats_Package.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    CREB: City of Calgary monthly stats package, October 2026
                  </a>
                  <span className="text-gray-500"> &middot; property-type and district tables</span>
                </li>
                <li>
                  <a
                    href="https://www.creb.com/Housing_Statistics/documents/10_2026_Regional_Monthly_Stats_Package.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    CREB: Regional monthly stats package, October 2026
                  </a>
                  <span className="text-gray-500">
                    {" "}
                    &middot; Airdrie, Cochrane, Okotoks and Chestermere
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.bankofcanada.ca/2026/10/fad-press-release-2026-10-28/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    Bank of Canada: October 28, 2026 rate decision
                  </a>
                  <span className="text-gray-500"> &middot; policy rate raised to 2.5%</span>
                </li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div id="october-cta" className="bg-primary rounded-2xl p-8 md:p-10 text-white">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              No Cost, No Pressure
            </span>
            <h2 className="text-2xl font-bold mt-2 mb-3">
              What Do October&apos;s Numbers Mean for Your Address?
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
            Data sourced from CREB monthly statistics for October 2026, released November 2, 2026. Benchmark prices reflect the City of Calgary unless a community is named. For informational purposes only and not a substitute for advice on your specific situation.
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
