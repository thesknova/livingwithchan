import { MarketReport, formatPrice, formatChange } from "@/lib/market-reports";

interface Props {
  report: MarketReport;
}

const types = [
  { key: "detached", label: "Detached" },
  { key: "semiDetached", label: "Semi-Detached" },
  { key: "townhouse", label: "Row / Townhouse" },
  { key: "condo", label: "Condo/Apt" },
] as const;

export default function PropertyBreakdown({ report }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {types.map(({ key, label }) => {
        const price = report.benchmarkPrice[key];
        const yoy = report.benchmarkPriceYoy[key];
        const positive = yoy >= 0;
        return (
          <div
            key={key}
            className="bg-neutral-light rounded-xl border border-neutral-mid p-4 flex flex-col gap-1"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              {label}
            </p>
            <p className="text-lg font-bold text-primary leading-tight">
              {formatPrice(price)}
            </p>
            <span
              className={`inline-flex items-center gap-1 text-xs font-medium ${
                positive ? "text-emerald-600" : "text-red-500"
              }`}
            >
              <span>{positive ? "▲" : "▼"}</span>
              {Math.abs(yoy).toFixed(1)}% YoY
            </span>
          </div>
        );
      })}
    </div>
  );
}
