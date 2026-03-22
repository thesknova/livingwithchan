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
- **Email:** ckawaguchi88@gmail.com
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
- **Font:** Inter (Google Fonts, loaded via `next/font/google`)
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
- `components/ui/Button.tsx` — primary / outline / ghost variants

## Data
- `lib/listings.ts` — 9 placeholder Calgary listings
- `lib/types.ts` — `Listing` TypeScript type

## Out of Scope (future additions)
- MLS / IDX live listings feed
- User authentication
- CMS / admin dashboard
- Blog
