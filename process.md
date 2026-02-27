# AI Marketing Academy — Build Process

A complete record of the prompt engineering process used to build this website from scratch using Claude Code. The result is a production-grade, animation-rich Next.js newsletter website with a premium B&W aesthetic.

---

## Phase 1: Foundation & Design Direction

### Initial Prompt (Given to Claude Code)
The starting prompt established the core vision:
- **Project**: AI Marketing Newsletter website
- **Stack**: Next.js + Tailwind CSS v4
- **Design style**: Clean black/white modern aesthetic inspired by marketer.com — white background, near-black text, lots of whitespace, pill buttons, no textures/gradients/orbs. Swiss-design influenced minimalism.
- **Fonts**: Plus Jakarta Sans (headings/UI) + Outfit (body text) via `next/font/google`
- **Pages**: Home, About, Blog (listing + detail), Contact
- **Key requirement**: "Each page should look insanely beautiful and unique"
- **Blog data**: Hardcoded mock data in TypeScript (easy to swap for real CMS later)
- **Nav order**: Home, About, Blog, Contact
- **Blog page**: No category filters — search bar with live dropdown results instead
- **Contact form**: Non-functional (shows success state on submit)
- **Subscribe forms**: Non-functional (show confirmation message on submit)

### What Claude Built in Phase 1
1. **Project setup**: Next.js 16 + TypeScript + Tailwind CSS v4, App Router, `src/` directory
2. **Design system**: Full B&W token system in `globals.css` using `@theme inline` (Tailwind v4 pattern)
3. **Shared components**: Navbar (glass blur on scroll, mobile hamburger), Footer (3-col with subscribe), Reveal (IntersectionObserver scroll animations), Section (max-width wrapper), WordCycle (vertical slide animation), SubscribeForm, PostCard, ReadingProgress, Faq accordion
4. **Home page**: Hero with word-cycling animation, stats strip (inverted), featured posts editorial grid, value props (numbered), newsletter preview card, testimonial marquee, FAQ accordion, final CTA
5. **Blog listing**: Header, search bar with live dropdown filtering, featured post card, 3-column grid
6. **Blog post detail**: Reading progress bar, centered header, cover image (2:1), prose-styled article body with drop caps, share links, author box, related posts
7. **About page**: Manifesto hero with background image + white overlay, origin story (2-col with stats card), numbered values, creator spotlight with real portrait
8. **Contact page**: Split layout — "Let's Talk" heading + info on left, underline-style form on right
9. **Images**: 8 Unsplash photos downloaded locally — 6 blog covers + about hero + creator portrait
10. **Mock data**: 6 realistic blog posts with full HTML content, 3 authors

### Key Discoveries During Phase 1
- Tailwind CSS v4 uses `@theme inline` in globals.css for token definitions (not tailwind.config.js)
- Next.js 16 uses `params: Promise<{ slug: string }>` pattern (must await params)
- The `Reveal` component must use a plain `<div>` with `useRef<HTMLDivElement>` — polymorphic `as` prop causes TypeScript errors
- SVG icons in Tailwind v4 need explicit `width`/`height` attributes + inline `style`

---

## Phase 2: Animation & Polish Enhancement

### Prompt
"Think how can we enhance the website even more, maybe libraries we can use, pages that might add more to it. It needs to look even more special."

### Libraries Added
| Library | Purpose |
|---------|---------|
| **Framer Motion** | Page transitions, scroll animations, staggered reveals, gesture effects |
| **Lenis** | Smooth/buttery scrolling — the single biggest "premium feel" upgrade |
| **Sonner** | Beautiful toast notifications for form submissions, copy-to-clipboard |

### New Components Created
- **Counter**: Animated number counting using Framer Motion's `animate()` — stats count up from 0 when scrolled into view
- **TextReveal**: Word-by-word text animation with blur-to-clear effect on hero headings
- **Parallax**: Scroll-linked parallax effect using `useScroll` + `useTransform`
- **Noise**: SVG grain texture overlay for tactile depth on dark sections
- **Magnetic**: Cursor-following hover effect on buttons using mouse position tracking
- **StaggerContainer/StaggerItem**: Wrapper components for staggered child animations
- **SmoothScroll**: Lenis smooth scroll provider wrapping the entire app
- **TableOfContents**: Sticky sidebar TOC for blog posts, auto-extracts headings, highlights current section on scroll

### New Pages
- **/resources**: AI Marketing Tools Directory with animated category filter tabs (layoutId pill animation), 16 curated tools with hover effects
- **Custom 404 page**: Animated "404" typography with line-through animation, witty copy, magnetic buttons

### Upgrades to Existing Components
- **Reveal**: Rewritten from manual IntersectionObserver to Framer Motion `whileInView` with 6 variants (fade-up, fade-in, fade-left, fade-right, scale, blur)
- **Navbar**: Animated active underline using Framer Motion `layoutId`, mobile menu with AnimatePresence + staggered links
- **PostCard**: Ken Burns zoom hover on images, gradient overlay, converted to client component
- **SubscribeForm**: AnimatePresence for success/form state transition, Sonner toast on submit
- **ContactForm**: Same AnimatePresence pattern + toast
- **ShareLinks**: Toast notification on "Copy link"
- **All pages**: Enhanced with TextReveal, StaggerContainer, Counter, Noise textures

### CSS Additions
- Removed old `.reveal` CSS classes (replaced by Framer Motion)
- Added `.skeleton` loader animation
- Cleaned up and organized globals.css

### Key Technical Notes
- Framer Motion `ease` arrays need explicit tuple typing: `[0.16, 1, 0.3, 1] as [number, number, number, number]`
- Framer Motion variants need `Variants` type import, not `{ hidden: object; visible: object }`
- Nav order updated to: Home, About, Blog, Resources, Contact

---

## Phase 3: Premium Enhancements (Inspired by Real-World Research)

### Research Process
Used a Grok conversation that analyzed top-performing websites across three categories:

1. **AI Marketing Academy sites**: SmarterX, Marketing AI Institute, HubSpot Academy, Ahrefs
2. **Modern minimalist sites**: Stripe, Linear, Vercel, Away, TOTEME, Salt & Stone
3. **Community sites**: Circle, Mighty Networks, Skool, Heartbeat, Bettermode, Disco

Then directly fetched and analyzed Stripe.com, Linear.app, and Circle.so to extract specific design patterns.

### Key Patterns Extracted

**From Stripe:**
- Bento grid layout (mixed card sizes creating visual rhythm)
- Subtle radial/mesh gradient backgrounds (not flat white)
- Stats with massive numbers + context labels
- Testimonial cards with avatar + quote + name + role + company

**From Linear:**
- Numbered figure labels ("FIG 0.1", "FIG 0.2") for sections — distinctive editorial feel
- Expandable accordion feature sections
- Customer quotes with company logos
- Extremely crisp typography hierarchy

**From Circle:**
- Overlapping avatar stack for social proof
- Feature tabs with horizontal tab bar showing different content on click
- Star ratings on testimonials
- G2 trust badges section
- Video testimonials with play button overlays

### What Was Built

**5 new components:**
- **AvatarStack**: Overlapping circular photos with spring-animated entrance, `inverted` prop for dark backgrounds
- **FeatureTabs**: Animated pill tab bar (Deep Dives, Tool Reviews, Quick Wins, Data Points) with preview cards, uses `layoutId` for smooth pill transitions
- **TestimonialGrid**: 6 card-based testimonials with star ratings, result metrics ("+ 35% ROAS"), avatar + role — replaced the scrolling marquee
- **RoiCalculator**: Full interactive tool with 3 range sliders (team size, hours/week, hourly rate), animated results panel with Counter components, AnimatePresence between input/results states
- **Newsletter Archive data**: 12 realistic past issues with subject lines, previews, highlight tags

**1 new page:**
- **/archive**: Feed-style newsletter archive with issue number, date, subject, preview, highlight badges

**Home page major rewrite:**
- Subtle radial gradient hero background (`.hero-gradient` CSS class with layered radial-gradients)
- Editorial numbered sections ("01 /", "02 /", "03 /" etc.)
- Bento grid "What You Get" with mixed `md:col-span-2` and `md:col-span-1` cards + hover-activated icon color change
- Feature tabs section
- ROI Calculator in split layout
- Card-based testimonial grid
- Avatar stack social proof near subscribe CTAs

**CSS additions:**
- `.hero-gradient`: Multi-layer radial gradient for depth
- `.slider-input`: Custom range slider styling (thumb, track, hover/active states)

---

## Phase 4: Logo & Branding

### Logo Prompt Engineering Process
Multiple iterations to get the right logo prompt:

1. **First attempt**: "Flat minimal logo icon, letters 'AI' inside a black rounded square" — too generic lettermark
2. **Second attempt**: "Lowercase 'a' merged with upward arrow in one continuous stroke" — came out too scripty/hand-drawn
3. **Third attempt**: Simple contained mark — user said "too simple, be more creative"
4. **Fourth attempt**: "Bold abstract geometric speech bubble with spark" — still too literal
5. **Fifth attempt**: "Three interlocking ribbon bands in triangular formation (Borromean ring)" — user said "great direction, go further!"
6. **Final batch of 5 options:**
   - Penrose impossible triangle with engraving-style parallel lines
   - Circle filled with maze/circuit-board pattern
   - Topographic contour lines in organic shape
   - Shattered hexagon fragments
   - Woven fabric grid diamond
   - Orbital calligraphic rings
   - Eroded monolith with carved channels
   - Nested impossible cubes

**Key lesson**: Start specific and structured, then push toward complexity when the user wants more creativity. Don't be afraid of intricate geometric constructions.

### Logo Integration
- User provided `icon.png` (the scripty "a" with arrow — they liked it despite the earlier feedback)
- Placed at `public/images/logo.png` for navbar/footer
- Placed at `src/app/icon.png` for Next.js auto-favicon
- Had to delete the default `favicon.ico` from Create Next App which was overriding the custom icon
- Updated Navbar and Footer from inline "AI" badge to `<Image>` component with the logo

---

## Phase 5: Bug Fixes & Polish

### Issues Found and Fixed
1. **Avatar stack text invisible on dark backgrounds**: The "12,000+" count text used `text-text-primary` (dark) on the inverted CTA section. Added `inverted` prop to AvatarStack that switches to `text-text-inverse`.
2. **Mobile navbar transparency**: Menu had no background — page content bled through behind links. Fixed by applying `bg-bg-primary/95 backdrop-blur-xl` when `mobileOpen` is true, plus a `border-t` separator.
3. **Favicon not updating**: Default `favicon.ico` from Create Next App took priority over custom `icon.png`. Fixed by deleting `favicon.ico`.

---

## Final Architecture

```
ai-marketing-academy/
├── public/images/
│   ├── logo.png                  (brand logo)
│   ├── avatar-1..5.jpg           (social proof face photos)
│   ├── post-*.jpg                (6 blog cover images)
│   ├── about-hero.jpg            (about page background)
│   └── creator-portrait.jpg      (Elena Vasquez portrait)
├── src/
│   ├── lib/utils.ts              (cn() helper, formatDate())
│   ├── data/
│   │   ├── posts.ts              (6 posts, 3 authors, helper functions)
│   │   ├── tools.ts              (16 AI tools, categories)
│   │   └── archive.ts            (12 past newsletter issues)
│   ├── components/
│   │   ├── navbar.tsx            (sticky nav, glass blur, mobile menu, logo)
│   │   ├── footer.tsx            (3-col grid, subscribe, logo)
│   │   ├── reveal.tsx            (Framer Motion whileInView, 6 variants)
│   │   ├── section.tsx           (max-width container)
│   │   ├── word-cycle.tsx        (vertical word cycling)
│   │   ├── subscribe-form.tsx    (AnimatePresence + Sonner toast)
│   │   ├── post-card.tsx         (Ken Burns hover, gradient overlay)
│   │   ├── reading-progress.tsx  (scroll progress bar)
│   │   ├── faq.tsx               (accordion)
│   │   ├── smooth-scroll.tsx     (Lenis provider)
│   │   ├── counter.tsx           (animated number counting)
│   │   ├── text-reveal.tsx       (word-by-word animation)
│   │   ├── parallax.tsx          (scroll-linked parallax)
│   │   ├── noise.tsx             (SVG grain texture)
│   │   ├── magnetic.tsx          (cursor-following hover)
│   │   ├── stagger-children.tsx  (staggered animations)
│   │   ├── avatar-stack.tsx      (overlapping face photos)
│   │   ├── feature-tabs.tsx      (animated tab bar + content)
│   │   ├── testimonial-grid.tsx  (card-based testimonials)
│   │   ├── roi-calculator.tsx    (interactive sliders + results)
│   │   └── table-of-contents.tsx (sticky sidebar TOC)
│   └── app/
│       ├── layout.tsx            (fonts, SmoothScroll, Navbar, Footer, Toaster)
│       ├── globals.css           (tokens, prose, animations, gradients, sliders)
│       ├── icon.png              (favicon)
│       ├── page.tsx              (Home — 8 sections)
│       ├── marquee.tsx           (testimonial scroll — legacy, replaced by grid)
│       ├── not-found.tsx         (custom 404)
│       ├── about/page.tsx
│       ├── blog/
│       │   ├── page.tsx          (listing + search)
│       │   ├── blog-search.tsx
│       │   └── [slug]/
│       │       ├── page.tsx      (detail + TOC)
│       │       └── share-links.tsx
│       ├── contact/
│       │   ├── page.tsx
│       │   └── contact-form.tsx
│       ├── resources/
│       │   ├── page.tsx          (tools directory)
│       │   └── resources-grid.tsx
│       └── archive/
│           └── page.tsx          (past issues feed)
```

---

## Git History

| Commit | Description |
|--------|-------------|
| `7540d14` | Initial Create Next App |
| `beddfbf` | Complete website — all pages, components, images, mock data |
| `8413785` | Animation enhancement pass — Framer Motion, Lenis, Sonner, 8 new components, Resources page, 404 page |
| `e4688cd` | Premium enhancements — bento grid, feature tabs, ROI calculator, testimonial grid, archive page, gradient hero |
| `0b99ae1` | Custom logo in navbar, footer, favicon |
| `f4cead0` | Real face photos in avatar stack |
| `a6a01bd` | Fix avatar text visibility on dark backgrounds |
| `9120f71` | Fix favicon (remove default favicon.ico) |
| `20254cd` | Fix mobile navbar solid background |

---

## Key Prompt Engineering Takeaways

1. **Start with a very specific design brief**: The initial prompt defined the aesthetic (B&W Swiss minimalism), tech stack, page structure, and specific UI decisions (search instead of filters, pill buttons, etc.). This prevented generic output.

2. **Iterate in themed phases**: Rather than asking for everything at once, each phase had a clear theme — foundation, animation, premium patterns, branding. This kept quality high and allowed course correction.

3. **Reference real websites by name**: Saying "inspired by marketer.com" or "Stripe-style bento grid" gives much more specific direction than abstract descriptions.

4. **Research → Extract Patterns → Implement**: The Grok research conversation analyzed 15+ real websites, extracted specific design patterns (bento grids, avatar stacks, feature tabs, numbered sections), and then those were implemented one-by-one.

5. **Let the user veto and redirect**: The user removed the "Trusted By" logo cloud, said no to dark mode, no to custom cursor — these vetoes shaped a more focused result.

6. **Fix bugs immediately with screenshots**: The user provided screenshots of issues (mobile nav transparency, invisible text, wrong favicon) which made fixes surgical and fast.

7. **Commit often, push when asked**: Small commits with descriptive messages made it easy to track what changed and roll back if needed.

8. **Libraries matter**: Adding just 3 libraries (Framer Motion, Lenis, Sonner) transformed the site from "good" to "premium" — the biggest ROI came from Lenis (smooth scroll feel) and Framer Motion (animation quality).
