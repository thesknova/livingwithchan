import { ImageResponse } from "next/og";
import { getReport, formatPrice, formatChange, marketLabel } from "@/lib/market-reports";

export const alt = "Calgary Housing Market Report";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = getReport(slug);

  const title = report
    ? `${report.month} ${report.year} — Calgary Market Report`
    : "Calgary Market Report";

  const price = report ? formatPrice(report.benchmarkPrice.overall) : "—";
  const priceYoy = report ? formatChange(report.benchmarkPriceYoy.overall) : "";
  const sales = report ? report.sales.total.toLocaleString() : "—";
  const listings = report ? report.newListings.total.toLocaleString() : "—";
  const dom = report ? `${report.daysOnMarket} days` : "—";
  const market = report ? marketLabel(report.marketType) : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#3A3937",
          display: "flex",
          flexDirection: "column",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top label */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
          <div
            style={{
              background: "#A3856F",
              color: "white",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: 99,
            }}
          >
            Calgary · RE/MAX Complete Realty
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            maxWidth: 800,
            marginBottom: 40,
          }}
        >
          {title}
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 20, flex: 1 }}>
          {[
            { label: "Benchmark Price", value: price, sub: `${priceYoy} YoY` },
            { label: "Sales", value: sales, sub: `${formatChange(report?.sales.yoyChange ?? 0)} YoY` },
            { label: "New Listings", value: listings, sub: "" },
            { label: "Days on Market", value: dom, sub: "Median" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: 11, color: "#A3856F", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: 34, fontWeight: 800, color: "white", lineHeight: 1 }}>
                {stat.value}
              </div>
              {stat.sub && (
                <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 6 }}>
                  {stat.sub}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 32,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                background: "#cc0000",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 9,
                fontWeight: 800,
              }}
            >
              RE/MAX
            </div>
            <div>
              <div style={{ color: "white", fontSize: 15, fontWeight: 700 }}>Chan Kawaguchi</div>
              <div style={{ color: "#9CA3AF", fontSize: 12 }}>livingwithchan.com · 403-681-0107</div>
            </div>
          </div>
          {market && (
            <div
              style={{
                background: "rgba(163,133,111,0.2)",
                color: "#A3856F",
                fontSize: 13,
                fontWeight: 700,
                padding: "8px 20px",
                borderRadius: 99,
                border: "1px solid #A3856F",
              }}
            >
              {market}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
