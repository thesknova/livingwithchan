import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getReport, formatPrice, formatChange, marketLabel } from "@/lib/market-reports";

export const runtime = "nodejs";

// 1080x1080 square optimised for Instagram and Facebook
const SIZE = 1080;

// Satori needs images as data URIs (or absolute URLs); reading from disk avoids
// a network round trip to our own domain. 1405x711 source, ~1.98:1.
const REMAX_LOGO = `data:image/jpeg;base64,${fs
  .readFileSync(path.join(process.cwd(), "public", "remax-complete-realty-logo.jpg"))
  .toString("base64")}`;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const report = getReport(slug);

  if (!report) {
    return new Response("Report not found", { status: 404 });
  }

  const types = [
    { label: "Detached", price: report.benchmarkPrice.detached, yoy: report.benchmarkPriceYoy.detached },
    { label: "Semi-Det.", price: report.benchmarkPrice.semiDetached, yoy: report.benchmarkPriceYoy.semiDetached },
    { label: "Townhouse", price: report.benchmarkPrice.townhouse, yoy: report.benchmarkPriceYoy.townhouse },
    { label: "Condo", price: report.benchmarkPrice.condo, yoy: report.benchmarkPriceYoy.condo },
  ];

  const image = new ImageResponse(
    (
      <div
        style={{
          width: SIZE,
          height: SIZE,
          background: "#3A3937",
          display: "flex",
          flexDirection: "column",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative accent bar */}
        <div
          style={{ display: "flex",
            position: "absolute",
            top: 0,
            left: 64,
            right: 64,
            height: 4,
            background: "#A3856F",
            borderRadius: "0 0 4px 4px",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 13, color: "#A3856F", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>
              Calgary Housing Market
            </div>
            <div style={{ display: "flex", fontSize: 56, fontWeight: 800, color: "white", lineHeight: 1.0 }}>
              {report.month}
            </div>
            <div style={{ display: "flex", fontSize: 32, fontWeight: 400, color: "#9CA3AF", lineHeight: 1.1 }}>
              {report.year}
            </div>
          </div>
          <div
            style={{ display: "flex",
              background: "rgba(163,133,111,0.15)",
              border: "1px solid #A3856F",
              color: "#A3856F",
              fontSize: 14,
              fontWeight: 700,
              padding: "10px 22px",
              borderRadius: 99,
              marginTop: 8,
            }}
          >
            {marketLabel(report.marketType)}
          </div>
        </div>

        {/* Benchmark price hero */}
        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "32px 36px",
            marginBottom: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 13, color: "#9CA3AF", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>
              Overall Benchmark Price
            </div>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "white", lineHeight: 1 }}>
              {formatPrice(report.benchmarkPrice.overall)}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <div
              style={{ display: "flex",
                fontSize: 28,
                fontWeight: 700,
                color: report.benchmarkPriceYoy.overall >= 0 ? "#34D399" : "#F87171",
              }}
            >
              {`${formatChange(report.benchmarkPriceYoy.overall)} YoY`}
            </div>
            <div style={{ display: "flex", fontSize: 13, color: "#9CA3AF", marginTop: 4 }}>Year-over-year</div>
          </div>
        </div>

        {/* Key stats row */}
        <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          {[
            { label: "Sales", value: report.sales.total.toLocaleString(), sub: `${formatChange(report.sales.yoyChange)} YoY` },
            { label: "New Listings", value: report.newListings.total.toLocaleString(), sub: `${formatChange(report.newListings.yoyChange)} YoY` },
            { label: "Avg. Days on Market", value: `${report.daysOnMarket}`, sub: "Median DOM" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", fontSize: 11, color: "#A3856F", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
                {s.label}
              </div>
              <div style={{ display: "flex", fontSize: 36, fontWeight: 800, color: "white" }}>{s.value}</div>
              <div style={{ display: "flex", fontSize: 12, color: "#9CA3AF", marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Property type strip */}
        <div style={{ display: "flex", gap: 12, marginBottom: 36 }}>
          {types.map((t) => (
            <div
              key={t.label}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                borderRadius: 12,
                padding: "14px 16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", fontSize: 10, color: "#9CA3AF", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                {t.label}
              </div>
              <div style={{ display: "flex", fontSize: 20, fontWeight: 700, color: "white" }}>
                {formatPrice(t.price)}
              </div>
              <div style={{ display: "flex", fontSize: 11, color: t.yoy >= 0 ? "#34D399" : "#F87171", marginTop: 2, fontWeight: 600 }}>
                {`${formatChange(t.yoy)} YoY`}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Brokerage branding must be the official logo, not a text stand-in.
                The JPG has a black background, so it sits in a black tile. */}
            <div style={{ display: "flex", background: "#000", borderRadius: 8, padding: "6px 10px" }}>
              <img src={REMAX_LOGO} width={99} height={50} alt="REMAX Complete Realty" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", color: "white", fontSize: 16, fontWeight: 700 }}>Chan Kawaguchi</div>
              <div style={{ display: "flex", color: "#9CA3AF", fontSize: 12 }}>REMAX Complete Realty</div>
            </div>
          </div>
          <div style={{ display: "flex", color: "#9CA3AF", fontSize: 12 }}>livingwithchan.com · 403-681-0107</div>
        </div>
      </div>
    ),
    { width: SIZE, height: SIZE }
  );

  // Return as a downloadable PNG
  const headers = new Headers(image.headers);
  headers.set("Content-Disposition", `attachment; filename="calgary-market-${slug}.png"`);

  return new Response(image.body, { status: 200, headers });
}
