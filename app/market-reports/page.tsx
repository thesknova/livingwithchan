import type { Metadata } from "next";
import Link from "next/link";
import { getAllReports, formatPrice, formatChange, marketLabel, marketColor } from "@/lib/market-reports";

export const metadata: Metadata = {
  title: "Calgary Housing Market Reports | Chan Kawaguchi",
  description:
    "Monthly Calgary real estate market reports from Chan Kawaguchi — benchmark prices, sales data, and neighbourhood insights.",
};

export default function MarketReportsPage() {
  const reports = getAllReports();

  return (
    <div className="bg-neutral-light min-h-screen">
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Market Data
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-3">
            Calgary Housing Market Reports
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Monthly breakdowns of benchmark prices, sales activity, and market
            conditions across Calgary and surrounding communities.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {reports.length === 0 ? (
          <p className="text-gray-500 text-sm">No reports published yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((r) => {
              const mColor = marketColor(r.marketType);
              return (
                <Link
                  key={r.slug}
                  href={`/market-reports/${r.slug}`}
                  className="group bg-white rounded-2xl border border-neutral-mid shadow-sm hover:shadow-md hover:border-accent/40 transition-all p-6 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                        {r.month} {r.year}
                      </p>
                      <h2 className="text-base font-bold text-primary leading-snug group-hover:text-accent transition-colors">
                        {r.headline}
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-neutral-light rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-0.5">Benchmark Price</p>
                      <p className="text-sm font-bold text-primary">
                        {formatPrice(r.benchmarkPrice.overall)}
                      </p>
                      <p className="text-xs text-gray-400">
                        {formatChange(r.benchmarkPriceYoy.overall)} YoY
                      </p>
                    </div>
                    <div className="bg-neutral-light rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-0.5">Sales</p>
                      <p className="text-sm font-bold text-primary">
                        {r.sales.total.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-400">
                        {formatChange(r.sales.yoyChange)} YoY
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className={`text-xs font-semibold ${mColor}`}>
                      {marketLabel(r.marketType)}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(r.publishedAt).toLocaleDateString("en-CA", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        <div className="mt-16 bg-primary rounded-2xl p-8 text-white flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div>
            <h2 className="text-xl font-bold mb-1">Want a Personal Market Analysis?</h2>
            <p className="text-stone-400 text-sm">
              Chan can dig into the data for your specific neighbourhood, price range, or property type.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-accent text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Talk to Chan
          </Link>
        </div>
      </div>
    </div>
  );
}
