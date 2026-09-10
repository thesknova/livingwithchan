/**
 * Generates every image for /blog/calgary-zoning-changes-august-2026.
 *
 * The article explains Calgary's August 4, 2026 repeal of blanket rezoning, so
 * each graphic carries one piece of that argument rather than decorating it:
 * the sequence of dates, the rules that changed inside R-CG, the two approval
 * paths a lot can now be on, and the split between the two kinds of suite.
 *
 * Brand fonts (Marcellus + Hanken Grotesk) are pulled from Google Fonts into a
 * local cache and handed to sharp through fontconfig.
 *
 *   node scripts/blog-zoning-graphics.mjs
 */

import { mkdirSync, writeFileSync, existsSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const FONT_DIR = join(ROOT, "node_modules", ".cache", "blog-fonts");
const OUT_DIR = join(ROOT, "public", "blog");

const FONTS = {
  "Marcellus.ttf": "https://fonts.gstatic.com/s/marcellus/v14/wEO_EBrOk8hQLDvIAF8FUQ.ttf",
  "HankenGrotesk-Regular.ttf":
    "https://fonts.gstatic.com/s/hankengrotesk/v12/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_Ncs2Za4Q.ttf",
  "HankenGrotesk-SemiBold.ttf":
    "https://fonts.gstatic.com/s/hankengrotesk/v12/ieVq2YZDLWuGJpnzaiwFXS9tYvBRzyFLlZg_f_NcbWFa4Q.ttf",
};

async function ensureFonts() {
  mkdirSync(FONT_DIR, { recursive: true });
  for (const [name, url] of Object.entries(FONTS)) {
    const file = join(FONT_DIR, name);
    if (existsSync(file)) continue;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Could not download ${name}: ${res.status}`);
    writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  }
  writeFileSync(
    join(FONT_DIR, "fonts.conf"),
    `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>.</dir>
  <cachedir>fc-cache</cachedir>
</fontconfig>
`
  );
  process.env.FONTCONFIG_PATH = FONT_DIR;
  process.env.FONTCONFIG_FILE = join(FONT_DIR, "fonts.conf");
}

// --- design system -----------------------------------------------------------
const CHARCOAL = "#3A3937";
const BRONZE = "#A3856F";
const LIGHT = "#F7F7F7";
const WHITE = "#FFFFFF";
const MID = "#E3E0D8";
const MUTED = "#8C867E";

const SANS = "Hanken Grotesk, Arial, sans-serif";
const SERIF = "Marcellus, Georgia, serif";

/** Figure heading, shared by every inline graphic. */
function figureTitle(text, x = 60, y = 64) {
  return `<text x="${x}" y="${y}" font-family="${SERIF}" font-size="34" fill="${CHARCOAL}">${text}</text>`;
}

function eyebrow(x, y, text, fill = BRONZE, anchor = "start") {
  return `<text x="${x}" y="${y}" font-family="${SANS}" font-size="15" font-weight="600"
    letter-spacing="4" fill="${fill}" text-anchor="${anchor}">${text}</text>`;
}

/** Small right-pointing chevron used between flow steps and timeline nodes. */
function chevron(x, y, fill = MUTED) {
  return `<path d="M ${x - 6} ${y - 8} L ${x + 4} ${y} L ${x - 6} ${y + 8}"
    fill="none" stroke="${fill}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
}

// =============================================================================
// 1. HERO — the default flipped back
// =============================================================================
const H_W = 1600;
const H_H = 840;
const GROUND = 640;
const PLINTH_H = 24;
const LOT_W = 580;
const LEFT_X = 110;
const RIGHT_X = 910;

function detachedHouse(cx, baseY, width, bodyH, roofH, fill) {
  const x = cx - width / 2;
  const eave = 12;
  const roof = `${x - eave},${baseY - bodyH} ${cx},${baseY - bodyH - roofH} ${x + width + eave},${baseY - bodyH}`;
  const doorW = 44;
  const doorH = 82;
  const winW = 56;
  const winH = 50;
  const winY = baseY - bodyH + 40;
  return `
    <polygon points="${roof}" fill="${fill}"/>
    <rect x="${x}" y="${baseY - bodyH}" width="${width}" height="${bodyH}" fill="${fill}"/>
    <rect x="${x + 26}" y="${winY}" width="${winW}" height="${winH}" rx="2" fill="${LIGHT}"/>
    <rect x="${x + width - 26 - winW}" y="${winY}" width="${winW}" height="${winH}" rx="2" fill="${LIGHT}"/>
    <rect x="${cx - doorW / 2}" y="${baseY - doorH}" width="${doorW}" height="${doorH}" rx="2" fill="${LIGHT}"/>
  `;
}

function rowUnit(x, baseY, width, bodyH, fill) {
  const capH = 12;
  const winW = 32;
  const winH = 42;
  const gutter = 22;
  const inner = width - gutter * 2;
  const winGap = inner - winW * 2;
  const doorW = 34;
  const doorH = 62;
  const rows = [baseY - bodyH + 36, baseY - bodyH + 116];
  const windows = rows
    .map(
      (y) => `
    <rect x="${x + gutter}" y="${y}" width="${winW}" height="${winH}" rx="2" fill="${LIGHT}"/>
    <rect x="${x + gutter + winW + winGap}" y="${y}" width="${winW}" height="${winH}" rx="2" fill="${LIGHT}"/>`
    )
    .join("");
  return `
    <rect x="${x - 2}" y="${baseY - bodyH - capH}" width="${width + 4}" height="${capH}" rx="3" fill="${fill}"/>
    <rect x="${x}" y="${baseY - bodyH}" width="${width}" height="${bodyH}" fill="${fill}"/>
    ${windows}
    <rect x="${x + (width - doorW) / 2}" y="${baseY - doorH}" width="${doorW}" height="${doorH}" rx="2" fill="${LIGHT}"/>
  `;
}

function ghostUnit(x, baseY, width, bodyH) {
  const capH = 12;
  return `<rect x="${x}" y="${baseY - bodyH - capH}" width="${width}" height="${bodyH + capH}" rx="3"
    fill="none" stroke="${BRONZE}" stroke-width="2" stroke-dasharray="8 8" opacity="0.55"/>`;
}

function pill(cx, y, label, fill) {
  const w = label.length * 10.8 + 60;
  return `
    <rect x="${cx - w / 2}" y="${y}" width="${w}" height="42" rx="21" fill="${fill}"/>
    <text x="${cx}" y="${y + 28}" font-family="${SANS}" font-size="15" font-weight="600"
      letter-spacing="4" fill="${LIGHT}" text-anchor="middle">${label}</text>
  `;
}

function heroCaption(cx, label, headline, eyebrowFill = BRONZE) {
  return `
    ${eyebrow(cx, 722, label, eyebrowFill, "middle")}
    <text x="${cx}" y="774" font-family="${SERIF}" font-size="30"
      fill="${CHARCOAL}" text-anchor="middle">${headline}</text>
  `;
}

function heroSvg() {
  const UNIT_W = 122;
  const UNIT_GAP = 12;
  const UNIT_COUNT = 4;
  const leftCx = LEFT_X + LOT_W / 2;
  const rightCx = RIGHT_X + LOT_W / 2;
  const rowSpan = UNIT_COUNT * UNIT_W + (UNIT_COUNT - 1) * UNIT_GAP;

  const units = Array.from({ length: UNIT_COUNT }, (_, i) =>
    rowUnit(LEFT_X + (LOT_W - rowSpan) / 2 + i * (UNIT_W + UNIT_GAP), GROUND, UNIT_W, 286, i % 2 === 0 ? CHARCOAL : BRONZE)
  ).join("");

  const ghostStart = RIGHT_X + (LOT_W - rowSpan) / 2;
  const ghosts = Array.from({ length: UNIT_COUNT }, (_, i) =>
    ghostUnit(ghostStart + i * (UNIT_W + UNIT_GAP), GROUND, UNIT_W, 286)
  ).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${H_W}" height="${H_H}" viewBox="0 0 ${H_W} ${H_H}">
  <rect width="${H_W}" height="${H_H}" fill="${LIGHT}"/>

  ${eyebrow(80, 74, "CALGARY ZONING &#183; IN EFFECT AUGUST 4, 2026")}
  ${eyebrow(H_W - 80, 74, "LIVING WITH CHAN", MUTED, "end")}
  <text x="80" y="146" font-family="${SERIF}" font-size="56" fill="${CHARCOAL}">Back to case by case.</text>
  <line x1="80" y1="196" x2="${H_W - 80}" y2="196" stroke="${MID}" stroke-width="2"/>

  <line x1="80" y1="${GROUND + PLINTH_H / 2}" x2="${H_W - 80}" y2="${GROUND + PLINTH_H / 2}"
    stroke="${MID}" stroke-width="2"/>

  <rect x="${LEFT_X}" y="${GROUND}" width="${LOT_W}" height="${PLINTH_H}" rx="12" fill="${MID}"/>
  <rect x="${RIGHT_X}" y="${GROUND}" width="${LOT_W}" height="${PLINTH_H}" rx="12" fill="${MID}"/>

  ${units}
  ${ghosts}
  ${detachedHouse(rightCx, GROUND, 232, 190, 92, CHARCOAL)}

  ${pill(leftCx, 248, "BY DEFAULT", CHARCOAL)}
  ${pill(rightCx, 248, "BY APPLICATION", BRONZE)}

  <line x1="800" y1="250" x2="800" y2="404" stroke="${MID}" stroke-width="2" stroke-dasharray="6 9"/>
  <line x1="800" y1="536" x2="800" y2="664" stroke="${MID}" stroke-width="2" stroke-dasharray="6 9"/>
  <circle cx="800" cy="470" r="46" fill="${CHARCOAL}"/>
  <path d="M 780 470 H 816 M 804 458 L 817 470 L 804 482" fill="none" stroke="${LIGHT}"
    stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

  ${heroCaption(leftCx, "UNTIL AUGUST 4, 2026", "R-CG on most lots", MUTED)}
  ${heroCaption(rightCx, "NOW", "R-C1 or R-C2 again")}
</svg>`;
}

// =============================================================================
// 2. TIMELINE — how Calgary got here
// =============================================================================
function timelineSvg() {
  const W = 1500;
  const H = 350;
  const lineY = 205;
  const COL = W / 4;

  const nodes = [
    { date: "August 6, 2024", lines: ["Blanket rezoning takes effect.", "Most lots become R-CG."], fill: BRONZE },
    { date: "April 8, 2026", lines: ["Council votes 12 to 3", "to repeal it."], fill: CHARCOAL },
    { date: "July 21, 2026", lines: ["Bylaw 26P2026 makes secondary", "suites permitted citywide."], fill: BRONZE },
    { date: "August 4, 2026", lines: ["The repeal takes effect.", "About 99% of lots revert."], fill: CHARCOAL },
  ];

  const cx = (i) => COL * i + COL / 2;

  // Solid through the R-CG era, dashed across the wind-down to implementation.
  const track = `
    <line x1="${cx(0)}" y1="${lineY}" x2="${cx(1)}" y2="${lineY}" stroke="${MID}" stroke-width="3"/>
    <line x1="${cx(1)}" y1="${lineY}" x2="${cx(3)}" y2="${lineY}" stroke="${MID}" stroke-width="3"
      stroke-dasharray="7 8"/>`;

  const marks = nodes
    .map((n, i) => {
      const x = cx(i);
      const body = n.lines
        .map((l, j) => `<text x="${x}" y="${262 + j * 28}" font-family="${SANS}" font-size="19"
          fill="${MUTED}" text-anchor="middle">${l}</text>`)
        .join("");
      return `
        <text x="${x}" y="${172}" font-family="${SANS}" font-size="20" font-weight="600"
          fill="${CHARCOAL}" text-anchor="middle">${n.date}</text>
        <circle cx="${x}" cy="${lineY}" r="11" fill="${n.fill}"/>
        <circle cx="${x}" cy="${lineY}" r="19" fill="none" stroke="${n.fill}" stroke-width="2" opacity="0.35"/>
        ${body}`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${WHITE}"/>
  ${figureTitle("How Calgary got here")}
  ${track}
  ${marks}
</svg>`;
}

// =============================================================================
// 3. R-CG RULES — the box got tighter
// =============================================================================
function rcgRulesSvg() {
  const W = 1500;
  const H = 355;
  const cols = [
    { label: "MAXIMUM HEIGHT", from: "11 m", to: "10 m" },
    { label: "LOT COVERAGE", from: "60%", to: "55%" },
    { label: "ZERO LOT LINE", from: "allowed", to: "Removed" },
  ];
  const COL = W / 3;

  const body = cols
    .map((c, i) => {
      const x = COL * i + COL / 2;
      return `
        ${eyebrow(x, 152, c.label, MUTED, "middle")}
        <text x="${x}" y="198" font-family="${SANS}" font-size="20" fill="${MUTED}"
          text-anchor="middle">was ${c.from}</text>
        <text x="${x}" y="250" font-family="${SERIF}" font-size="44" fill="${CHARCOAL}"
          text-anchor="middle">${c.to}</text>`;
    })
    .join("");

  const dividers = [1, 2]
    .map((i) => `<line x1="${COL * i}" y1="130" x2="${COL * i}" y2="268" stroke="${MID}" stroke-width="2"/>`)
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${WHITE}"/>
  ${figureTitle("What changed inside R-CG")}
  ${dividers}
  ${body}
  <line x1="60" y1="298" x2="${W - 60}" y2="298" stroke="${MID}" stroke-width="2"/>
  <text x="${W / 2}" y="332" font-family="${SANS}" font-size="19" fill="${MUTED}" text-anchor="middle">
    Rowhouses remain a permitted use in R-CG. Far fewer lots are R-CG.
  </text>
</svg>`;
}

// =============================================================================
// 4. APPROVAL PATHS — the case-by-case process
// =============================================================================
function approvalPathsSvg() {
  const W = 1500;
  const H = 530;
  const PILL_W = 200;
  const PILL_H = 86;
  const GAP = 40;
  const START_X = 50;

  function flow(steps, y) {
    return steps
      .map((s, i) => {
        const x = START_X + i * (PILL_W + GAP);
        const labels = s.lines
          .map(
            (l, j) => `<text x="${x + PILL_W / 2}" y="${y + (s.lines.length === 1 ? 51 : 38 + j * 26)}"
              font-family="${SANS}" font-size="17" font-weight="600" fill="${WHITE}"
              text-anchor="middle">${l}</text>`
          )
          .join("");
        const arrow = i < steps.length - 1 ? chevron(x + PILL_W + GAP / 2, y + PILL_H / 2) : "";
        return `
          <rect x="${x}" y="${y}" width="${PILL_W}" height="${PILL_H}" rx="10" fill="${s.fill}"/>
          ${labels}${arrow}`;
      })
      .join("");
  }

  const kept = [
    { lines: ["Development", "permit"], fill: CHARCOAL },
    { lines: ["Building", "permit"], fill: CHARCOAL },
    { lines: ["Build"], fill: CHARCOAL },
  ];

  const reverted = [
    { lines: ["Local Area Plan", "check"], fill: BRONZE },
    { lines: ["Rezoning", "application"], fill: BRONZE },
    { lines: ["Public hearing", "at Council"], fill: BRONZE },
    { lines: ["Council", "vote"], fill: BRONZE },
    { lines: ["Development", "permit"], fill: CHARCOAL },
    { lines: ["Building", "permit"], fill: CHARCOAL },
  ];

  const keptNoteX = START_X + kept.length * (PILL_W + GAP) + 24;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${WHITE}"/>
  ${figureTitle("Two paths to a rowhouse, depending on your lot")}

  ${eyebrow(START_X, 132, "IF YOUR LOT KEPT R-CG")}
  ${flow(kept, 152)}
  <text x="${keptNoteX}" y="190" font-family="${SANS}" font-size="19" fill="${MUTED}">Rowhouses are a permitted use here.</text>
  <text x="${keptNoteX}" y="218" font-family="${SANS}" font-size="19" fill="${MUTED}">No rezoning and no public hearing.</text>

  ${eyebrow(START_X, 322, "IF YOUR LOT REVERTED TO R-C1 OR R-C2")}
  ${flow(reverted, 342)}
  <text x="${START_X}" y="472" font-family="${SANS}" font-size="19" fill="${MUTED}">
    The four bronze steps are what the repeal added back. Each one costs time and money before you know the answer.
  </text>
</svg>`;
}

// =============================================================================
// 5. SUITES — the one thing that got easier
// =============================================================================
function suitesSvg() {
  const W = 1500;
  const H = 500;
  const CARD_W = 690;
  const CARD_Y = 110;
  const CARD_H = 320;

  function card(x, accent, title, sub, bullets) {
    const items = bullets
      .map(
        (b, i) => `
        <circle cx="${x + 44}" cy="${239 + i * 38}" r="5" fill="${accent}"/>
        <text x="${x + 66}" y="${245 + i * 38}" font-family="${SANS}" font-size="18" fill="${CHARCOAL}">${b}</text>`
      )
      .join("");
    const clip = `card-${x}`;
    return `
      <clipPath id="${clip}">
        <rect x="${x}" y="${CARD_Y}" width="${CARD_W}" height="${CARD_H}" rx="14"/>
      </clipPath>
      <g clip-path="url(#${clip})">
        <rect x="${x}" y="${CARD_Y}" width="${CARD_W}" height="${CARD_H}" fill="${LIGHT}"/>
        <rect x="${x}" y="${CARD_Y}" width="${CARD_W}" height="6" fill="${accent}"/>
      </g>
      <text x="${x + 44}" y="${CARD_Y + 62}" font-family="${SERIF}" font-size="30" fill="${CHARCOAL}">${title}</text>
      <text x="${x + 44}" y="${CARD_Y + 92}" font-family="${SANS}" font-size="17" fill="${MUTED}">${sub}</text>
      ${items}`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${WHITE}"/>
  ${figureTitle("Suites moved the other way")}

  ${card(50, BRONZE, "Secondary suite", "the basement suite", [
    "Permitted use in every low-density district",
    "No development permit required",
    "Straight to building permit review",
    "Made permitted by Bylaw 26P2026, July 2026",
  ])}

  ${card(760, MUTED, "Backyard suite", "garden or laneway suite", [
    "Permitted in R-G, discretionary elsewhere",
    "Development permit required",
    "21 day window for neighbours to appeal",
    "Parking stall required again",
    "Not allowed on semi-detached homes",
  ])}

  <text x="${W / 2}" y="472" font-family="${SANS}" font-size="19" fill="${MUTED}" text-anchor="middle">
    In most districts you can now have one or the other, not both.
  </text>
</svg>`;
}

// --- render ------------------------------------------------------------------
const FIGURES = [
  ["calgary-zoning-august-2026-hero.png", heroSvg()],
  ["calgary-zoning-2026-timeline.png", timelineSvg()],
  ["calgary-zoning-2026-rcg-rules.png", rcgRulesSvg()],
  ["calgary-zoning-2026-approval-paths.png", approvalPathsSvg()],
  ["calgary-zoning-2026-suites.png", suitesSvg()],
];

await ensureFonts();
const sharp = (await import("sharp")).default;
mkdirSync(OUT_DIR, { recursive: true });

for (const [name, svg] of FIGURES) {
  const file = join(OUT_DIR, name);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(file);
  console.log(`Wrote ${name}`);
}
