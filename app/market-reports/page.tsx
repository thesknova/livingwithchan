import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllReports,
  getLatestDistrictReport,
  formatPrice,
  formatChange,
  marketLabel,
  marketColor,
} from "@/lib/market-reports";
import DistrictMap from "@/components/market-report/DistrictMap";
import { DISTRICT_NAMES } from "@/lib/districts";
import { SITE_URL } from "@/lib/site";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const TITLE = "Calgary Housing Market Reports by District";
const DESCRIPTION =
  "Interactive map of Calgary house prices across all eight CREB districts — City Centre, North, North East, North West, West, East, South and South East. Monthly benchmark prices, months of supply, and market conditions for detached, semi-detached, row and apartment homes.";

export const metadata: Metadata = {
  alternates: { canonical: "/market-reports" },
  title: TITLE,
  description: DESCRIPTION,
  // Without these the page inherits the site-wide card, which advertises the
  // homepage (og:url included) on every share of this page. Next.js replaces
  // the parent `openGraph`/`twitter` objects wholesale rather than merging
  // them, so siteName, the image, and the card type have to be restated here
  // or they vanish from this page.
  openGraph: {
    type: "article",
    siteName: "Living With Chan",
    url: "/market-reports",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chan Kawaguchi — REMAX Complete Realty Agent, Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

export default function MarketReportsPage() {
  const reports = getAllReports();
  const [latest, ...older] = reports;
  const mapReport = getLatestDistrictReport();

  // A monthly statistics page is a Dataset; the breadcrumb earns the
  // "Home › Market Reports" trail in the result rather than a bare URL.
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        name: "Calgary Housing Market Benchmark Prices by District",
        description:
          "Monthly MLS® Home Price Index benchmark prices, months of supply, and active inventory for each of CREB's eight Calgary reporting districts, broken down by detached, semi-detached, row and apartment property types.",
        url: `${SITE_URL}/market-reports`,
        license: "https://www.creb.com/",
        isAccessibleForFree: true,
        creator: {
          "@type": "RealEstateAgent",
          name: "Chan Kawaguchi",
          url: SITE_URL,
        },
        spatialCoverage: {
          "@type": "Place",
          name: "Calgary, Alberta, Canada",
          geo: {
            "@type": "GeoCoordinates",
            latitude: 51.0447,
            longitude: -114.0719,
          },
        },
        ...(mapReport && {
          temporalCoverage: `${mapReport.dataYear}-${String(
            MONTHS.indexOf(mapReport.dataMonth) + 1
          ).padStart(2, "0")}`,
          dateModified: mapReport.publishedAt,
          variableMeasured: [
            "Benchmark price",
            "Year-over-year price change",
            "Month-over-month price change",
            "Months of supply",
            "Active listings",
          ],
        }),
        keywords: DISTRICT_NAMES.map((d) => `${d} Calgary house prices`),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Market Reports",
            item: `${SITE_URL}/market-reports`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-neutral-light min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Market Data
          </span>
          <h1 className="font-display text-4xl sm:text-5xl mt-3 mb-3 leading-tight">
            Calgary Housing Market Reports
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Updated every month with benchmark prices, sales activity, and market
            conditions across Calgary and the surrounding communities.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16 flex flex-col gap-14">
        {/* ── The map, front and centre ───────────────────────────── */}
        {mapReport && <DistrictMap report={mapReport} />}

        {/* Summary in prose. The map carries these figures as SVG text and
            table cells; naming each district in a sentence gives search
            engines something to match for "<district> Calgary house prices". */}
        {mapReport?.districts && (() => {
          const d = mapReport.districts.Detached;
          const ranked = [...DISTRICT_NAMES].sort((a, b) => d[b].price - d[a].price);
          const [top, bottom] = [ranked[0], ranked[ranked.length - 1]];
          const rising = ranked.filter((n) => d[n].yoy > 0);
          const steepest = [...DISTRICT_NAMES].sort((a, b) => d[a].yoy - d[b].yoy)[0];
          const money = (n: number) => `$${n.toLocaleString()}`;
          const pct = (n: number) => `${n > 0 ? "+" : ""}${n.toFixed(1)}%`;

          return (
            <section className="bg-white rounded-2xl border border-neutral-mid shadow-sm p-7 sm:p-9">
              <h2 className="font-display text-2xl text-primary mb-4">
                What Calgary&rsquo;s eight districts show this month
              </h2>
              <div className="text-[15px] leading-relaxed text-text-dark max-w-3xl flex flex-col gap-3">
                <p>
                  Across {mapReport.dataMonth} {mapReport.dataYear}, the detached benchmark
                  price ranged from {money(d[top].price)} in {top} down to{" "}
                  {money(d[bottom].price)} in {bottom} — a spread of{" "}
                  {money(d[top].price - d[bottom].price)}
                  {" between Calgary’s most and least expensive districts. "}
                  {rising.length > 0 ? (
                    <>
                      Only {rising.map((n, i) =>
                        `${i > 0 ? (i === rising.length - 1 ? " and " : ", ") : ""}${n} (${pct(d[n].yoy)})`
                      ).join("")}{" "}
                      {rising.length === 1 ? "is" : "are"} up against last year.
                    </>
                  ) : (
                    <>Every district is below last year&rsquo;s prices.</>
                  )}{" "}
                  The steepest decline is in {steepest} at {pct(d[steepest].yoy)}.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 mt-1">
                  {ranked.map((name) => {
                    const s = d[name];
                    const cond = s.mos < 2 ? "seller's market" : s.mos <= 4 ? "balanced" : "buyer's market";
                    return (
                      <li key={name} className="text-sm">
                        <strong className="text-primary font-semibold">{name}</strong>
                        <span className="text-text-muted">
                          {" "}— detached homes {money(s.price)}, {pct(s.yoy)} year over year,{" "}
                          {s.mos.toFixed(1)} months of supply ({cond})
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <p className="text-text-muted text-sm mt-1">
                  Switch the map above to semi-detached, row or apartment homes to see how
                  each district differs by property type, or open{" "}
                  <Link
                    href={`/market-reports/${latest.slug}`}
                    className="text-accent underline underline-offset-2 hover:text-accent-dark"
                  >
                    the full {latest.month} {latest.year} report
                  </Link>{" "}
                  for citywide sales, new listings, and the surrounding communities.
                </p>
              </div>
            </section>
          );
        })()}

        {/* ── This month's report ─────────────────────────────────── */}
        {latest && (
          <section>
            <div className="flex items-baseline justify-between gap-4 mb-5">
              <h2 className="font-display text-2xl text-primary">This month&rsquo;s report</h2>
              <span className="text-xs text-text-muted whitespace-nowrap">
                {new Date(latest.publishedAt).toLocaleDateString("en-CA", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <Link
              href={`/market-reports/${latest.slug}`}
              className="group block bg-white rounded-2xl border border-neutral-mid shadow-sm hover:shadow-md hover:border-accent/40 transition-all overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
                <div className="p-7 sm:p-9 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    {latest.month} {latest.year} · {latest.dataMonth} data
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl text-primary leading-snug group-hover:text-accent transition-colors">
                    {latest.headline}
                  </h3>
                  <p className="text-sm text-text-dark leading-relaxed mt-3 line-clamp-4">
                    {latest.summary}
                  </p>
                  <div className="mt-auto pt-6 flex items-center gap-4">
                    <span className="text-sm font-semibold text-white bg-accent px-5 py-2.5 rounded-full group-hover:bg-accent-dark transition-colors">
                      Read the full report
                    </span>
                    <span className={`text-xs font-semibold ${marketColor(latest.marketType)}`}>
                      {marketLabel(latest.marketType)}
                    </span>
                  </div>
                </div>

                {/* Headline figures */}
                <div className="bg-neutral-light border-t lg:border-t-0 lg:border-l border-neutral-mid p-7 sm:p-9 grid grid-cols-2 gap-x-6 gap-y-7 content-center">
                  {[
                    {
                      label: "Benchmark price",
                      value: formatPrice(latest.benchmarkPrice.overall),
                      sub: `${formatChange(latest.benchmarkPriceYoy.overall)} YoY`,
                      up: latest.benchmarkPriceYoy.overall >= 0,
                    },
                    {
                      label: "Sales",
                      value: latest.sales.total.toLocaleString(),
                      sub: `${formatChange(latest.sales.yoyChange)} YoY`,
                      up: latest.sales.yoyChange >= 0,
                    },
                    {
                      label: "Active listings",
                      value: latest.activeListings.total.toLocaleString(),
                      sub: `${formatChange(latest.activeListings.yoyChange)} YoY`,
                      up: latest.activeListings.yoyChange >= 0,
                    },
                    {
                      label: "Days on market",
                      value: String(latest.daysOnMarket),
                      sub: "median",
                      up: null,
                    },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">
                        {s.label}
                      </p>
                      <p
                        className="font-display text-2xl sm:text-3xl text-primary mt-1 leading-none"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {s.value}
                      </p>
                      <p
                        className={`text-xs mt-1.5 font-semibold ${
                          s.up === null
                            ? "text-text-muted"
                            : s.up
                              ? "text-emerald-700"
                              : "text-red-600"
                        }`}
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {s.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ── Archive ─────────────────────────────────────────────── */}
        {older.length > 0 && (
          <section>
            <div className="flex items-baseline justify-between gap-4 mb-5">
              <h2 className="font-display text-2xl text-primary">Past reports</h2>
              <span className="text-xs text-text-muted">{older.length} in the archive</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {older.map((r) => (
                <Link
                  key={r.slug}
                  href={`/market-reports/${r.slug}`}
                  className="group bg-white rounded-2xl border border-neutral-mid shadow-sm hover:shadow-md hover:border-accent/40 transition-all p-6 flex flex-col"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1.5">
                    {r.month} {r.year}
                  </p>
                  <h3 className="text-base font-semibold text-primary leading-snug group-hover:text-accent transition-colors">
                    {r.headline}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 mt-5 mb-4">
                    <div className="bg-neutral-light rounded-lg p-3">
                      <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">
                        Benchmark
                      </p>
                      <p
                        className="text-sm font-bold text-primary"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {formatPrice(r.benchmarkPrice.overall)}
                      </p>
                      <p
                        className="text-xs text-text-muted"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {formatChange(r.benchmarkPriceYoy.overall)} YoY
                      </p>
                    </div>
                    <div className="bg-neutral-light rounded-lg p-3">
                      <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">
                        Sales
                      </p>
                      <p
                        className="text-sm font-bold text-primary"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {r.sales.total.toLocaleString()}
                      </p>
                      <p
                        className="text-xs text-text-muted"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {formatChange(r.sales.yoyChange)} YoY
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className={`text-xs font-semibold ${marketColor(r.marketType)}`}>
                      {marketLabel(r.marketType)}
                    </span>
                    <span className="text-xs text-text-muted">
                      {new Date(r.publishedAt).toLocaleDateString("en-CA", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {reports.length === 0 && (
          <p className="text-text-muted text-sm">No reports published yet.</p>
        )}

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <div className="bg-primary rounded-2xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div>
            <h2 className="font-display text-2xl mb-1.5">Want a personal market analysis?</h2>
            <p className="text-stone-400 text-sm max-w-lg">
              Chan can dig into the data for your specific neighbourhood, price range, or
              property type.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-accent text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent-dark transition-colors"
          >
            Talk to Chan
          </Link>
        </div>
      </div>
    </div>
  );
}
