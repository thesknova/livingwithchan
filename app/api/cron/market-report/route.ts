/**
 * Monthly market report scaffold generator — triggered by hand, not by cron.
 *
 * This used to run on a Vercel Cron on the 7th. The schedule was removed
 * because the report always needed written input (headline, summary,
 * takeaways) that the scraper can't produce, so a recurring calendar reminder
 * on the 1st drives the process instead. The endpoint stays as the data
 * fetcher for that manual pass.
 *
 * Flow:
 *  1. Scrape all 5 CREB property-type tabs for last month's data
 *  2. Load prior reports (deployed in the build) to build price history + MoM
 *  3. Commit the scaffold JSON to GitHub → Vercel auto-deploys the live page
 *
 * Usage (CRON_SECRET is still the auth token):
 *   curl -H "Authorization: Bearer $CRON_SECRET" \
 *     "https://www.livingwithchan.com/api/cron/market-report?dryRun=1"
 *
 * ?dryRun=1  returns the scraped report without writing anything.
 * ?month=2026-07  overrides the target month; defaults to last month. Note
 *   that CREB's Daily Housing Summary only carries the last completed month
 *   and the current month to date, so older months can't be scraped.
 *
 * Required environment variables (set in Vercel dashboard):
 *   CRON_SECRET   — bearer token checked below
 *   GITHUB_TOKEN  — fine-grained PAT with "Contents: read & write"
 *   GITHUB_REPO   — e.g. "thesknova/livingwithchan"
 */

export const runtime = "nodejs";

import { scrapeAllTabs, buildReport, monthLabel } from "@/lib/creb-scraper";
import type { ReportPeriod } from "@/lib/creb-scraper";
import { getAllReports } from "@/lib/market-reports";

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

/**
 * Build a period from the month the statistics cover. The report is titled and
 * slugged by the month it is published in, which is always the month after the
 * data month, so readers arriving in September find a "September 2026" report.
 */
function periodFromDataMonth(dataIdx: number, dataYear: number): ReportPeriod {
  const pubIdx = (dataIdx + 1) % 12;
  const pubYear = dataIdx === 11 ? dataYear + 1 : dataYear;
  return {
    dataMonth: MONTH_NAMES[dataIdx],
    dataYear,
    month: MONTH_NAMES[pubIdx],
    year: pubYear,
    slug: `${pubYear}-${String(pubIdx + 1).padStart(2, "0")}`,
  };
}

/** Last complete month, which is what CREB has just reported on. */
function previousMonth(now: Date) {
  const d = new Date(now);
  d.setDate(1);
  d.setMonth(d.getMonth() - 1);
  return periodFromDataMonth(d.getMonth(), d.getFullYear());
}

/** `?month=` names the DATA month (2026-08 = August figures), as CREB labels it. */
function parseMonthParam(value: string | null): ReportPeriod | null {
  const m = value?.match(/^(\d{4})-(\d{2})$/);
  if (!m) return null;
  const idx = parseInt(m[2]) - 1;
  if (idx < 0 || idx > 11) return null;
  return periodFromDataMonth(idx, parseInt(m[1]));
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("Authorization");
  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const dryRun = url.searchParams.get("dryRun") === "1";

  const target = parseMonthParam(url.searchParams.get("month"));
  if (url.searchParams.has("month") && !target) {
    return Response.json(
      { error: "Invalid month — expected YYYY-MM of the data month, e.g. 2026-08" },
      { status: 400 }
    );
  }

  const period = target ?? previousMonth(new Date());
  const { dataMonth, dataYear, month, year, slug } = period;

  const githubToken = process.env.GITHUB_TOKEN;
  const githubRepo  = process.env.GITHUB_REPO;

  // A dry run never touches GitHub, so it stays usable if the token lapses.
  if (!dryRun && (!githubToken || !githubRepo)) {
    return Response.json(
      { error: "GITHUB_TOKEN and GITHUB_REPO must be set" },
      { status: 500 }
    );
  }

  const filePath = `data/market-reports/${slug}.json`;
  const apiUrl   = `https://api.github.com/repos/${githubRepo}/contents/${filePath}`;

  const ghHeaders = {
    Authorization: `Bearer ${githubToken}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };

  // Skip if report already exists (avoids overwriting hand-edited data)
  if (!dryRun) {
    const existing = await fetch(apiUrl, { headers: ghHeaders });
    if (existing.ok) {
      return Response.json({
        message: `Report ${slug} already exists — skipping.`,
        slug,
      });
    }
    // A bad or expired GITHUB_TOKEN reads as 401/403 here. Fail loudly rather
    // than falling through to a PUT that is only going to be rejected too.
    if (existing.status === 401 || existing.status === 403) {
      return Response.json(
        {
          error: "GitHub rejected the token — check GITHUB_TOKEN hasn't expired",
          status: existing.status,
        },
        { status: 502 }
      );
    }
  }

  // --- Scrape CREB ---
  const label = monthLabel(dataMonth, dataYear);
  console.log(`[report] Scraping CREB for ${label}…`);
  const tabs = await scrapeAllTabs(label);

  const scraped = Object.values(tabs).filter((t) => t.current !== null).length;
  console.log(`[report] Scraped ${scraped}/5 tabs successfully`);

  // Never publish a hollow report. buildReport fills unscraped fields with 0,
  // so without this a failed parse commits $0 prices and 0 sales to the live
  // site. The Daily Housing Summary only carries the last completed month and
  // the current month to date, so this also catches asking for a stale month.
  if (!tabs.total.current || scraped < 5) {
    return Response.json(
      {
        error: `Scrape incomplete for ${label} — refusing to build a report`,
        scrapedTabs: scraped,
        missing: Object.entries(tabs)
          .filter(([, t]) => t.current === null)
          .map(([k]) => k),
        hint: "CREB only publishes the last completed month and the current month to date.",
      },
      { status: 502 }
    );
  }

  // --- Build price history from deployed report files ---
  const previousReports = getAllReports()
    .filter((r) => r.slug !== slug)
    .slice(0, 5);

  // --- Assemble report JSON ---
  const report = buildReport(period, tabs, previousReports);

  if (dryRun) {
    return Response.json({
      message: `Dry run — scraped ${label}, nothing written`,
      slug,
      scrapedTabs: scraped,
      report,
    });
  }

  // --- Commit to GitHub ---
  const content = Buffer.from(JSON.stringify(report, null, 2)).toString("base64");

  const commit = await fetch(apiUrl, {
    method: "PUT",
    headers: ghHeaders,
    body: JSON.stringify({
      message: `chore: add ${month} ${year} market report (${dataMonth} ${dataYear} CREB data)`,
      content,
    }),
  });

  if (!commit.ok) {
    const err = await commit.json();
    console.error("[cron] GitHub commit failed", err);
    return Response.json({ error: "GitHub API error", detail: err }, { status: 502 });
  }

  return Response.json({
    message: `${month} ${year} report created from ${dataMonth} ${dataYear} CREB data`,
    slug,
    scrapedTabs: scraped,
    benchmarkPrice: report.benchmarkPrice.overall,
    sales: report.sales.total,
    marketType: report.marketType,
  });
}
