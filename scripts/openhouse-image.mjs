/**
 * Generates a 1080x1080 open house social media image.
 * Uses the twilight exterior photo as the hero with text overlay.
 */

import sharp from "sharp";
import { readFileSync } from "fs";

const SIZE = 1080;
const PHOTO      = "F:/Realtor Folder/116_Deer_Run/Photos For Social/PL_PHOTOS-2.jpg";
const LOGO       = "d:/ClaudeCode/LivingWithChan/public/remax-complete-realty-logo.jpg";
const OUTPUT     = "F:/Realtor Folder/116_Deer_Run/openhouse-april18.png";

// SVG overlay: gradient + text (no RE/MAX box — real logo composited separately)
const overlay = `
<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#000000" stop-opacity="0.10"/>
      <stop offset="45%"  stop-color="#000000" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.88"/>
    </linearGradient>
  </defs>

  <!-- Full gradient wash -->
  <rect width="${SIZE}" height="${SIZE}" fill="url(#grad)"/>

  <!-- Accent bar across the top -->
  <rect x="64" y="0" width="${SIZE - 128}" height="5" rx="3" fill="#A3856F"/>

  <!-- OPEN HOUSE pill badge -->
  <rect x="64" y="64" width="232" height="48" rx="24" fill="#A3856F"/>
  <text x="180" y="95"
    font-family="Arial Black, Arial, sans-serif"
    font-size="17" font-weight="900"
    fill="white" text-anchor="middle" letter-spacing="4">OPEN HOUSE</text>

  <!-- Day + date (large) -->
  <text x="64" y="${SIZE - 288}"
    font-family="Arial Black, Arial, sans-serif"
    font-size="88" font-weight="900"
    fill="white">Saturday</text>

  <!-- Date + time in accent -->
  <text x="64" y="${SIZE - 192}"
    font-family="Arial Black, Arial, sans-serif"
    font-size="58" font-weight="900"
    fill="#A3856F">April 18  ·  1 – 3 PM</text>

  <!-- Address -->
  <text x="64" y="${SIZE - 114}"
    font-family="Arial, sans-serif"
    font-size="28" font-weight="600"
    fill="rgba(255,255,255,0.90)">116 Deer Run Blvd SE, Calgary</text>

  <!-- Divider -->
  <line x1="64" y1="${SIZE - 76}" x2="${SIZE - 64}" y2="${SIZE - 76}"
    stroke="rgba(255,255,255,0.20)" stroke-width="1"/>

  <!-- Agent name + phone (brokerage shown via logo) -->
  <text x="64" y="${SIZE - 44}"
    font-family="Arial, sans-serif"
    font-size="20" font-weight="600"
    fill="rgba(255,255,255,0.65)">Chan Kawaguchi  ·  403-681-0107</text>
</svg>
`.trim();

// Resize logo to fit top-right: 260px wide, preserve aspect ratio
const logoResized = await sharp(readFileSync(LOGO))
  .resize({ width: 260 })
  .toBuffer();

const logoDims = await sharp(logoResized).metadata();
const logoH = logoDims.height ?? 84;

// Place logo top-right, vertically centred with the OPEN HOUSE badge (top: 64, badge height: 48)
const logoTop  = 64 + Math.round((48 - logoH) / 2);
const logoLeft = SIZE - 64 - 260;

const photo = readFileSync(PHOTO);

await sharp(photo)
  .resize(SIZE, SIZE, { fit: "cover", position: "left" })
  .composite([
    { input: Buffer.from(overlay), top: 0, left: 0 },
    { input: logoResized, top: Math.max(logoTop, 60), left: logoLeft },
  ])
  .png({ quality: 95 })
  .toFile(OUTPUT);

console.log(`Saved → ${OUTPUT}`);
