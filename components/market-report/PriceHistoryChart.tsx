import { PricePoint } from "@/lib/market-reports";

interface Props {
  data: PricePoint[];
}

export default function PriceHistoryChart({ data }: Props) {
  const prices = data.map((d) => d.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;
  const chartH = 140;
  const barW = 36;
  const gap = 16;
  const totalW = data.length * (barW + gap) - gap;

  function barHeight(price: number) {
    return 24 + ((price - min) / range) * (chartH - 24);
  }

  function formatK(n: number) {
    return `$${Math.round(n / 1000)}K`;
  }

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${totalW + 2} ${chartH + 48}`}
        className="w-full"
        style={{ minWidth: totalW + 2 }}
        aria-label="Benchmark price history chart"
      >
        {data.map((d, i) => {
          const x = i * (barW + gap);
          const h = barHeight(d.price);
          const y = chartH - h;
          const isCurrent = i === data.length - 1;

          return (
            <g key={d.label}>
              {/* Bar */}
              <rect
                x={x}
                y={y}
                width={barW}
                height={h}
                rx={6}
                fill={isCurrent ? "#A3856F" : "#E3E0D8"}
              />
              {/* Price label above bar */}
              <text
                x={x + barW / 2}
                y={y - 6}
                textAnchor="middle"
                fontSize={isCurrent ? 10 : 9}
                fontWeight={isCurrent ? "700" : "400"}
                fill={isCurrent ? "#A3856F" : "#888"}
              >
                {formatK(d.price)}
              </text>
              {/* Month label below */}
              <text
                x={x + barW / 2}
                y={chartH + 18}
                textAnchor="middle"
                fontSize={9}
                fill={isCurrent ? "#3A3937" : "#9CA3AF"}
                fontWeight={isCurrent ? "600" : "400"}
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
