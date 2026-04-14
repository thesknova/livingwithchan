import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getReport,
  getAllReports,
  formatPrice,
  formatChange,
  marketLabel,
  marketColor,
} from "@/lib/market-reports";
import PrintButton from "@/components/market-report/PrintButton";

export async function generateStaticParams() {
  return getAllReports().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = getReport(slug);
  if (!report) return {};
  return {
    title: `${report.month} ${report.year} Market Infographic | Chan Kawaguchi`,
  };
}

export default async function InfographicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = getReport(slug);
  if (!report) notFound();

  const mColor = marketColor(report.marketType);

  const types = [
    { label: "Detached", price: report.benchmarkPrice.detached, yoy: report.benchmarkPriceYoy.detached },
    { label: "Semi-Det.", price: report.benchmarkPrice.semiDetached, yoy: report.benchmarkPriceYoy.semiDetached },
    { label: "Townhouse", price: report.benchmarkPrice.townhouse, yoy: report.benchmarkPriceYoy.townhouse },
    { label: "Condo/Apt", price: report.benchmarkPrice.condo, yoy: report.benchmarkPriceYoy.condo },
  ];

  return (
    <>
      {/* Print styles — hide chrome when printing */}
      <style>{`
        @media print {
          header, nav, footer, .no-print { display: none !important; }
          .print-full { margin: 0 !important; padding: 0 !important; }
        }
      `}</style>

      <div className="bg-neutral-light min-h-screen">
        {/* Controls bar — hidden on print */}
        <div className="no-print bg-primary text-white px-6 py-4">
          <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div>
              <Link
                href={`/market-reports/${slug}`}
                className="text-xs text-stone-400 hover:text-accent transition-colors"
              >
                ← Back to full report
              </Link>
              <p className="text-sm font-bold mt-0.5">
                {report.month} {report.year} — Social Media Infographic
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={`/api/infographic/${slug}`}
                download={`calgary-market-${slug}.png`}
                className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-accent/90 transition-colors"
              >
                ⬇ Download PNG (Instagram)
              </a>
              <PrintButton />
            </div>
          </div>
        </div>

        {/* Infographic card */}
        <div className="max-w-2xl mx-auto px-6 py-10 print-full">
          <div className="bg-primary rounded-2xl overflow-hidden shadow-xl">
            {/* Accent top bar */}
            <div className="h-1 bg-accent" />

            <div className="p-8 sm:p-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
                    Calgary Housing Market
                  </p>
                  <h1 className="text-5xl font-extrabold text-white leading-none">
                    {report.month}
                  </h1>
                  <p className="text-2xl font-light text-stone-400">{report.year}</p>
                </div>
                <span className={`text-xs font-bold px-4 py-2 rounded-full border ${mColor} border-current mt-1`}>
                  {marketLabel(report.marketType)}
                </span>
              </div>

              {/* Benchmark hero */}
              <div className="bg-white/5 rounded-xl p-6 mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">
                    Overall Benchmark Price
                  </p>
                  <p className="text-4xl font-extrabold text-white">
                    {formatPrice(report.benchmarkPrice.overall)}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-2xl font-bold ${
                      report.benchmarkPriceYoy.overall >= 0
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {formatChange(report.benchmarkPriceYoy.overall)} YoY
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">Year-over-year</p>
                </div>
              </div>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  {
                    label: "Sales",
                    value: report.sales.total.toLocaleString(),
                    sub: `${formatChange(report.sales.yoyChange)} YoY`,
                  },
                  {
                    label: "New Listings",
                    value: report.newListings.total.toLocaleString(),
                    sub: `${formatChange(report.newListings.yoyChange)} YoY`,
                  },
                  {
                    label: "Avg. DOM",
                    value: `${report.daysOnMarket}`,
                    sub: "Days on market",
                  },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                      {s.label}
                    </p>
                    <p className="text-2xl font-extrabold text-white">{s.value}</p>
                    <p className="text-xs text-stone-400 mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* Property type prices */}
              <div className="grid grid-cols-4 gap-2 mb-8">
                {types.map((t) => (
                  <div key={t.label} className="bg-white/4 rounded-lg p-3">
                    <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold mb-1.5">
                      {t.label}
                    </p>
                    <p className="text-sm font-bold text-white">{formatPrice(t.price)}</p>
                    <p
                      className={`text-xs font-semibold mt-0.5 ${
                        t.yoy >= 0 ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {formatChange(t.yoy)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer branding */}
              <div className="flex items-center justify-between pt-5 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center text-white text-xs font-extrabold">
                    RE/MAX
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Chan Kawaguchi</p>
                    <p className="text-xs text-stone-500">REMAX Complete Realty</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-stone-400">livingwithchan.com</p>
                  <p className="text-xs text-stone-500">403-681-0107</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="no-print mt-6 bg-white rounded-xl border border-neutral-mid p-5">
            <h3 className="text-sm font-bold text-primary mb-3">How to use this infographic</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-accent font-bold">1.</span>
                <span>
                  <strong>Download PNG</strong> — click the button above to get a 1080×1080 PNG ready for Instagram or Facebook.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">2.</span>
                <span>
                  <strong>Print to PDF</strong> — use the Print button and save as PDF for email or LinkedIn documents.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">3.</span>
                <span>
                  <strong>Share the link</strong> — the full report at{" "}
                  <code className="text-xs bg-neutral-light px-1 py-0.5 rounded">
                    /market-reports/{slug}
                  </code>{" "}
                  generates its own preview card when shared on LinkedIn or Twitter.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
