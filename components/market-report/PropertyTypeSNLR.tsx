import { MarketReport } from "@/lib/market-reports";

interface Props {
  report: MarketReport;
}

const types = [
  { key: "detached" as const, label: "Detached" },
  { key: "semiDetached" as const, label: "Semi-Det." },
  { key: "row" as const, label: "Row / Townhouse" },
  { key: "condo" as const, label: "Condo / Apt" },
];

function zoneColor(ratio: number): string {
  if (ratio < 40) return "#3B82F6";
  if (ratio <= 60) return "#10B981";
  return "#F97316";
}

function zoneLabel(ratio: number): string {
  if (ratio < 40) return "Buyer's";
  if (ratio <= 60) return "Balanced";
  return "Seller's";
}

export default function PropertyTypeSNLR({ report }: Props) {
  if (!report.propertyTypeSNLR) return null;
  const snlr = report.propertyTypeSNLR;

  return (
    <div>
      <div className="space-y-3">
        {types.map(({ key, label }) => {
          const value = snlr[key];
          const color = zoneColor(value);
          const zone = zoneLabel(value);
          return (
            <div key={key} className="flex items-center gap-3">
              <div className="w-28 sm:w-36 text-right text-xs font-medium text-gray-500 flex-shrink-0 leading-tight">
                {label}
              </div>
              <div className="flex-1 relative h-7 bg-neutral-mid rounded-full overflow-hidden">
                {/* Zone background */}
                <div className="absolute inset-0 flex">
                  <div className="h-full" style={{ width: "40%", backgroundColor: "#DBEAFE", opacity: 0.6 }} />
                  <div className="h-full" style={{ width: "20%", backgroundColor: "#D1FAE5", opacity: 0.6 }} />
                  <div className="h-full" style={{ width: "40%", backgroundColor: "#FFEDD5", opacity: 0.6 }} />
                </div>
                {/* Zone boundary lines */}
                <div className="absolute inset-y-0 w-px bg-white/70" style={{ left: "40%" }} />
                <div className="absolute inset-y-0 w-px bg-white/70" style={{ left: "60%" }} />
                {/* Fill bar */}
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: `${value}%`, backgroundColor: color, opacity: 0.75 }}
                />
                {/* Value label */}
                <div className="absolute inset-0 flex items-center justify-end pr-3">
                  <span className="text-xs font-bold text-gray-700 bg-white/80 px-1.5 py-0.5 rounded-full leading-none">
                    {value.toFixed(0)}%
                  </span>
                </div>
              </div>
              <div
                className="w-16 text-xs font-semibold flex-shrink-0"
                style={{ color }}
              >
                {zone}
              </div>
            </div>
          );
        })}
      </div>

      {/* Scale */}
      <div className="flex items-center gap-3 mt-2">
        <div className="w-28 sm:w-36 flex-shrink-0" />
        <div className="flex-1 relative">
          <div className="flex justify-between text-xs text-gray-400">
            <span>0%</span>
            <span className="text-blue-500">← Buyer's | 40%</span>
            <span className="text-emerald-600">60% | Seller's →</span>
            <span>100%</span>
          </div>
        </div>
        <div className="w-16 flex-shrink-0" />
      </div>
    </div>
  );
}
