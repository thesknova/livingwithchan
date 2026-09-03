<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Living With Chan — Project Reference

## Agent Details
- **Name:** Chan Kawaguchi
- **Title:** REMAX Real Estate Agent
- **Market:** Calgary, Alberta
- **Phone:** 403-681-0107
- **Email:** hello@livingwithchan.com
- **Headshot:** `/public/chan-headshot.png`

## Tech Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 (CSS-based config in `app/globals.css` — no `tailwind.config.ts`)
- **Deployment:** Vercel → GitHub repo: `https://github.com/thesknova/livingwithchan`

## Design System
- **Primary:** `#3A3937` (charcoal brown)
- **Primary Dark:** `#111111` (near black — footers, CTA banners)
- **Accent:** `#A3856F` (warm bronze/taupe — buttons, highlights)
- **Neutral Light:** `#F7F7F7` (page backgrounds)
- **Neutral Mid:** `#E3E0D8` (borders, card backgrounds)
- **Fonts:** Hanken Grotesk (body, `--font-hanken`) + Marcellus (display headings, `--font-display`)
  — both via `next/font/google` in `app/layout.tsx`. Use `font-display` for headings; body inherits Hanken.
- **Reference site for style:** https://dinaplemieux.ca/

## Third-Party Services
- **Contact form:** Formspree — endpoint `https://formspree.io/f/xwvrdoyj`
  - Submissions are emailed to the registered Formspree account
  - Free tier: 50 submissions/month
  - Dashboard: https://formspree.io

## Pages
| Route | File |
|-------|------|
| `/` | `app/page.tsx` |
| `/listings` | `app/listings/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/contact` | `app/contact/page.tsx` |

## Key Components
- `components/Navbar.tsx` — sticky, responsive with mobile menu
- `components/Footer.tsx` — dark 3-column layout
- `components/Hero.tsx` — full-bleed photo hero
- `components/StatsBar.tsx` — "150+ Homes Sold" stat strip
- `components/AgentBio.tsx` — agent photo + bio (compact prop for homepage)
- `components/ListingCard.tsx` + `ListingGrid.tsx` — property cards
- `components/ContactForm.tsx` — form wired to Formspree
- `components/market-report/DistrictMap.tsx` — interactive 8-district choropleth (client component)
- `components/ui/Button.tsx` — primary / outline / ghost variants

## Data
- `lib/listings.ts` — 9 placeholder Calgary listings
- `lib/districts.ts` — Calgary's 8 CREB housing districts: pre-projected SVG paths, label
  anchors, and the district/property-type types. No `fs` import, so client components may use it.
- `lib/types.ts` — `Listing` TypeScript type

## Monthly Market Report Update

Reports are published manually on the 1st (calendar reminder). Steps:

1. Add `data/market-reports/<YYYY-MM>.json` for the new publication month.
   `month`/`year` = the month it is **published**; `dataMonth`/`dataYear` = the month
   the figures **cover** (always one earlier).
2. Add the district table for the map:
   `node scripts/extract-districts.mjs <MM> <YYYY> --write <slug>`
   where `MM`/`YYYY` are the **data** month (August data → `08 2026`) and `slug` is the
   new report. It fetches CREB's stats package, parses the eight districts × four property
   types, and refuses to write if the citywide rows disagree with the benchmark prices
   already in the report. Needs `pdftotext` (poppler) on PATH.
3. The map on `/market-reports` picks up the newest report that has a `districts` block,
   so a month missing step 2 keeps showing the previous month rather than going blank.

District boundaries come from the City of Calgary's community `sector` field
(data.calgary.ca resource `surr-xmvs`), dissolved into eight polygons. They change at
most once a year and are baked into `lib/districts.ts`.

## Out of Scope (future additions)
- MLS / IDX live listings feed
- User authentication
- CMS / admin dashboard
- Blog
