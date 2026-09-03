"use client";

import { useMemo, useState } from "react";
import {
  DISTRICT_NAMES,
  DISTRICT_PROPERTY_TYPES,
  DISTRICT_SHAPES,
  VIEW_BOX,
  type DistrictName,
  type DistrictPropertyType,
  type DistrictStat,
} from "@/lib/districts";
import type { MarketReport } from "@/lib/market-reports";

interface Props {
  report: MarketReport;
}

type MetricKey = "yoy" | "price" | "mos";

/**
 * Diverging ramp for year-over-year price change: brick red for falling, warm
 * neutral for flat, emerald for rising — the same red/emerald language the
 * report badges already use for negative and positive change. Both arms step
 * monotonically away from the neutral midpoint.
 */
const YOY_RAMP = [
  "#8C2F22",
  "#B8453A",
  "#D4796D",
  "#EFC3BB",
  "#E6E2DA",
  "#74CFAA",
  "#10B981",
];
const YOY_BREAKS = [-8, -6, -3, -1, 1, 3];
const YOY_TICKS = ["-8%", "-6%", "-3%", "-1%", "+1%", "+3%"];

/** Sequential ramp in the site's bronze, light to dark, for benchmark price. */
const PRICE_RAMP = [
  "#F2EBE4",
  "#E2D0C0",
  "#CBAC93",
  "#B08D73",
  "#8A6C58",
  "#63503F",
];

/**
 * Months of supply is a market *condition*, not a continuous magnitude, so it
 * takes the three reserved condition colours used elsewhere on the site
 * (RegionalMarkets, PropertyTypeSNLR) rather than a gradient.
 */
const SUPPLY_BANDS = [
  { max: 2, label: "Seller's", color: "#F97316" },
  { max: 4, label: "Balanced", color: "#10B981" },
  { max: Infinity, label: "Buyer's", color: "#3B82F6" },
];

function supplyBand(mos: number) {
  return SUPPLY_BANDS.find((b) => mos < b.max) ?? SUPPLY_BANDS[2];
}

const METRICS: Record<
  MetricKey,
  {
    label: string;
    caption: string;
    lo: string;
    hi: string;
    value: (s: DistrictStat) => number;
    format: (v: number) => string;
    /** Sort comparator putting the market-leading district first. */
    rank: (a: number, b: number) => number;
  }
> = {
  yoy: {
    label: "Price vs. last year",
    caption: "price vs. last year",
    lo: "Prices falling",
    hi: "Prices rising",
    value: (s) => s.yoy,
    format: (v) => `${v > 0 ? "+" : ""}${v.toFixed(1)}%`,
    rank: (a, b) => b - a,
  },
  price: {
    label: "Benchmark price",
    caption: "benchmark price",
    lo: "Lower priced",
    hi: "Higher priced",
    value: (s) => s.price,
    format: (v) => `$${Math.round(v / 1000)}K`,
    rank: (a, b) => b - a,
  },
  mos: {
    label: "Months of supply",
    caption: "months of supply",
    lo: "Tighter supply",
    hi: "More supply",
    value: (s) => s.mos,
    format: (v) => `${v.toFixed(1)} mo`,
    rank: (a, b) => a - b,
  },
};

/** Light fills need dark text on top of them, dark fills need white. */
function inkOn(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62 ? "#3A3937" : "#FFFFFF";
}

export default function DistrictMap({ report }: Props) {
  const [metric, setMetric] = useState<MetricKey>("yoy");
  const [ptype, setPtype] = useState<DistrictPropertyType>("Detached");
  const [active, setActive] = useState<DistrictName | null>(null);

  const table = report.districts?.[ptype];
  const m = METRICS[metric];

  // Benchmark price has no natural fixed breakpoints, so its ramp is stretched
  // across the range actually present in the current property type.
  const priceRange = useMemo(() => {
    if (!table) return { lo: 0, hi: 1 };
    const vals = DISTRICT_NAMES.map((n) => table[n].price);
    return { lo: Math.min(...vals), hi: Math.max(...vals) };
  }, [table]);

  if (!table) return null;

  function fillFor(name: DistrictName): string {
    const s = table![name];
    if (metric === "yoy") {
      let i = 0;
      while (i < YOY_BREAKS.length && s.yoy >= YOY_BREAKS[i]) i++;
      return YOY_RAMP[i];
    }
    if (metric === "mos") return supplyBand(s.mos).color;
    const { lo, hi } = priceRange;
    const t = hi === lo ? 0 : (s.price - lo) / (hi - lo);
    return PRICE_RAMP[Math.min(PRICE_RAMP.length - 1, Math.floor(t * PRICE_RAMP.length))];
  }

  const ranked = [...DISTRICT_NAMES].sort((a, b) =>
    m.rank(m.value(table[a]), m.value(table[b]))
  );
  const shown = active ? table[active] : table["TOTAL CITY"];
  const shownName = active ?? "Calgary — all districts";
  const band = supplyBand(shown.mos);

  const tabular = { fontVariantNumeric: "tabular-nums" } as const;

  return (
    <div className="bg-white rounded-2xl border border-neutral-mid shadow-sm overflow-hidden">
      {/* ── Controls ───────────────────────────────────────────────── */}
      <div className="border-b border-neutral-mid px-5 sm:px-7 py-5 flex flex-col lg:flex-row lg:items-end gap-5 lg:gap-8">
        <div className="flex-1">
          <h2 className="font-display text-2xl text-primary leading-snug">
            Calgary by district
          </h2>
          <p className="text-sm text-text-muted mt-1">
            {report.dataMonth} {report.dataYear}
            {" benchmark prices across CREB’s eight reporting districts. "}
            Hover a district for its detail.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          <fieldset>
            <legend className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-2">
              Colour by
            </legend>
            <div className="flex bg-neutral-light rounded-full p-1 gap-1">
              {(Object.keys(METRICS) as MetricKey[]).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setMetric(k)}
                  aria-pressed={metric === k}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    metric === k
                      ? "bg-primary text-white"
                      : "text-text-muted hover:text-primary"
                  }`}
                >
                  {METRICS[k].label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-2">
              Property type
            </legend>
            <div className="flex bg-neutral-light rounded-full p-1 gap-1">
              {DISTRICT_PROPERTY_TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setPtype(t)}
                  aria-pressed={ptype === t}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    ptype === t
                      ? "bg-primary text-white"
                      : "text-text-muted hover:text-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,1fr)]">
        {/* ── Map ──────────────────────────────────────────────────── */}
        <div className="p-4 sm:p-6 lg:border-r border-neutral-mid">
          <svg
            viewBox={`0 0 ${VIEW_BOX.w} ${VIEW_BOX.h}`}
            className="w-full h-auto max-h-[660px] mx-auto"
            role="img"
            aria-label={`Map of Calgary housing districts coloured by ${m.caption} for ${ptype.toLowerCase()} homes`}
          >
            {/* Fills first, then every label on top — otherwise a district drawn
                later paints over a neighbour's label (City Centre sits under West). */}
            {DISTRICT_NAMES.map((name) => {
              const shape = DISTRICT_SHAPES[name];
              const dim = active !== null && active !== name;
              return (
                <path
                  key={name}
                  d={shape.d}
                  fill={fillFor(name)}
                  stroke={active === name ? "#3A3937" : "#FFFFFF"}
                  strokeWidth={active === name ? 3 : 1.6}
                  strokeLinejoin="round"
                  style={{ opacity: dim ? 0.35 : 1, transition: "opacity .15s" }}
                />
              );
            })}

            {DISTRICT_NAMES.map((name) => {
              const shape = DISTRICT_SHAPES[name];
              const dim = active !== null && active !== name;
              const ink = inkOn(fillFor(name));
              return (
                <g
                  key={name}
                  onMouseEnter={() => setActive(name)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(name)}
                  onBlur={() => setActive(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${name}: ${m.format(m.value(table[name]))}`}
                  className="cursor-pointer focus:outline-none"
                  style={{ opacity: dim ? 0.35 : 1, transition: "opacity .15s" }}
                >
                  {/* Transparent hit area, so the whole district stays hoverable
                      even though the fill layer sits below. */}
                  <path d={shape.d} fill="transparent" />
                  {/* Two-line label, optically centred on the district's pole of
                      inaccessibility rather than its centroid. */}
                  <text
                    x={shape.cx}
                    y={shape.cy}
                    textAnchor="middle"
                    fill={ink}
                    className="pointer-events-none select-none"
                  >
                    <tspan
                      x={shape.cx}
                      dy={-6}
                      style={{ fontSize: 21, fontWeight: 600, letterSpacing: ".01em" }}
                    >
                      {name}
                    </tspan>
                    <tspan
                      x={shape.cx}
                      dy={26}
                      style={{ fontSize: 25, fontWeight: 700, ...tabular }}
                    >
                      {m.format(m.value(table[name]))}
                    </tspan>
                  </text>
                </g>
              );
            })}
          </svg>

          {/* ── Legend ─────────────────────────────────────────────── */}
          <div className="mt-3 px-1">
            {metric === "mos" ? (
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {SUPPLY_BANDS.map((b, i) => (
                  <span key={b.label} className="flex items-center gap-2 text-xs text-text-muted">
                    <span
                      className="w-3 h-3 rounded-sm flex-shrink-0"
                      style={{ backgroundColor: b.color }}
                    />
                    <span className="font-semibold text-primary">{b.label}</span>
                    <span style={tabular}>
                      {i === 0
                        ? "under 2 mo"
                        : i === 1
                          ? "2–4 mo"
                          : "over 4 mo"}
                    </span>
                  </span>
                ))}
              </div>
            ) : (
              <>
                <div className="flex justify-between text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-1.5">
                  <span>{m.lo}</span>
                  <span>{m.hi}</span>
                </div>
                <div className="flex gap-0.5 h-2.5">
                  {(metric === "yoy" ? YOY_RAMP : PRICE_RAMP).map((c) => (
                    <span key={c} className="flex-1 rounded-[2px]" style={{ backgroundColor: c }} />
                  ))}
                </div>
                {metric === "yoy" ? (
                  // One tick per step boundary, right-aligned into the step it closes.
                  <div
                    className="grid mt-1 text-[10px] text-text-muted"
                    style={{ gridTemplateColumns: `repeat(${YOY_RAMP.length},1fr)`, ...tabular }}
                  >
                    {YOY_RAMP.map((_, i) => (
                      <span key={i} className="text-right pr-0.5">
                        {YOY_TICKS[i] ?? ""}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div
                    className="flex justify-between mt-1 text-[10px] text-text-muted"
                    style={tabular}
                  >
                    <span>${Math.round(priceRange.lo / 1000)}K</span>
                    <span>${Math.round(priceRange.hi / 1000)}K</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* ── Ranked list + readout ────────────────────────────────── */}
        <div className="flex flex-col border-t lg:border-t-0 border-neutral-mid">
          <div className="px-5 sm:px-6 pt-5 pb-2 flex items-baseline justify-between">
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              Ranked
            </h3>
            <span className="text-[11px] text-text-muted">
              {metric === "mos" ? "tightest first" : "strongest first"}
            </span>
          </div>

          <ul>
            {ranked.map((name) => {
              const s = table[name];
              return (
                <li key={name}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(name)}
                    onBlur={() => setActive(null)}
                    className={`w-full flex items-center gap-3 px-5 sm:px-6 py-2.5 text-left border-b border-neutral-mid/60 transition-colors ${
                      active === name ? "bg-neutral-light" : "hover:bg-neutral-light/60"
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                      style={{ backgroundColor: fillFor(name) }}
                    />
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-semibold text-primary leading-tight">
                        {name}
                      </span>
                      <span className="block text-[11px] text-text-muted" style={tabular}>
                        ${s.price.toLocaleString()} · {s.mos.toFixed(1)} mo supply
                      </span>
                    </span>
                    <span
                      className="text-sm font-bold text-primary tabular-nums text-right flex-shrink-0"
                      style={tabular}
                    >
                      {m.format(m.value(s))}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Readout follows the hovered district, and rests on the city total. */}
          <div className="bg-neutral-light px-5 sm:px-6 py-5 border-t border-neutral-mid">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
              {shownName}
            </p>
            <p
              className="font-display text-3xl text-primary mt-1 leading-none"
              style={tabular}
            >
              ${shown.price.toLocaleString()}
            </p>
            <dl className="grid grid-cols-2 gap-x-5 gap-y-3 mt-4">
              {[
                ["vs. last year", `${shown.yoy > 0 ? "+" : ""}${shown.yoy.toFixed(2)}%`],
                ["vs. last month", `${shown.mom > 0 ? "+" : ""}${shown.mom.toFixed(2)}%`],
                ["Months of supply", shown.mos.toFixed(2)],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">
                    {k}
                  </dt>
                  <dd className="text-sm font-bold text-primary mt-0.5" style={tabular}>
                    {v}
                  </dd>
                </div>
              ))}
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">
                  Condition
                </dt>
                <dd className="text-sm font-bold mt-0.5" style={{ color: band.color }}>
                  {band.label}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* ── Full table ───────────────────────────────────────────────── */}
      <details className="border-t border-neutral-mid group">
        <summary className="px-5 sm:px-7 py-4 text-xs font-semibold uppercase tracking-widest text-text-muted hover:text-primary cursor-pointer select-none list-none flex items-center justify-between">
          All eight districts — {ptype.toLowerCase()}
          <span className="text-base leading-none transition-transform group-open:rotate-45">
            +
          </span>
        </summary>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-sm">
            <thead>
              <tr className="border-y border-neutral-mid bg-neutral-light">
                {["District", "Benchmark", "vs. last year", "vs. last month", "Months of supply", "Inventory"].map(
                  (h, i) => (
                    <th
                      key={h}
                      scope="col"
                      className={`px-5 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-text-muted ${
                        i === 0 ? "text-left" : "text-right"
                      }`}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[...DISTRICT_NAMES]
                .sort((a, b) => table[b].price - table[a].price)
                .map((name) => {
                  const s = table[name];
                  return (
                    <tr key={name} className="border-b border-neutral-mid/50">
                      <td className="px-5 py-2.5">
                        <span className="flex items-center gap-2.5 font-semibold text-primary">
                          <span
                            className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                            style={{ backgroundColor: fillFor(name) }}
                          />
                          {name}
                        </span>
                      </td>
                      <td className="px-5 py-2.5 text-right text-primary" style={tabular}>
                        ${s.price.toLocaleString()}
                      </td>
                      <td
                        className={`px-5 py-2.5 text-right font-semibold ${
                          s.yoy >= 0 ? "text-emerald-700" : "text-red-600"
                        }`}
                        style={tabular}
                      >
                        {s.yoy > 0 ? "+" : ""}
                        {s.yoy.toFixed(2)}%
                      </td>
                      <td
                        className={`px-5 py-2.5 text-right ${
                          s.mom >= 0 ? "text-emerald-700" : "text-red-600"
                        }`}
                        style={tabular}
                      >
                        {s.mom > 0 ? "+" : ""}
                        {s.mom.toFixed(2)}%
                      </td>
                      <td className="px-5 py-2.5 text-right text-primary" style={tabular}>
                        {s.mos.toFixed(2)}
                      </td>
                      <td className="px-5 py-2.5 text-right text-text-muted" style={tabular}>
                        {s.inv.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              <tr className="bg-neutral-light font-bold text-primary">
                <td className="px-5 py-2.5">Total city</td>
                <td className="px-5 py-2.5 text-right" style={tabular}>
                  ${table["TOTAL CITY"].price.toLocaleString()}
                </td>
                <td className="px-5 py-2.5 text-right" style={tabular}>
                  {table["TOTAL CITY"].yoy > 0 ? "+" : ""}
                  {table["TOTAL CITY"].yoy.toFixed(2)}%
                </td>
                <td className="px-5 py-2.5 text-right" style={tabular}>
                  {table["TOTAL CITY"].mom > 0 ? "+" : ""}
                  {table["TOTAL CITY"].mom.toFixed(2)}%
                </td>
                <td className="px-5 py-2.5 text-right" style={tabular}>
                  {table["TOTAL CITY"].mos.toFixed(2)}
                </td>
                <td className="px-5 py-2.5 text-right" style={tabular}>
                  {table["TOTAL CITY"].inv.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>

      <p className="px-5 sm:px-7 py-4 text-[11px] leading-relaxed text-text-muted border-t border-neutral-mid">
        Benchmark price is the MLS&reg; Home Price Index price for a typical home of that type
        in that district, not an average sale price. Source: CREB&reg; monthly City of Calgary
        stats package. District shapes are the City of Calgary&rsquo;s community sectors and
        approximate CREB&rsquo;s reporting areas.
      </p>
    </div>
  );
}
