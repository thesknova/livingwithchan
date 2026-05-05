import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllReports,
  getReport,
  formatPrice,
  formatChange,
  marketLabel,
  marketColor,
  prevMonthLabel,
} from "@/lib/market-reports";
import PriceHistoryChart from "@/components/market-report/PriceHistoryChart";
import PropertyBreakdown from "@/components/market-report/PropertyBreakdown";
import MarketMeter from "@/components/market-report/MarketMeter";
import MonthsOfSupplyChart from "@/components/market-report/MonthsOfSupplyChart";
import PropertyTypeSNLR from "@/components/market-report/PropertyTypeSNLR";
import RegionalMarkets from "@/components/market-report/RegionalMarkets";

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
    title: `${report.month} ${report.year} Calgary Market Report | Chan Kawaguchi`,
    description: report.summary.slice(0, 155),
  };
}

interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  subColor?: string;
}

function StatCard({ label, value, sub, subColor = "text-gray-400" }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-neutral-mid p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
        {label}
      </p>
      <p className="text-2xl font-bold text-primary">{value}</p>
      {sub && <p className={`text-xs mt-1 font-medium ${subColor}`}>{sub}</p>}
    </div>
  );
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = getReport(slug);
  if (!report) notFound();

  const mColor = marketColor(report.marketType);

  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Link
              href="/market-reports"
              className="text-xs text-stone-400 hover:text-accent transition-colors"
            >
              Market Reports
            </Link>
            <span className="text-stone-600 text-xs">/</span>
            <span className="text-xs text-stone-400">
              {report.month} {report.year}
            </span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Calgary Market Report — {report.month} {report.year}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-3 max-w-3xl">
            {report.headline}
          </h1>
          <p className="text-stone-400 max-w-2xl leading-relaxed">
            {report.summary}
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href={`/market-reports/${slug}/infographic`}
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              <span>📱</span> Social Media Infographic
            </Link>
            <Link
              href="/buyer-intake"
              className="inline-flex items-center gap-2 border border-stone-600 text-stone-300 px-5 py-2.5 rounded-full text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Start Your Home Search
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 space-y-14">
        {/* Key Stats */}
        <section>
          <h2 className="text-lg font-bold text-primary mb-5">
            Market Snapshot
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <StatCard
              label="Benchmark Price"
              value={formatPrice(report.benchmarkPrice.overall)}
              sub={`${formatChange(report.benchmarkPriceYoy.overall)} YoY`}
              subColor={report.benchmarkPriceYoy.overall >= 0 ? "text-emerald-600" : "text-red-500"}
            />
            <StatCard
              label="Sales"
              value={report.sales.total.toLocaleString()}
              sub={`${formatChange(report.sales.momChange)} vs ${prevMonthLabel(report.month)} · ${formatChange(report.sales.yoyChange)} YoY`}
              subColor="text-gray-500"
            />
            <StatCard
              label="New Listings"
              value={report.newListings.total.toLocaleString()}
              sub={`${formatChange(report.newListings.yoyChange)} YoY`}
              subColor="text-gray-500"
            />
            <StatCard
              label="Active Listings"
              value={report.activeListings.total.toLocaleString()}
              sub={`${formatChange(report.activeListings.yoyChange)} YoY`}
              subColor="text-gray-500"
            />
            <StatCard
              label="Days on Market"
              value={`${report.daysOnMarket}`}
              sub="Median DOM"
            />
          </div>
        </section>

        {/* Market Conditions */}
        <section className="bg-white rounded-2xl border border-neutral-mid p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-primary">Market Conditions</h2>
              <p className="text-sm text-gray-500">
                Based on the sales-to-new-listings ratio
              </p>
            </div>
            <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${mColor} border-current`}>
              {marketLabel(report.marketType)}
            </span>
          </div>
          <MarketMeter report={report} />
        </section>

        {/* Price by Property Type */}
        <section>
          <h2 className="text-lg font-bold text-primary mb-2">
            Benchmark Price by Property Type
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Year-over-year change in benchmark price, Calgary CMA
          </p>
          <PropertyBreakdown report={report} />
        </section>

        {/* Sales-to-New-Listings Ratio by Property Type */}
        {report.propertyTypeSNLR && (
          <section className="bg-white rounded-2xl border border-neutral-mid p-8">
            <h2 className="text-lg font-bold text-primary mb-1">
              Sales-to-New-Listings Ratio by Property Type
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              How many new listings are selling — below 40% favours buyers, above 60% favours sellers
            </p>
            <PropertyTypeSNLR report={report} />
          </section>
        )}

        {/* Months of Supply by Property Type */}
        {report.monthsOfSupply && (
          <section className="bg-white rounded-2xl border border-neutral-mid p-8">
            <h2 className="text-lg font-bold text-primary mb-1">
              Months of Supply by Property Type
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              How long current inventory would last at the current sales pace
            </p>
            <MonthsOfSupplyChart report={report} />
          </section>
        )}

        {/* Price History Chart */}
        <section className="bg-white rounded-2xl border border-neutral-mid p-8">
          <h2 className="text-lg font-bold text-primary mb-1">
            Benchmark Price History
          </h2>
          <p className="text-sm text-gray-500 mb-6">Overall benchmark, all property types combined</p>
          <PriceHistoryChart data={report.priceHistory} />
        </section>

        {/* Regional Markets */}
        {report.regionalMarkets?.length && (
          <section>
            <h2 className="text-lg font-bold text-primary mb-2">
              Regional Market Snapshot
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              Surrounding communities — benchmark prices and supply conditions
            </p>
            <RegionalMarkets report={report} />
          </section>
        )}

        {/* Insights */}
        <section>
          <h2 className="text-lg font-bold text-primary mb-5">
            Chan&apos;s Key Takeaways
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {report.insights.map((insight, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-neutral-mid p-5 flex gap-4"
              >
                <span className="w-6 h-6 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Further Resources */}
        <section>
          <h2 className="text-lg font-bold text-primary mb-5">Further Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://www.honestdoor.com/cities/ab/calgary"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-neutral-mid p-5 flex gap-4 hover:border-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">HonestDoor — Calgary</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Neighbourhood-level price estimates, sales history, and property value trends across Calgary communities.</p>
              </div>
            </a>
            <a
              href="https://www.calgary.ca/communities/housing-in-calgary/housing-research/housing-trends.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-neutral-mid p-5 flex gap-4 hover:border-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">City of Calgary — Rental Market</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Official City of Calgary housing research including rental trends, vacancy rates, and long-term market data.</p>
              </div>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary rounded-2xl p-8 text-white flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div>
            <h2 className="text-xl font-bold mb-1">
              What Does This Mean for Your Search?
            </h2>
            <p className="text-stone-400 text-sm max-w-lg">
              Market data only tells part of the story. Chan can break down what
              conditions mean for your specific budget, neighbourhood, and
              timeline.
            </p>
          </div>
          <Link
            href="/buyer-intake"
            className="flex-shrink-0 bg-accent text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
          >
            Start Your Home Search
          </Link>
        </section>

        <p className="text-xs text-gray-400 text-center">
          Data sourced from CREB monthly statistics. Benchmark prices reflect
          the Calgary CMA. Published{" "}
          {new Date(report.publishedAt).toLocaleDateString("en-CA", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          . For informational purposes only.
        </p>
      </div>
    </div>
  );
}
