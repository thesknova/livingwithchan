# Living With Chan — Design System

## Color Tokens

Defined in `app/globals.css` under `@theme inline`. Use these everywhere — do not reach for Tailwind's `gray-*` or `stone-*` scales.

| Token | Value | Usage |
|---|---|---|
| `--color-primary` / `text-primary` / `bg-primary` | `#3A3937` | Headings, navbar, primary buttons, dark sections |
| `--color-primary-dark` / `bg-primary-dark` | `#111111` | Footer, CTA banners, deepest dark backgrounds |
| `--color-accent` / `text-accent` / `bg-accent` | `#A3856F` | Buttons, active nav states, highlights, stat values |
| `--color-accent-dark` / `bg-accent-dark` | `#8A6E5C` | Hover state on accent buttons |
| `--color-neutral-light` / `bg-neutral-light` | `#F7F7F7` | Page backgrounds, section alternates, chip backgrounds |
| `--color-neutral-mid` / `border-neutral-mid` | `#E3E0D8` | Card borders, dividers, input borders |
| `--color-text-dark` / `text-text-dark` | `#424242` | Body copy, default text |
| `--color-text-muted` / `text-text-muted` | `#6B7280` | Secondary labels, captions, metadata |

### Token substitution guide

When you reach for a Tailwind gray/stone class, use the token instead:

| Instead of… | Use |
|---|---|
| `text-gray-900`, `text-gray-800` | `text-primary` |
| `text-gray-700`, `text-gray-600` | `text-text-dark` |
| `text-gray-500`, `text-gray-400` | `text-text-muted` |
| `text-stone-400`, `text-stone-500` | `text-text-muted` |
| `text-stone-600`, `text-stone-800` | `text-text-dark` |
| `bg-gray-50`, `bg-gray-100` | `bg-neutral-light` |
| `border-gray-200`, `border-gray-300` | `border-neutral-mid` |

### On dark backgrounds (`bg-primary`, `bg-primary-dark`)

- Primary text: `text-white`
- Secondary text: `text-white/70` or `text-stone-300`
- Muted text: `text-white/50` or `text-stone-400`
- Borders: `border-white/10` or `border-stone-800`
- Accent: `text-accent` (unchanged — warm bronze reads well on dark)

---

## Typography

**Font:** Inter (Google Fonts, loaded via `next/font/google` with `display: swap`)
**Variable:** `--font-inter` → `--font-sans`

### Scale

| Use | Classes | Notes |
|---|---|---|
| Hero heading | `text-4xl sm:text-5xl lg:text-6xl font-bold` | Max `max-w-3xl` |
| Page H1 | `text-4xl font-bold` | |
| Section H2 | `text-3xl font-bold` or `text-2xl font-bold` | |
| Card H3 | `text-base font-semibold` or `text-sm font-semibold` | |
| Body | `text-base` or `text-sm leading-relaxed` | Cap at `max-w-prose` or `max-w-xl` |
| Caption / label | `text-xs font-semibold uppercase tracking-widest` | Used for eyebrow labels above headings |
| Metadata | `text-xs text-text-muted` | Community, date, secondary info |

**Line length:** Body copy capped at 65–75ch. Use `max-w-xl`, `max-w-2xl`, or `max-w-prose`.

---

## Spacing

| Purpose | Value |
|---|---|
| Section vertical padding | `py-16` (compact) or `py-20` (standard) |
| Section horizontal padding | `px-6` |
| Max content width | `max-w-6xl mx-auto` |
| Card internal padding | `p-5` (small), `p-6` (standard), `p-8 sm:p-10` (form containers) |
| Grid gap | `gap-6` (standard), `gap-4` (tight), `gap-10` (loose) |
| Form field gap | `gap-5` |
| Stack gap | `space-y-5` (form fields), `space-y-3` (tight list) |

---

## Components

### Buttons (`components/ui/Button.tsx`)

Three variants, all `rounded-full font-semibold tracking-wide`:

| Variant | Classes | Use |
|---|---|---|
| `primary` (default) | `bg-accent text-white hover:bg-accent-dark` | Primary CTAs |
| `outline` | `border-2 border-accent text-accent hover:bg-accent hover:text-white` | Secondary CTAs |
| `ghost` | `text-primary hover:bg-neutral-light` | Tertiary / nav-adjacent |

Sizes: `sm` (px-4 py-2), `md` (px-6 py-3), `lg` (px-8 py-4).

All variants have `focus:ring-2 focus:ring-accent focus:ring-offset-2`.

### Cards

- Standard card: `bg-white rounded-xl border border-neutral-mid shadow-sm`
- Hover card: add `hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`
- Large form container: `bg-white rounded-2xl shadow-sm border border-neutral-mid p-8 sm:p-10`
- No nested cards. No `backdrop-blur` as a default card treatment.

### Badges / Pills

- Status badge: `bg-white text-primary text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm`
- Eyebrow label: `text-xs font-semibold uppercase tracking-widest text-accent`
- Section label in footer: `text-sm font-semibold uppercase tracking-widest text-stone-500`

### Forms

- Input: `rounded-lg border border-neutral-mid px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`
- Label: `block text-sm font-medium text-text-dark mb-1.5`
- Required marker: `<span className="text-red-500">*</span>`
- Toggle chips (SellerIntakeForm): `px-3 py-2.5 min-h-[44px] rounded-full text-sm font-medium border` — minimum 44px touch target

### Accordion (FaqAccordion)

Uses `aria-expanded`, `aria-controls`, and `role="region"`. See component for full ARIA pattern.

---

## Motion

Scroll reveal system in `components/ScrollReveal.tsx` + `app/globals.css`.

- Classes: `reveal`, `reveal-left`, `reveal-right`, `reveal-pop`, `reveal-stagger`
- JS adds `.is-visible` on IntersectionObserver trigger
- `prefers-reduced-motion` disables all animations (CSS rule in globals.css)
- Transition properties: `opacity` and `transform` only — never layout properties

---

## Layout Patterns

- Full-bleed section with constrained content: `<section class="bg-*"><div class="max-w-6xl mx-auto px-6 py-20">…</div></section>`
- Two-column split (text + image): `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`
- Three-column footer: `grid grid-cols-1 md:grid-cols-3 gap-10`
- Four-column card grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`

---

## Anti-Patterns (banned)

- `border-left` / `border-right` > 1px as colored card accent (side-stripe)
- `background-clip: text` with gradient (gradient text)
- `backdrop-blur` as default card treatment (glassmorphism)
- Three identical big-number / small-label stat cards (hero-metric template)
- `#000`, `#fff` (use tinted values — `#111111` dark, `#F7F7F7` light)
- Gradient text (`background-clip: text`)
