/**
 * Pulls the district table out of CREB's monthly City of Calgary stats package
 * and prints the `districts` block to paste into data/market-reports/<slug>.json.
 *
 *   node scripts/extract-districts.mjs 08 2026
 *   node scripts/extract-districts.mjs 08 2026 --write 2026-09
 *
 * The month/year are the month the DATA covers, not the month the report is
 * published — August data goes in the September report. `--write <slug>` splices
 * the block straight into that report file and checks the citywide rows against
 * the benchmark prices already in it.
 *
 * Needs `pdftotext` (poppler) on PATH.
 */

import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const [mm, yyyy, ...rest] = process.argv.slice(2);
if (!/^\d{2}$/.test(mm ?? "") || !/^\d{4}$/.test(yyyy ?? "")) {
  console.error("usage: node scripts/extract-districts.mjs <MM> <YYYY> [--write <slug>]");
  process.exit(1);
}
const writeSlug = rest[0] === "--write" ? rest[1] : null;

const URL_ = `https://www.creb.com/Housing_Statistics/documents/${mm}_${yyyy}_Calgary_Monthly_Stats_Package.pdf`;

// CREB orders the district rows the same way in every block, and the four
// blocks always run detached, apartment, semi-detached, row.
const DISTRICT_ORDER = [
  "City Centre", "North East", "North", "North West",
  "West", "South", "South East", "East", "TOTAL CITY",
];
const BLOCK_TYPES = ["Detached", "Apartment", "Semi-detached", "Row"];
const OUTPUT_ORDER = [
  "City Centre", "North", "North East", "North West",
  "West", "East", "South", "South East", "TOTAL CITY",
];

// district | ... | inventory | months of supply | benchmark | YoY% | MoM%
const ROW = /^\s*(City Centre|North East|North West|South East|North|West|South|East|TOTAL CITY)\s+.*?(\d[\d,]*)\s+(\d+\.\d+)\s+\$([\d,]+)\s+(-?\d+\.\d+)%\s+(-?\d+\.\d+)%/;

const num = (s) => Number(s.replace(/,/g, ""));

console.error(`Fetching ${URL_}`);
const res = await fetch(URL_, { headers: { "User-Agent": "Mozilla/5.0" } });
if (!res.ok) {
  console.error(`CREB returned ${res.status}. Has ${mm}/${yyyy} been published yet?`);
  process.exit(1);
}
const dir = mkdtempSync(join(tmpdir(), "creb-"));
const pdf = join(dir, "pkg.pdf");
writeFileSync(pdf, Buffer.from(await res.arrayBuffer()));

let text;
try {
  text = execFileSync("pdftotext", ["-layout", pdf, "-"], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
} catch {
  console.error("Could not run `pdftotext`. Install poppler and retry.");
  process.exit(1);
}

// Walk the lines, closing a block each time the TOTAL CITY row lands.
const blocks = [];
let current = [];
for (const line of text.split("\n")) {
  const m = ROW.exec(line);
  if (!m) continue;
  current.push({
    district: m[1],
    stat: { price: num(m[4]), yoy: Number(m[5]), mom: Number(m[6]), mos: Number(m[3]), inv: num(m[2]) },
  });
  if (m[1] === "TOTAL CITY") {
    blocks.push(current);
    current = [];
  }
}

const usable = blocks.filter((b) => b.length === DISTRICT_ORDER.length).slice(0, 4);
if (usable.length < 4) {
  console.error(
    `Expected 4 complete district blocks, found ${usable.length}. ` +
      `CREB may have changed the layout — check the PDF by hand.`
  );
  process.exit(1);
}

const districts = {};
BLOCK_TYPES.forEach((type, i) => {
  const byName = Object.fromEntries(usable[i].map((r) => [r.district, r.stat]));
  districts[type] = Object.fromEntries(OUTPUT_ORDER.map((n) => [n, byName[n]]));
});

// Keep the property-type key order the site uses.
const ordered = {
  Detached: districts.Detached,
  "Semi-detached": districts["Semi-detached"],
  Row: districts.Row,
  Apartment: districts.Apartment,
};

if (!writeSlug) {
  console.log(JSON.stringify({ districts: ordered }, null, 2));
  process.exit(0);
}

const file = `data/market-reports/${writeSlug}.json`;
if (!existsSync(file)) {
  console.error(`No such report: ${file}`);
  process.exit(1);
}
const report = JSON.parse(readFileSync(file, "utf8"));

// The citywide district row must agree with the benchmark prices already in the
// report — if it doesn't, the wrong month's package was fetched.
const checks = [
  ["Detached", report.benchmarkPrice?.detached],
  ["Semi-detached", report.benchmarkPrice?.semiDetached],
  ["Row", report.benchmarkPrice?.townhouse],
  ["Apartment", report.benchmarkPrice?.condo],
];
let ok = true;
for (const [type, expected] of checks) {
  const got = ordered[type]["TOTAL CITY"].price;
  const match = expected === undefined || got === expected;
  ok &&= match;
  console.error(`${match ? "ok  " : "MISMATCH"} ${type}: package ${got} vs report ${expected}`);
}
if (!ok) {
  console.error("\nCitywide figures disagree — not writing. Check the month arguments.");
  process.exit(1);
}

report.districts = ordered;
writeFileSync(file, JSON.stringify(report, null, 2) + "\n");
console.error(`\nWrote district data for ${mm}/${yyyy} into ${file}`);
