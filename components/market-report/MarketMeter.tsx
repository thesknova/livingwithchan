import { MarketReport, marketLabel } from "@/lib/market-reports";

interface Props {
  report: MarketReport;
}

export default function MarketMeter({ report }: Props) {
  const ratio = Math.min(Math.max(report.salesToNewListingsRatio, 0), 100);

  // Zone boundaries on the 0-100 scale
  // < 40 = buyer's, 40-60 = balanced, > 60 = seller's
  const pct = ratio; // position on bar

  const zoneColor =
    ratio < 40 ? "#3B82F6" : ratio <= 60 ? "#10B981" : "#F97316";

  const zoneLabel = marketLabel(report.marketType);

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs text-gray-400 font-medium">
        <span>Buyer&apos;s</span>
        <span>Balanced</span>
        <span>Seller&apos;s</span>
      </div>

      {/* Track */}
      <div className="relative h-4 rounded-full overflow-hidden bg-neutral-mid">
        {/* Gradient zones */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(to right, #93C5FD 0%, #6EE7B7 40%, #6EE7B7 60%, #FED7AA 100%)",
          }}
        />
        {/* Indicator */}
        <div
          className="absolute top-0 bottom-0 w-1 rounded-full shadow-md"
          style={{
            left: `calc(${pct}% - 2px)`,
            backgroundColor: zoneColor,
            transition: "left 0.4s ease",
          }}
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm font-bold" style={{ color: zoneColor }}>
          {zoneLabel}
        </p>
        <p className="text-xs text-gray-500">
          Sales/New Listings:{" "}
          <span className="font-semibold text-gray-700">{ratio.toFixed(1)}%</span>
        </p>
      </div>

      <p className="text-xs text-gray-400 leading-relaxed">
        A ratio above 60% favours sellers; below 40% favours buyers; 40–60%
        indicates balanced conditions.
      </p>
    </div>
  );
}
