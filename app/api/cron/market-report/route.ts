/**
 * Monthly market report generator — triggered by Vercel Cron on the 7th
 * of each month at 9 AM MT (16:00 UTC).
 *
 * Flow:
 *  1. Scrape all 5 CREB property-type tabs for last month's data
 *  2. Load prior reports (deployed in the build) to build price history + MoM
 *  3. Commit the populated JSON to GitHub → Vercel auto-deploys the live page
 *
 * Required environment variables (set in Vercel dashboard):
 *   CRON_SECRET   — auto-sent by Vercel; verified below
 *   GITHUB_TOKEN  — fine-grained PAT with "Contents: read & write"
 *   GITHUB_REPO   — e.g. "thesknova/livingwithchan"
 */

export const runtime = "nodejs";

import { scrapeAllTabs, buildReport, monthLabel } from "@/lib/creb-scraper";
import { getAllReports } from "@/lib/market-reports";

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function previousMonth(now: Date) {
  const d = new Date(now);
  d.setDate(1);
  d.setMonth(d.getMonth() - 1);
  const month = MONTH_NAMES[d.getMonth()];
  const year = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return { month, year, slug: `${year}-${mm}` };
}

export async function GET(request: Request) {
  // Verify caller is Vercel Cron (or an authorised manual trigger)
  const authHeader = request.headers.get("Authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const githubToken = process.env.GITHUB_TOKEN;
  const githubRepo  = process.env.GITHUB_REPO;

  if (!githubToken || !githubRepo) {
    return Response.json(
      { error: "GITHUB_TOKEN and GITHUB_REPO must be set" },
      { status: 500 }
    );
  }

  const { month, year, slug } = previousMonth(new Date());
  const filePath = `data/market-reports/${slug}.json`;
  const apiUrl   = `https://api.github.com/repos/${githubRepo}/contents/${filePath}`;

  const ghHeaders = {
    Authorization: `Bearer ${githubToken}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };

  // Skip if report already exists (avoids overwriting hand-edited data)
  const existing = await fetch(apiUrl, { headers: ghHeaders });
  if (existing.ok) {
    return Response.json({
      message: `Report ${slug} already exists — skipping.`,
      slug,
    });
  }

  // --- Scrape CREB ---
  const label = monthLabel(month, year);
  console.log(`[cron] Scraping CREB for ${label}…`);
  const tabs = await scrapeAllTabs(label);

  const scraped = Object.values(tabs).filter((t) => t.current !== null).length;
  console.log(`[cron] Scraped ${scraped}/5 tabs successfully`);

  // --- Build price history from deployed report files ---
  const previousReports = getAllReports()
    .filter((r) => r.slug !== slug)
    .slice(0, 5);

  // --- Assemble report JSON ---
  const report = buildReport(month, year, slug, tabs, previousReports);

  // --- Commit to GitHub ---
  const content = Buffer.from(JSON.stringify(report, null, 2)).toString("base64");

  const commit = await fetch(apiUrl, {
    method: "PUT",
    headers: ghHeaders,
    body: JSON.stringify({
      message: `chore: add ${month} ${year} market report (auto-scraped from CREB)`,
      content,
    }),
  });

  if (!commit.ok) {
    const err = await commit.json();
    console.error("[cron] GitHub commit failed", err);
    return Response.json({ error: "GitHub API error", detail: err }, { status: 502 });
  }

  return Response.json({
    message: `${month} ${year} report created from CREB data`,
    slug,
    scrapedTabs: scraped,
    benchmarkPrice: report.benchmarkPrice.overall,
    sales: report.sales.total,
    marketType: report.marketType,
  });
}
