# SEO Content Audit
## https://livingwithchan.com
### Date: 2026-04-29

---

## SEO Health Score: 54/100

| Category | Score | Max |
|---|---|---|
| Title Tags | 6 | 10 |
| Meta Descriptions | 7 | 10 |
| Heading Hierarchy | 8 | 10 |
| Image Optimization | 6 | 10 |
| Schema / Structured Data | 0 | 10 |
| Open Graph / Social | 0 | 10 |
| Technical SEO | 7 | 10 |
| Content Quality | 8 | 10 |
| Internal Linking | 7 | 10 |
| Trust Signals | 5 | 10 |

**54/100 — Solid foundation, critical gaps in schema, social meta, and trust signals holding back rankings and click-throughs.**

---

## On-Page SEO Checklist

### Title Tags

| Page | Title (as rendered by template) | Chars | Status |
|---|---|---|---|
| Homepage | Living With Chan \| Calgary Real Estate Agent | 44 | Needs Work |
| About | About Chan \| Living With Chan | 31 | Fail |
| Listings | Listings \| Living With Chan | 28 | Fail |
| Contact | Contact \| Living With Chan | 27 | Fail |
| Sell | Sell My Home in Calgary \| Chan Kawaguchi | 41 | Needs Work |
| Investors | Calgary Investment Properties \| Chan Kawaguchi | 47 | Pass |
| Blog | Calgary Real Estate Blog \| Chan Kawaguchi | 42 | Pass |
| First-Time Buyers | First-Time Home Buyers Calgary \| Chan Kawaguchi | 49 | Pass |
| Luxury | Luxury Homes Calgary \| Chan Kawaguchi | 39 | Needs Work |

**Critical finding:** Three high-traffic pages — About, Listings, and Contact — have placeholder titles with no keywords. Google truncates titles over 60 characters but these are wasting opportunity at the opposite extreme. "About Chan | Living With Chan" gives Google nothing to work with and burns a major trust page.

**Why it matters:** Title tags are the single largest on-page ranking factor and the primary driver of click-through rate in SERPs. A searcher who types "Calgary REMAX agent" and sees "About Chan | Living With Chan" has no reason to click. The same content with "Chan Kawaguchi — Calgary REMAX Real Estate Agent" could increase CTR by 20–35%.

**Recommended rewrites:**

| Page | Recommended Title | Chars |
|---|---|---|
| Homepage | Calgary Real Estate Agent \| Chan Kawaguchi, REMAX | 51 |
| About | Chan Kawaguchi — Calgary REMAX Real Estate Agent | 49 |
| Listings | Calgary Homes for Sale \| Chan Kawaguchi, REMAX | 47 |
| Contact | Contact Chan Kawaguchi — Calgary Real Estate Agent | 50 |
| Sell | Sell Your Calgary Home \| Chan Kawaguchi, REMAX | 47 |
| Luxury | Luxury Homes for Sale in Calgary \| Chan Kawaguchi | 51 |

---

### Meta Descriptions

| Page | Length | Status | Issue |
|---|---|---|---|
| Homepage | 134 chars | Needs Work | Short (target 150-160), no CTA |
| About | 119 chars | Needs Work | Short, no CTA |
| Listings | 99 chars | Fail | Too short, generic |
| Contact | 97 chars | Needs Work | Short |
| Sell | 153 chars | Pass | Good |
| Blog | 155 chars | Pass | Good |
| Investors | 157 chars | Pass | Good |
| First-Time Buyers | 148 chars | Needs Work | Just under, no CTA |

**Current homepage description:**
> "Chan Kawaguchi is a trusted REMAX Complete Realty Agent in Calgary, Alberta. Browse listings, learn about Chan, and get in touch today."

**Recommended homepage description (158 chars):**
> "Chan Kawaguchi is your trusted Calgary REMAX agent — buy, sell, or invest with local expertise and honest guidance. Browse listings or call 403-681-0107 today."

**Current listings description:**
> "Browse current real estate listings in Calgary, AB with Chan Kawaguchi, REMAX Complete Realty Agent."

**Recommended listings description (157 chars):**
> "Browse current Calgary homes for sale with Chan Kawaguchi, REMAX Complete Realty. Detached homes, condos, and investment properties across all Calgary communities."

---

### Heading Hierarchy

**Homepage:**
- H1: "Find Your Dream Home in Calgary" (in Hero component) — PASS — contains primary keyword
- H2: "Ready to Make Your Move?" — good CTA
- No heading hierarchy issues detected

**About page:**
- H1: No explicit H1 visible at page level — FAIL. The about page renders AgentBio which has H2 "Chan Kawaguchi" — this should be H1 on a dedicated about page
- H2: "What Sets Chan Apart", "What Clients Say", "Let's Work Together"

**Key hierarchy issues:**
- The homepage H1 ("Find Your Dream Home in Calgary") lives inside the `Hero` client component, which means it renders client-side. This is fine for users but search crawlers parsing server-rendered HTML may see a delayed H1. Recommend ensuring Hero renders with SSR or moving H1 to the page server component.
- The about page has no H1 at the page wrapper level — the H2 "Chan Kawaguchi" should be promoted to H1 since it is the most important heading on the page.

**Blog posts:**
- H1: Each article has a proper H1 with the post title — PASS
- H2/H3 subheadings are present and descriptive — PASS

---

### Image Optimization

| Image | Alt Text | Status |
|---|---|---|
| Chan headshot (Hero) | "Chan Kawaguchi" | Needs Work — missing title/location |
| Chan headshot (About) | "Chan Kawaguchi" | Needs Work |
| Chan headshot (AgentBio) | "Chan Kawaguchi, REMAX Complete Realty Agent, Calgary" | Pass |
| REMAX logo (Footer) | "REMAX Complete Realty" | Pass |
| Listing photos | "{address}, {city}" | Pass — dynamic and descriptive |
| Segment photos (BuyerSegments) | Segment title only (e.g. "First-Time Buyers") | Needs Work — add location |

**Recommended hero/about alt text:**
> "Chan Kawaguchi — REMAX Complete Realty Agent, Calgary Alberta"

**BuyerSegments alt text improvement:**
> Currently: `alt={seg.title}` → e.g. "Luxury Homes"
> Recommended: `alt={`${seg.title} in Calgary — Chan Kawaguchi`}` → e.g. "Luxury Homes in Calgary — Chan Kawaguchi"

**Image format:** Next.js `<Image>` serves WebP/AVIF automatically — PASS
**Lazy loading:** Next.js handles this by default — PASS
**REMAX logo:** Uses `<Image>` with proper dimensions — PASS

---

### Internal Linking

| Check | Status | Notes |
|---|---|---|
| Internal links present | Pass | All pages link to key conversion pages |
| Anchor text descriptive | Needs Work | Many CTAs are "View Listings", "Learn More", "Contact Chan" — functional but not keyword-rich |
| Deep linking | Pass | Navigation covers all major page types |
| Blog → service pages | Unknown | Blog posts not yet audited for outbound links to /sell, /buyers, /investors |
| Investors duplication | Fail | `/investors` and `/buyers/investors` both target investment properties — keyword cannibalization risk |

**Keyword cannibalization — urgent:** Two separate pages target "Calgary investment properties":
- `/investors` — "Calgary Investment Properties | Chan Kawaguchi"
- `/buyers/investors` — "Investment Properties Calgary | Chan Kawaguchi"

Google will struggle to determine which page to rank. Pick one as the canonical investment hub and redirect or consolidate the other, or differentiate them clearly (e.g. one for buyers, one for portfolio investors).

---

### URL Structure

| Check | Status |
|---|---|
| Human-readable | Pass — /buyers/first-time, /sell, /market-reports |
| Keywords in URLs | Pass — most URLs contain relevant terms |
| Length | Pass — all under 60 chars |
| Hyphens (not underscores) | Pass |
| Lowercase | Pass |
| Clean (no parameters) | Pass |
| Consistent trailing slash | Pass |

**Minor issue:** `/search/ne`, `/search/nw`, `/search/sw` use quadrant codes instead of full names. `/homes-for-sale/ne-calgary` would be more keyword-rich and descriptive for both users and search engines.

---

## Content Quality (E-E-A-T)

| Dimension | Score | Evidence |
|---|---|---|
| Experience | Present | Real headshot, specific community references (Tuscany, Inglewood, Kensington, Cranston), office address, 10+ years stated, phone number |
| Expertise | Strong | Deep long-form blog posts (Bitcoin/real estate 12 min, basement suites 11 min, Calgary zoning 10 min), CMA methodology explained, specific market terminology used correctly |
| Authoritativeness | Weak | No RECA license number displayed, no author bylines on blog posts, no media mentions, no industry awards, no Google Reviews integration, testimonials are not third-party verified |
| Trustworthiness | Present | HTTPS confirmed (Cloudflare), physical office address in footer, phone and email visible, testimonials present — but: no privacy policy, no terms of service, no license number |

**Most urgent E-E-A-T fix — add license number.** In Alberta, RECA requires real estate professionals to display their license status. Displaying "Licensed REMAX Complete Realty Agent · RECA #XXXXXX" in the footer builds both legal compliance and Google's trust signals. Google's quality rater guidelines specifically look for professional credentials on YMYL (Your Money or Your Life) pages — and real estate is explicitly YMYL.

**Second priority — author bylines on blog posts.** Each blog article is valuable content, but it has no byline, no author schema, and no link to Chan's bio. Google rewards content that clearly attributes authorship to a credentialed person. Adding "By Chan Kawaguchi, REMAX Complete Realty" with a link to `/about` on each post directly improves E-E-A-T.

---

## Keyword Analysis

### Homepage Primary Keyword

| Element | Evaluation |
|---|---|
| Primary keyword | "Calgary real estate agent" |
| Search intent | Commercial / navigational (someone choosing an agent) |
| Keyword in title | "Calgary Real Estate Agent" — PASS |
| Keyword in H1 | "Find Your Dream Home in Calgary" — partial (Calgary present, agent missing) |
| Keyword in first 100 words | Hero body: "trusted REMAX Complete Realty agent" — PASS |
| Keyword in subheadings | Not in H2s — NEEDS WORK |
| Keyword in meta description | "REMAX Complete Realty Agent in Calgary" — PASS |
| Keyword in URL | livingwithchan.com — not present |

### Secondary Keywords the Site Should Target

| Keyword | Intent | Currently Targeted? |
|---|---|---|
| Calgary real estate agent | Commercial | Yes (homepage) |
| Sell my house Calgary | Transactional | Yes (/sell) |
| Calgary homes for sale | Transactional | Weak (/listings) |
| First-time home buyer Calgary | Commercial | Yes (/buyers/first-time) |
| Calgary investment properties | Commercial | Yes (conflict: 2 pages) |
| Luxury homes Calgary | Commercial | Yes (/buyers/luxury) |
| REMAX Calgary | Navigational | Partial |
| Calgary real estate market 2026 | Informational | Partial (/market-reports) |
| How to sell a house in Calgary | Informational | Not targeted |
| Calgary acreage for sale | Transactional | Yes (/buyers/acreages) |
| NE Calgary homes for sale | Transactional | Weak (/search/ne) |
| Calgary mortgage calculator | Informational | Yes (/mortgage-calculator) |

### Search Intent Alignment

All major pages align correctly with their intent:
- `/sell` — transactional/commercial — content matches (valuation form, process, FAQ) ✓
- `/buyers/first-time` — commercial — step-by-step guide matches ✓
- `/blog/*` — informational — long-form articles match ✓
- `/listings` — transactional — placeholder listings, intent matched but content is thin ✓

**Intent misalignment risk:** The homepage H1 "Find Your Dream Home in Calgary" targets buyers only. Sellers searching "Calgary real estate agent" also land here and may feel it's not for them. Consider making the hero more inclusive: "Buy, Sell, or Invest in Calgary Real Estate."

---

## Technical SEO

### robots.txt

**Status: Partially configured — AI crawlers blocked**

The Cloudflare-managed robots.txt explicitly disallows:

```
User-agent: ClaudeBot    → Disallow: /   (Claude.ai web search)
User-agent: GPTBot       → Disallow: /   (ChatGPT search)
User-agent: Google-Extended → Disallow: / (Google Gemini / AI Overviews)
User-agent: Amazonbot    → Disallow: /
User-agent: Bytespider   → Disallow: /
```

**Standard Googlebot is allowed** — so organic search rankings are unaffected. However, the site is invisible to every major AI-powered search product. In 2026, ChatGPT web search, Google AI Overviews, and Perplexity collectively answer millions of real estate queries daily. A Calgary buyer asking "who is a good REMAX agent in Calgary?" will never see livingwithchan.com in an AI-generated answer.

This is managed by Cloudflare's default security policy. To enable AI search visibility, adjust the Cloudflare robots.txt settings in your Cloudflare dashboard or override with a `public/robots.txt` file in the Next.js project.

**Sitemap:** No `app/sitemap.ts` found in the codebase. Next.js does not auto-generate sitemaps — this must be created. Without a sitemap, Google may miss dynamically added pages (new blog posts, new listings) for days or weeks.

### Canonical Tags

Next.js App Router generates self-referencing canonical tags by default — PASS. No duplicate content issues detected.

### Open Graph / Social Sharing

**Status: FAIL — No Open Graph tags implemented on any page.**

When any page from livingwithchan.com is shared on Facebook, LinkedIn, WhatsApp, iMessage, or Twitter/X, the platform has no image, title, or description to display — it shows a blank or generic link preview. For a real estate agent whose clients frequently share listings and pages with family and friends, this is a significant conversion leak.

**Fix:** Add to `app/layout.tsx` metadata:

```typescript
export const metadata: Metadata = {
  // ... existing
  openGraph: {
    type: "website",
    siteName: "Living With Chan",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

Each page should then override `openGraph.title` and `openGraph.description` in its own metadata export. Create a 1200×630px branded OG image (`/public/og-image.jpg`) — Chan's headshot, logo, and tagline on the brand charcoal background.

### Mobile-Friendliness

- Viewport meta tag: Present (`width=device-width, initial-scale=1`) — PASS
- Responsive design: Full Tailwind responsive grid — PASS
- Touch targets: Recently fixed to 44px minimum — PASS
- Mobile CTA: Sticky bottom bar added — PASS

### Page Speed

Vercel CDN with Next.js App Router — expected performance:
- Static pages: Excellent (CDN-cached, SSG)
- Hero video: Now `preload="none"` — good
- Images: Next.js `<Image>` serves WebP/AVIF — good
- Google Analytics: `afterInteractive` strategy — non-blocking — good
- **Risk:** The hero video file itself — if `/hero.mp4` is large (>5MB), users on slow connections see a blank/poster image for several seconds even with `preload="none"`. Consider hosting the video on a CDN or using a highly compressed H.265 encode.

---

## Content Gap Analysis

| Missing Topic | Search Volume | Competition | Content Type | Priority |
|---|---|---|---|---|
| Best neighbourhoods in Calgary | High | Medium | Neighbourhood guide hub page | 1 |
| How to buy a house in Calgary step by step | High | Medium | Comprehensive guide (/buyers/guide) | 1 |
| Calgary real estate market 2026 | High | Medium | Monthly market update landing page | 1 |
| Closing costs in Alberta | Medium | Low | Blog post or FAQ page | 2 |
| Calgary condo vs house pros and cons | Medium | Low | Blog comparison post | 2 |
| How much is a home worth in Calgary? | High | Medium | Blog + CMA request CTA | 2 |
| Calgary property tax explained | Medium | Low | Blog post | 2 |
| SE Calgary homes for sale | Medium | Low | /search/se page (currently missing!) | 2 |
| How long does it take to sell a house Calgary? | Medium | Low | FAQ / blog snippet | 3 |
| CMHC first-time buyer incentive Calgary | Medium | Low | Blog post (if still relevant) | 3 |
| Calgary new condo developments 2026 | Medium | Medium | Blog or listings page | 3 |
| Rocky View County acreages for sale | Medium | Low | Expand /buyers/acreages | 3 |

**Critical gap: No SE Calgary search page.** The site has `/search/ne`, `/search/nw`, `/search/sw` — but no `/search/se`. SE Calgary (McKenzie Towne, Mahogany, Auburn Bay, Copperfield) is one of the city's most active real estate markets.

---

## Featured Snippet Opportunities

The sell page FAQ (`/sell`) is the best immediate opportunity. Each question is answered conversationally — restructure to capture paragraph snippets:

**Current FAQ structure (good):**
> Q: "How do you determine what my home is worth?"
> A: "Chan prepares a Comparative Market Analysis (CMA)..."

**Snippet-optimized structure:**
```html
<h2>How do you determine what my home is worth?</h2>
<p>Chan prepares a Comparative Market Analysis (CMA) using recent sales of 
similar homes in your neighbourhood, current active listings, and market 
trend data to establish a realistic, defensible list price.</p>
```

The answer is already 40–60 words — it just needs the question as an H2 (not inside the accordion label) to be eligible. Note: accordion content may not be indexed reliably by Google if it's hidden behind JavaScript. **The current FaqAccordion hides content until clicked — Google may not index these answers at all.** Recommend creating a static FAQ section below the accordion, or ensuring accordion content is in the DOM (not `display:none` — which the current implementation is, via conditional rendering).

**Other snippet opportunities:**
- "How long does it take to sell a house in Calgary?" — write a 50-word answer and publish as a blog post
- "What are closing costs in Alberta?" — list snippet: itemized list of fees
- "Is it a good time to buy in Calgary?" — paragraph snippet with current market context

---

## Schema Markup

**Current status: Zero structured data implemented.**

This is the single highest-ROI fix available. Schema markup creates rich results in Google — star ratings, FAQ dropdowns, business information panels — that take up significantly more SERP real estate and dramatically increase click-through rates.

| Schema Type | Page | Priority | Expected Impact |
|---|---|---|---|
| `RealEstateAgent` + `LocalBusiness` | Homepage | Critical | Business knowledge panel, map results |
| `Person` | Homepage, About | Critical | Agent knowledge panel |
| `FAQ` | /sell, /buyers/first-time | High | Rich result FAQ dropdown in SERP |
| `Article` | All blog posts | High | Article rich results, author attribution |
| `AggregateRating` | Homepage, About | High | Star rating shown in SERP |
| `WebSite` + `SearchAction` | Homepage | Medium | Sitelinks search box in SERP |
| `BreadcrumbList` | All inner pages | Medium | Breadcrumb trail shown in SERP |

**Recommended `RealEstateAgent` schema for `app/layout.tsx`:**

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["RealEstateAgent", "LocalBusiness"],
      "name": "Chan Kawaguchi — Living With Chan",
      "image": "https://livingwithchan.com/chan-headshot-color.jpg",
      "url": "https://livingwithchan.com",
      "telephone": "+14036810107",
      "email": "hello@livingwithchan.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "#180 234-5149 Country Hills Blvd NW",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "postalCode": "T3A 5K8",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.1784,
        "longitude": -114.1903
      },
      "areaServed": {
        "@type": "City",
        "name": "Calgary"
      },
      "memberOf": {
        "@type": "Organization",
        "name": "REMAX Complete Realty"
      },
      "sameAs": [
        "https://www.facebook.com/livingwithchan",
        "https://www.instagram.com/living.with.chan",
        "https://www.linkedin.com/in/chankawaguchi"
      ]
    })
  }}
/>
```

---

## Internal Linking Opportunities

**Architecture assessment:**

```
Homepage
  |-- /listings (conversion page — buy)
  |-- /sell (conversion page — sell)
  |-- /contact (conversion page)
  |-- /buyers/* (8 segment pages)
  |-- /investors (duplicate of /buyers/investors)
  |-- /blog/* (4 articles — currently isolated)
  |-- /market-reports/* (dynamic reports)
  |-- /search/ne, /nw, /sw (geo pages — thin)
  |-- /mortgage-calculator (tool)
  |-- /buyer-intake (form)
```

**Priority fixes:**

1. **Blog posts must link to service pages.** A reader finishing "Renting vs. Buying in Calgary" is a warm lead — the post should end with a clear CTA linking to `/buyers/first-time` or `/contact`. Currently blog posts appear to be informational dead-ends.

2. **Resolve /investors vs /buyers/investors.** Choose one as the canonical investment page. Redirect the other or clearly differentiate: e.g. `/investors` = "Build a Calgary real estate portfolio" (active investors), `/buyers/investors` = "Buy your first investment property in Calgary" (first-time investors). Distinct enough to avoid cannibalization.

3. **Create /search/se.** SE Calgary is a major market. Once created, link to it from the homepage's search communities section alongside NE/NW/SW.

4. **Market reports → Contact CTA.** Each market report is read by people actively considering buying or selling — add a sidebar or footer CTA: "Ready to act on this market data? Book a free consultation."

5. **/mortgage-calculator → /buyer-intake.** After a user calculates their affordability, the next logical step is submitting a buyer profile. Add a CTA below the calculator results.

---

## Core Web Vitals

**Expected performance profile based on stack:**

| Metric | Expected | Notes |
|---|---|---|
| LCP | Good (under 2.5s) | Vercel CDN + Next.js SSG. Hero video poster served as static image. Risk: hero.mp4 file size |
| INP | Good (under 200ms) | Minimal client-side JS. ScrollReveal uses passive IntersectionObserver |
| CLS | Good (under 0.1) | Next.js `<Image>` reserves dimensions. Floating sidebar animates via transform only |
| TTFB | Good (under 200ms) | Vercel edge network |

**Revenue impact of current performance:**
- Passing Core Web Vitals → 24% fewer page abandonments (Google/Deloitte research)
- At assumed 3,000 monthly sessions, even a 10% improvement in bounce rate = 300 more engaged visitors per month who could become leads

**One performance risk to monitor:** The hero video (`/hero.mp4`). Even with `preload="none"`, autoplay begins immediately on load. If the video is uncompressed or large, it competes with other network requests. Recommend encoding at 1080p H.264, CRF 28, target under 8MB. Test with Chrome DevTools Network throttling on "Slow 4G."

---

## Content Strategy Recommendations

### Publishing Cadence

Currently: 4 blog posts, all dated April 1, 2026.

**Recommended:** 2 posts per month minimum. The existing content is high quality and long-form — maintain that bar rather than publishing volume for its own sake. Two excellent 10-minute reads per month outperform eight shallow 3-minute posts in both rankings and lead quality.

### Content Priority Matrix

| Content Idea | Search Volume | Competition | Business Value | Priority |
|---|---|---|---|---|
| "Best neighbourhoods in Calgary to buy in 2026" | High | Medium | High | 10 |
| "How to buy a house in Calgary — complete guide" | High | Medium | High | 10 |
| SE Calgary homes for sale page | Medium | Low | High | 9 |
| "Closing costs when buying a home in Alberta" | Medium | Low | High | 8 |
| Calgary market update (monthly, templated) | High | Medium | High | 8 |
| "Calgary condo vs house — which is right for you?" | Medium | Low | Medium | 7 |
| "What is a CMA and why do I need one?" | Low | Low | High | 7 |
| "How to choose a real estate agent in Calgary" | Medium | Medium | High | 7 |
| "Calgary property tax: what to expect" | Medium | Low | Medium | 6 |
| "Pre-construction condos in Calgary 2026" | Medium | Medium | Medium | 6 |

### Content Update Strategy

- Market reports: Publish monthly (already doing this via the dynamic report system)
- Blog posts: Refresh annually — add updated statistics, new regulations, current market data
- Add "Last updated: [date]" to all blog posts — Google rewards freshness on real estate content

---

## Prioritized Recommendations

### Critical (Fix Immediately — high impact, low effort)

1. **Add Open Graph metadata to layout.tsx and all pages** — Every social share currently shows a blank preview. This is a conversion leak affecting every piece of content shared by clients. Fix: 2 hours of dev work, design 1 OG image. Estimated impact: 15–25% increase in click-through from social referrals.

2. **Implement LocalBusiness + RealEstateAgent schema on homepage** — Enables Google knowledge panel, map pack listings, and rich results. Fix: Add JSON-LD script block to layout. Time: 1 hour. Estimated impact: Appearance in "Calgary real estate agent" map results and knowledge panel.

3. **Fix title tags on About, Listings, and Contact pages** — Three important pages are invisible in search with one-word titles. Fix: 15 minutes. Estimated impact: Measurable CTR improvement on pages that currently rank but don't convert clicks.

4. **Add a sitemap** — Create `app/sitemap.ts` so Google discovers all pages, including new blog posts and market reports, within hours instead of weeks. Fix: 30 minutes.

### High Priority (This Month)

5. **Add FAQ schema to the sell page** — The /sell page FAQ accordion already has great content. Adding FAQ schema creates an expandable rich result in Google that doubles the SERP footprint for "sell home Calgary" queries. Fix: 1 hour. Note: also move FAQ content out of JS-only accordion so Google indexes it reliably.

6. **Add Article schema + author byline to all blog posts** — Establishes E-E-A-T authorship signals Google needs to trust the content. Fix: Add reusable ArticleSchema component. Time: 2 hours. Estimated impact: Better indexing, potential author knowledge panel.

7. **Fix the robots.txt to allow AI search crawlers** — GPTBot, ClaudeBot, and Google-Extended are all currently blocked, making the site invisible to AI-powered search (ChatGPT web search, Google AI Overviews, Perplexity). This is managed by Cloudflare — add an override `public/robots.txt` that selectively allows these crawlers. Estimated impact: Visibility in AI search answers for Calgary real estate queries, which are growing rapidly.

8. **Add privacy policy and terms of service pages** — Required legally for any site collecting personal information (contact forms, intake forms, GA tracking). Also a direct E-E-A-T trust signal. Fix: 2 hours to draft with legal template, 30 min to publish.

### Medium Priority (This Quarter)

9. **Resolve /investors vs /buyers/investors keyword cannibalization** — Merge or clearly differentiate. Pick a winner and consolidate PageRank.

10. **Create /search/se page** — SE Calgary (Mahogany, McKenzie Towne, Auburn Bay, Copperfield) is a major active market with no dedicated page on the site.

11. **Add CTA links from blog posts to service pages** — Each article is a lead-generation opportunity being wasted as a dead end. Add 1–2 contextual CTAs per post linking to relevant service pages.

12. **Improve About page H1 and title** — Promote "Chan Kawaguchi" from H2 to H1, update title to include "Calgary REMAX Real Estate Agent."

13. **Add RECA license number to footer** — Legal requirement in Alberta and a direct trust signal for both users and Google's quality raters.

14. **Publish "How to buy a house in Calgary — complete guide"** — High-volume, high-intent, aligns perfectly with existing /buyers/* infrastructure. Estimated monthly visitors: 500–1,500 once ranked.

### Low Priority (When Resources Allow)

15. **Improve alt text on hero/about headshots** — Add location and title to "Chan Kawaguchi" alt text.

16. **Rename /search/ne, /nw, /sw to full names** — `/homes-for-sale/ne-calgary` etc. is more keyword-rich and readable.

17. **Add BreadcrumbList schema to all inner pages** — Helps users and search engines understand site hierarchy. Shows breadcrumbs in SERPs.

18. **Add WebSite + SearchAction schema** — Enables sitelinks search box in Google when users search "livingwithchan.com."

19. **Improve meta descriptions on About and Listings to 150–160 chars with a CTA.**

20. **Publish SE Calgary page, NW/NE/SW page content** — Currently these area pages have minimal content. Add community descriptions, school district info, commute details, typical price ranges.
