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

function zoneColor(months: number): string {
  if (months < 2) return "#F97316";
  if (months <= 4) return "#10B981";
  return "#3B82F6";
}

function zoneLabel(months: number): string {
  if (months < 2) return "Seller's";
  if (months <= 4) return "Balanced";
  return "Buyer's";
}

export default function MonthsOfSupplyChart({ report }: Props) {
  if (!report.monthsOfSupply) return null;
  const ms = report.monthsOfSupply;
  const maxMonths = 6;

  return (
    <div>
      <div className="space-y-3">
        {types.map(({ key, label }) => {
          const value = ms[key];
          const pct = Math.min((value / maxMonths) * 100, 100);
          const color = zoneColor(value);
          const zone = zoneLabel(value);
          return (
            <div key={key} className="flex items-center gap-3">
              <div className="w-28 sm:w-36 text-right text-xs font-medium text-gray-500 flex-shrink-0 leading-tight">
                {label}
              </div>
              <div className="flex-1 relative h-7 bg-neutral-mid rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: `${pct}%`, backgroundColor: color, opacity: 0.8 }}
                />
                <div className="absolute inset-y-0 flex items-center" style={{ left: `calc(${pct}% + 8px)` }}>
                  <span className="text-xs font-bold" style={{ color }}>
                    {value.toFixed(1)} mo
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
        <div className="flex-1 flex justify-between text-xs text-gray-400">
          <span>0</span>
          <span>2</span>
          <span>4</span>
          <span>6 mo</span>
        </div>
        <div className="w-16 flex-shrink-0" />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4">
        {[
          { color: "#F97316", label: "Seller's market (< 2 mo)" },
          { color: "#10B981", label: "Balanced (2–4 mo)" },
          { color: "#3B82F6", label: "Buyer's market (> 4 mo)" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
            <span className="text-xs text-gray-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
