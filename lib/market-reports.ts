import fs from "fs";
import path from "path";

export interface PricePoint {
  label: string;
  price: number;
}

export interface RegionalMarket {
  name: string;
  benchmarkPrice: number;
  momChange: number;
  yoyChange: number;
  monthsOfSupply: number;
  inventory?: number;
  sales?: number;
}

export interface MarketReport {
  slug: string;
  month: string;
  year: number;
  publishedAt: string;
  headline: string;
  summary: string;
  benchmarkPrice: {
    overall: number;
    detached: number;
    semiDetached: number;
    townhouse: number;
    condo: number;
  };
  benchmarkPriceYoy: {
    overall: number;
    detached: number;
    semiDetached: number;
    townhouse: number;
    condo: number;
  };
  sales: { total: number; momChange: number; yoyChange: number };
  newListings: { total: number; momChange: number; yoyChange: number };
  activeListings: { total: number; momChange: number; yoyChange: number };
  daysOnMarket: number;
  salesToNewListingsRatio: number;
  marketType: "buyers" | "balanced" | "sellers";
  priceHistory: PricePoint[];
  insights: string[];
  monthsOfSupply?: {
    overall: number;
    detached: number;
    semiDetached: number;
    row: number;
    condo: number;
  };
  propertyTypeSNLR?: {
    detached: number;
    semiDetached: number;
    row: number;
    condo: number;
  };
  regionalMarkets?: RegionalMarket[];
}

const reportsDir = path.join(process.cwd(), "data", "market-reports");

export function getAllReports(): MarketReport[] {
  if (!fs.existsSync(reportsDir)) return [];
  return fs
    .readdirSync(reportsDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(reportsDir, f), "utf-8")) as MarketReport)
    .sort((a, b) => b.slug.localeCompare(a.slug));
}

export function getReport(slug: string): MarketReport | null {
  const file = path.join(reportsDir, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf-8")) as MarketReport;
}

export function formatPrice(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${n}`;
}

export function formatChange(n: number, sign = true): string {
  const prefix = sign && n > 0 ? "+" : "";
  return `${prefix}${n.toFixed(1)}%`;
}

export function marketLabel(type: MarketReport["marketType"]): string {
  return { buyers: "Buyer's Market", balanced: "Balanced Market", sellers: "Seller's Market" }[type];
}

export function marketColor(type: MarketReport["marketType"]): string {
  return { buyers: "text-blue-600", balanced: "text-emerald-600", sellers: "text-orange-600" }[type];
}

export function prevMonthLabel(month: string): string {
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];
  const idx = months.indexOf(month);
  if (idx < 0) return "Prev";
  return months[(idx - 1 + 12) % 12].slice(0, 3);
}
