import { MarketReport, formatPrice, formatChange } from "@/lib/market-reports";

interface Props {
  report: MarketReport;
}

function SupplyDot({ months }: { months: number }) {
  const color =
    months < 2 ? "#F97316" : months <= 4 ? "#10B981" : "#3B82F6";
  const label =
    months < 2 ? "Seller's" : months <= 4 ? "Balanced" : "Buyer's";
  return (
    <span className="flex items-center gap-1.5">
      <span className="inline-block w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
      <span className="text-xs text-gray-500">
        {months.toFixed(1)} mo supply
        <span className="ml-1 font-medium" style={{ color }}>({label})</span>
      </span>
    </span>
  );
}

export default function RegionalMarkets({ report }: Props) {
  if (!report.regionalMarkets?.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {report.regionalMarkets.map((r) => {
        const yoyPos = r.yoyChange >= 0;
        const momPos = r.momChange >= 0;
        return (
          <div key={r.name} className="bg-white rounded-xl border border-neutral-mid p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
              {r.name}
            </p>
            <p className="text-2xl font-bold text-primary leading-tight mb-2">
              {formatPrice(r.benchmarkPrice)}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  yoyPos
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {formatChange(r.yoyChange)} YoY
              </span>
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  momPos
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {formatChange(r.momChange)} MoM
              </span>
            </div>
            <SupplyDot months={r.monthsOfSupply} />
            {r.inventory !== undefined && (
              <p className="text-xs text-gray-400 mt-1.5">
                {r.inventory.toLocaleString()} active listings
                {r.sales !== undefined && ` · ${r.sales} sales`}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
