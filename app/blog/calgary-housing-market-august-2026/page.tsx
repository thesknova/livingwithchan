import type { Metadata } from "next";
import Link from "next/link";
import BlogCTA from "@/components/BlogCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/calgary-housing-market-august-2026" },
  title:
    "Calgary Housing Market, August 2026: Slower Sales, Steadier Prices | Chan Kawaguchi",
  description:
    "CREB's August 2026 numbers show sales down 16% and new listings down 10%, yet the benchmark price barely moved. Chan Kawaguchi breaks down what held prices up, why condos keep sliding, and what it means for buyers and sellers.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Calgary Housing Market, August 2026: Slower Sales, Steadier Prices, and a Market That Split in Two",
  description:
    "CREB's August 2026 numbers show sales down 16% and new listings down 10%, yet the benchmark price barely moved. Chan Kawaguchi breaks down what held prices up, why condos keep sliding, and what it means for buyers and sellers.",
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
  datePublished: "2026-09-03",
  dateModified: "2026-09-03",
  url: "https://www.livingwithchan.com/blog/calgary-housing-market-august-2026",
};

const snapshot = [
  { label: "Benchmark Price", value: "$569,800", change: "1.1% lower than August 2025", down: true },
  { label: "Sales", value: "1,660", change: "16.4% lower than August 2025", down: true },
  { label: "New Listings", value: "3,141", change: "9.7% lower than August 2025", down: true },
  { label: "Inventory", value: "6,509", change: "2.3% lower than August 2025", down: true },
  { label: "Months of Supply", value: "3.92", change: "16.9% higher than August 2025", down: false },
  { label: "Days on Market", value: "41", change: "7.2% higher than August 2025", down: false },
];

const propertyTypes = [
  {
    name: "Detached",
    price: "$744,300",
    yoy: "Down about 1% year over year",
    tone: "neutral",
    body:
      "Sales fell 12% to 875 units, with the pullback concentrated below $1,000,000. New listings came in at 1,635, down against both July and August 2025. Months of supply drifted up to roughly three months, still the tightest segment in the city.",
    detail:
      "This is the sector holding the citywide benchmark together. Supply is up, but not enough to force sellers to cut.",
  },
  {
    name: "Semi-Detached",
    price: "$690,500",
    yoy: "Up nearly 1% year over year",
    tone: "up",
    body:
      "Year-to-date sales slipped to 1,516 units, down just over 2%. The sales-to-new-listings ratio fell to 56%, and months of supply climbed above three months for the first time since January.",
    detail:
      "The only property type in Calgary still showing a year-over-year price gain, carried by the City Centre, North West, and West districts.",
  },
  {
    name: "Row / Townhouse",
    price: "$415,200",
    yoy: "Down about 5% year over year",
    tone: "down",
    body:
      "Year-to-date sales are off 15%. Months of supply sat near four months for the second straight month, pushing above four in the City Centre, North East, and North, while the West district held near three.",
    detail:
      "New-home competition and more rental product on the market have both pulled buyers away from resale rows.",
  },
  {
    name: "Apartment Condominium",
    price: "$295,400",
    yoy: "Down about 8% year over year",
    tone: "down",
    body:
      "Nearly six months of resale supply, the most oversupplied segment in Calgary. Year-to-date sales have fallen 26%. Prices peaked in August 2024 at $341,300 and now sit close to 13% below that high.",
    detail:
      "Two full years of supply outrunning demand. Falling new listings have stopped inventory from climbing further, but have not been enough to turn the segment around.",
  },
];

const regional = [
  {
    name: "Airdrie",
    price: "$508,800",
    line: "Down about 1% from July and more than 4% year over year",
    body:
      "Year-to-date sales are down 13% against a 7% pullback in new listings. That shift has lifted the sales-to-new-listings ratio enough to keep months of supply below four, but competing markets are still pressuring resale prices. Apartment-style homes are seeing the steepest declines.",
  },
  {
    name: "Cochrane",
    price: "Down nearly 1% from July",
    line: "About 2% lower than last year",
    body:
      "The one regional market with sales growth: year-to-date sales are up more than 5%, driven largely by semi-detached activity. August brought 148 new listings against 94 sales, a ratio above 60%, and months of supply dropped back to just over three.",
  },
  {
    name: "Okotoks",
    price: "$608,400",
    line: "Down more than 1% from July, nearly 2% year over year",
    body:
      "The tightest market in the region. A sales-to-new-listings ratio of 81% kept inventory falling and supply at just over two months. Okotoks has run below-average supply since 2021, and only the extra choice in competing markets is keeping prices from climbing.",
  },
  {
    name: "Chestermere",
    price: "Down more than 1% year over year",
    line: "Nine months of supply",
    body:
      "The clearest buyer's market in the region. The sales-to-new-listings ratio dropped below 30% in August, sending months of supply to nine. Chestermere is still growing, but sales are falling faster than listings.",
  },
];

const condoCauses = [
  {
    title: "Record new supply landed",
    body: "Calgary absorbed an unusually large wave of apartment completions through 2024 and 2025. CMHC has flagged high completion levels in Calgary as a key driver of softening across both the ownership and rental sides of the apartment market.",
  },
  {
    title: "Renting got comfortable again",
    body: "The City of Calgary puts the 2025 purpose-built rental vacancy rate at 5.1%, up from 4.6% in 2024, with 5.7% projected for 2026. Multi-residential rents were down 9.6% year over year in the City's most recent housing trends update.",
  },
  {
    title: "Population growth slowed",
    body: "The City projects roughly 34,000 new residents in 2026, a clear step down from the surge years. Alberta still leads the country in interprovincial migration, but federal immigration policy changes have cut the overall inflow that filled condos fastest.",
  },
];

const buyerNotes = [
  "You have more choice and more time than buyers did in 2023 or 2024. Days on market are up to 41 and months of supply is close to four. Conditional offers and honest negotiation are back on the table in most segments.",
  "Apartments are the buyer's market. Six months of supply, prices 13% off peak, and a thin construction pipeline behind them. If the numbers work as a long hold or a rental, this is the best entry point in three years.",
  "Detached in the West, South West, and City Centre is still competitive. Under three months of supply and positive year-over-year price movement means you should not plan on a bargain there.",
  "Do not shop the citywide average. Ask what months of supply looks like for your property type, price band, and quadrant, because those three things are moving independently right now.",
];

const sellerNotes = [
  "Price against August comparables, not spring ones. Median days on market rose more than 7% year over year, and stale pricing is what creates a price cut later.",
  "Detached and semi-detached sellers are in decent shape. Both segments are near or under balanced conditions, and semi-detached is still up year over year.",
  "Condo and row sellers need to be realistic. In segments carrying five to six months of supply, the listing that sells is usually the one priced at the front of the pack, not the one that starts high and chases the market down.",
  "Fewer competing listings is quietly good news. New listings fell almost 10%, so the sellers who did come to market in August faced less competition than a year ago.",
];

const investorNotes = [
  "Run your numbers on today's rents, not 2024's. With vacancy near 5% and multi-residential rents down 9.6% year over year, a pro forma built on peak rents will not hold.",
  "The condo math has changed in both directions. Entry prices are down 13% from peak, but so are achievable rents. Underwrite both, and stress-test the vacancy assumption.",
  "Watch the construction pipeline. CMHC expects limited apartment condominium starts over the next two years, so today's oversupply is not being replenished at the same rate.",
  "Legal suites remain the strongest cash-flow play in Calgary, and the rules around them have not changed with the market.",
];

export default function AugustMarketPost() {
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
              <span className="text-xs text-stone-400">11 min read</span>
              <span className="text-stone-500 text-xs">&middot;</span>
              <span className="text-xs text-stone-400">September 3, 2026</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Calgary Housing Market, August 2026: Slower Sales, Steadier Prices, and a Market That Split in Two
            </h1>
            <p className="text-stone-400 text-lg mb-6">
              By Chan Kawaguchi &middot; REMAX Complete Realty Agent, Calgary AB
            </p>
            <a
              href="#august-cta"
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
              CREB released its August numbers on September 1, and the headline is easy to misread. Sales fell 16% against last August. New listings fell almost 10%. Days on market stretched out. On paper that sounds like a market in trouble. But the benchmark price barely moved, finishing at $569,800, only about 1% below where it sat a year ago. Understanding why those two things are happening at once is the whole story of Calgary right now.
            </p>

            {/* Snapshot */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The August Scoreboard</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              City of Calgary, August 2026, all residential property types:
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

            {/* Why prices held */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              Why Prices Held While Sales Fell
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A drop in sales only pushes prices down if supply keeps piling up. That is not what happened in August. Sellers stepped back at nearly the same time buyers did. New listings fell to 3,141, and inventory actually finished the month <em>lower</em> than August 2025, at 6,509 units.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The result is a market that slowed down without loosening much. Months of supply rose to 3.92, up almost 17% from a year ago, which is genuinely softer than 2025. But it is nowhere near the six-plus months that forces broad price cuts. In practice, Calgary spent August in a slow, roughly balanced market rather than a falling one.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl px-6 py-4 mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>The number I watch:</strong> months of supply, not sales volume. Sales counts tell you how busy the market was. Months of supply tells you who has leverage. Under three months favours sellers, three to five is broadly balanced, and above five starts favouring buyers. Calgary as a whole is sitting in the middle of that band, but almost no individual buyer is shopping in &ldquo;Calgary as a whole.&rdquo;
              </p>
            </div>

            {/* Split market */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              The Market Split by Price Range
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most useful line in CREB&apos;s release is that the sales pullback was not evenly spread. Homes priced above $1,000,000 actually posted <em>gains</em> over last year, mostly detached and semi-detached properties, and that is also where most of the new supply showed up.
            </p>
            <blockquote className="border-l-4 border-neutral-mid pl-6 py-2 mb-6 text-gray-600 italic leading-relaxed">
              &ldquo;While sales growth in the upper end of the market was possible thanks to improved supply choice, it also reflects longer-term confidence in our market, as some buyers are not shying away from taking advantage of the available supply. Meanwhile, we have not seen the same pickup in activity in the lower price ranges, as favourable rental conditions are slowing the transition to ownership.&rdquo;
              <span className="block not-italic text-sm text-gray-500 mt-3">
                Ann-Marie Lurie, Chief Economist, Calgary Real Estate Board
              </span>
            </blockquote>
            <p className="text-gray-700 leading-relaxed mb-4">
              That second sentence deserves more attention than it usually gets, and I will come back to it, because it explains most of what is happening at the entry level of the Calgary market.
            </p>

            <BlogCTA
              id="august-2026-mid"
              eyebrow="Ask Chan"
              heading="Your price range is not the citywide market"
              body="A $400,000 condo search and a $1.1M detached search are happening in two completely different Calgary markets right now, with opposite leverage. Chan will pull the supply and pricing picture for your actual budget and neighbourhood, not the headline average."
              href="/buyer-intake"
              action="Get your segment breakdown"
            />

            {/* Property types */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              Four Property Types, Four Different Markets
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The citywide benchmark hides a spread that has widened all year. Here is where each segment finished August:
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

            {/* Condo deep dive */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              The Condo Correction Is Real, and It Has a Cause
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At $295,400, the apartment benchmark is roughly 13% below its August 2024 peak of $341,300. That is a meaningful correction, and it is not a mystery. Three things happened at once.
            </p>
            <ul className="space-y-3 mb-6">
              {condoCauses.map((item) => (
                <li key={item.title} className="flex items-start gap-3 text-gray-700">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">&rarr;</span>
                  <span>
                    <strong>{item.title}:</strong> {item.body}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Put those together and Lurie&apos;s comment about &ldquo;favourable rental conditions&rdquo; stops being a throwaway line. When a renter can find a good unit easily and negotiate on price, the pressure to buy a starter condo drops sharply. That is exactly what CREB is measuring when apartment sales fall 26% year to date while apartment inventory stays elevated.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              There is a flip side, and it matters if you are on the buying end. CMHC expects apartment condominium starts to stay limited over the next two years, because weak presales make new projects hard to finance. The supply weighing on prices today is largely supply that has already been built. The pipeline behind it is thinner.
            </p>

            {/* Geography */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              Geography Is Doing More Work Than the Citywide Number
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the detached market alone, August conditions ranged from tight to soft depending purely on which side of the city you were standing on.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-neutral-mid p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Under 3 Months of Supply
                </p>
                <p className="text-lg font-bold text-primary mb-1">
                  North West, West, South, South East
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Still seller-leaning. The West and City Centre districts posted detached price gains of more than 2% year over year.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-neutral-mid p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Over 4 Months of Supply
                </p>
                <p className="text-lg font-bold text-primary mb-1">North, North East</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Buyer-leaning. Detached price declines were steepest in the North East at more than 6%, and row prices there fell more than 12%.
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              A detached home in the West and a detached home in the North East are not in the same market, and pricing either one off the citywide benchmark will cost somebody money. The row segment shows the same spread even more starkly: declines ran from just over 1% in the North West to more than 12% in the North East.
            </p>

            {/* Regional */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Outside the City Limits</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The surrounding communities diverged just as much as Calgary&apos;s own districts did:
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
              Okotoks at roughly two months of supply and Chestermere at nine months are about twenty minutes apart. If you have been treating &ldquo;the surrounding communities&rdquo; as one option, August is a good month to stop.
            </p>

            {/* Backdrop */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              The Backdrop: Rates and People
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Two forces sit behind every number above.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Rates have stopped moving.</strong> On September 2, the Bank of Canada held its policy rate at 2.25% for another decision, with the next announcement scheduled for October 28. The Bank flagged upside risks to inflation from new trade actions and higher energy prices, which makes a further cut less of a sure thing than it looked earlier in the year. For buyers, the practical read is that borrowing costs are stable rather than improving, so waiting for a materially better rate is a weaker argument than it was twelve months ago.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Population growth has cooled but not reversed.</strong> Alberta has led Canada in net interprovincial migration for fifteen consecutive quarters, and the province is still projected to add tens of thousands of arrivals from other provinces. What changed is international immigration, which fell sharply in the first quarter of 2026. Fewer new arrivals means less pressure at the entry level, which is precisely where Calgary&apos;s softness is concentrated.
            </p>

            {/* What it means */}
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
              What August Actually Means for You
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
              August 2026 was not a downturn. It was a slow month in a market that has quietly split in two. The upper end, mostly detached and semi-detached above $1,000,000, is seeing genuine buyer confidence and even sales growth. The entry level is being held back by a rental market that is currently a pretty good deal, and by an apartment segment still working through supply built for a faster-growing city.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              The citywide benchmark of $569,800, down about 1% on the year, is an average of those two stories. It describes almost nobody&apos;s actual situation. If you want to know what August means for you, the honest answer starts with your property type, your price band, and your quadrant.
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
                    &middot; charts, property-type breakdowns, and regional data
                  </span>
                </li>
                <li>
                  <Link href="/blog/renting-vs-buying" className="text-accent underline underline-offset-2">
                    Renting vs. Buying in Calgary
                  </Link>
                  <span className="text-gray-500"> &middot; the math behind the rental question above</span>
                </li>
                <li>
                  <Link
                    href="/blog/legal-vs-illegal-basement-suites-calgary"
                    className="text-accent underline underline-offset-2"
                  >
                    Legal vs. Illegal Basement Suites
                  </Link>
                  <span className="text-gray-500"> &middot; for investors weighing cash flow</span>
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
                    href="https://www.creb.com/housing-statistics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    CREB: Housing Statistics
                  </a>
                  <span className="text-gray-500">
                    {" "}
                    &middot; August 2026 media release and monthly stats packages for the City of Calgary and region
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.calgary.ca/communities/housing-in-calgary/housing-research/housing-trends.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    City of Calgary: Housing Trends
                  </a>
                  <span className="text-gray-500">
                    {" "}
                    &middot; rental vacancy, rent changes, and population projections
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.cmhc-schl.gc.ca/observer/2026/2026-mid-year-rental-market-update"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    CMHC: 2026 Mid-Year Rental Market Update
                  </a>
                  <span className="text-gray-500"> &middot; Calgary vacancy and asking-rent trends</span>
                </li>
                <li>
                  <a
                    href="https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/housing-market/housing-market-outlook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    CMHC: Housing Market Outlook 2026
                  </a>
                  <span className="text-gray-500">
                    {" "}
                    &middot; apartment condominium starts and completions
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.bankofcanada.ca/2026/09/fad-press-release-2026-09-02/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    Bank of Canada: September 2, 2026 rate decision
                  </a>
                  <span className="text-gray-500"> &middot; policy rate held at 2.25%</span>
                </li>
                <li>
                  <a
                    href="https://www.calgary.ca/research/economic-outlook.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    City of Calgary: Calgary and Region Economic Outlook
                  </a>
                  <span className="text-gray-500"> &middot; population and migration outlook</span>
                </li>
                <li>
                  <a
                    href="https://www.honestdoor.com/cities/ab/calgary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2"
                  >
                    HonestDoor: Calgary
                  </a>
                  <span className="text-gray-500">
                    {" "}
                    &middot; neighbourhood-level price estimates and sales history
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div id="august-cta" className="bg-primary rounded-2xl p-8 md:p-10 text-white">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              No Cost, No Pressure
            </span>
            <h2 className="text-2xl font-bold mt-2 mb-3">
              What Do August&apos;s Numbers Mean for Your Address?
            </h2>
            <p className="text-stone-400 leading-relaxed mb-6 max-w-2xl">
              Citywide averages are a starting point, not an answer. Chan will pull the sales, supply, and pricing picture for your specific property type, price band, and quadrant, and tell you plainly whether this is a good month to move or a good month to wait.
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
            Data sourced from CREB monthly statistics for August 2026, released September 1, 2026. Benchmark prices reflect the City of Calgary. For informational purposes only and not a substitute for advice on your specific situation.
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
