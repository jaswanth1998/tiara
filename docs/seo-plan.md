# SEO Plan — Tiara Kebabs & More

**Date:** 2026-09-23
**Live site:** https://www.tiararestaurant.ca (GitHub Pages, custom domain; the apex `tiararestaurant.ca` 301-redirects to `www`)
**Repo:** github.com/jaswanth1998/tiara — Vite + React 19 + React Router 7, deployed by GitHub Actions

---

## 1. Audit — where the site stands today

| # | Severity | Finding | Evidence |
|---|----------|---------|----------|
| 1 | **Critical** | Every route except `/` returns **HTTP 404** on the live site. | `curl -I https://www.tiararestaurant.ca/menu` → 404. GitHub Pages serves `404.html` and a JS redirect. Google never indexes a 404 response, so `/menu`, `/about`, `/gallery`, `/contact` are invisible in search. The menu page is the most valuable page on the site. |
| 2 | **High** | Canonical host mismatch. | Live host is `www.`; `<link rel="canonical">`, `og:url`, `sitemap.xml`, `robots.txt` and the JSON-LD all use the apex `https://tiararestaurant.ca`, which redirects. Google is told the canonical is a URL that 301s. |
| 3 | **High** | One static set of meta tags is shared by every page. | Title/description/OG/canonical/JSON-LD live in `index.html`; only `document.title` changes client-side. Facebook, WhatsApp, iMessage and Slack link previews do not run JS, so sharing `/menu` shows the homepage card. |
| 4 | **High** | OG/Twitter image and JSON-LD `image`/`logo` are relative URLs. | Facebook and X require absolute URLs; the preview image fails today. |
| 5 | Medium | Client-only rendering. | Raw HTML is `<div id="root"></div>`. Google renders JS eventually; Bing, DuckDuckGo, AI crawlers and link scrapers are unreliable. Largest Contentful Paint waits on the JS bundle. |
| 6 | Medium | Restaurant JSON-LD is thin and partly wrong. | `geo` is 44.729,-63.667 — about 4 km from the real pin (OpenStreetMap: **44.7128089, -63.7150946**). No `postalCode` (**B4B 1S8**). `sameAs` is empty although Instagram, Facebook, DoorDash, Uber Eats, order.online and Birdeye listings exist. No `hasMenu`/`menu`, `acceptsReservations`, `hasMap`. No `Menu`/`MenuSection`/`MenuItem` markup even though 71 items are in `src/data/menu.ts`. No `BreadcrumbList` or `WebSite`. |
| 7 | Medium | Generic H1s, titles and copy. | H1s are "Our Menu", "Our Story", "Gallery", "Contact Us". Titles are "Menu \| Tiara Kebabs & More". Site copy never says "Halifax", "West Bedford", "Brookline" or "HRM", yet "halifax" is the term people actually search. |
| 8 | Low | `sitemap.xml` has no `lastmod`; no `public/CNAME`. | Custom domain lives only in repo settings. |
| 9 | Low | Core Web Vitals hygiene. | Hero `<video preload="auto">` competes with the LCP image; no `fetchpriority`/preload for the hero image; Lovelace headline font is an un-preloaded OTF; Google Maps iframes are not lazy; the Maps embed uses a hand-typed `pb=` string pointing at the wrong coordinates. |
| 10 | Low | Rating figures disagree. | Hero says 4.8/5, stats say 5★, Google says **4.9 (129 reviews)**. |
| 11 | Info | Contact form is a stub (`setTimeout`). | Not an SEO issue, but a trust issue for visitors. |

---

## 2. Keyword research (Ubersuggest, Canada, Sept 2026)

Verified numbers:

| Keyword | Searches / month | SEO difficulty | Intent |
|---|---|---|---|
| persian restaurant halifax | 170 | 18 (easy) | Commercial |
| kebab halifax | 70 | 26 | Commercial |
| persian food halifax | 30 | 18 | — |
| bedford restaurants | 6,600 (all Canadian Bedfords combined) | 24 | Informational |

Not yet verified (daily quota ran out; re-run or read from Search Console after launch): `persian restaurant bedford ns`, `kebab bedford`, `halal restaurant bedford`, `halal food halifax`, `iranian restaurant halifax`, `kabob halifax`, `koobideh halifax`, `ghormeh sabzi halifax`, `restaurants west bedford`, `brookline drive restaurants`, `lunch special bedford ns`.

**SERP for "persian restaurant halifax":** Tiara is already **#1** (domain authority 3), then TripAdvisor, Shiraz (downtown, 20 years old, DA 11), Kabab Land, Yelp, Daryâ, Tivaasi, and an Andy's East Coast Kitchen Facebook video calling Tiara "one of Halifax's best hidden gems".

**Strategy**

1. Protect #1 for the head term and stop bleeding the four pages that currently 404.
2. Make `/menu` rank for dish-name queries (koobideh, barg, ghormeh sabzi, fesenjan, tahdig, zereshk polo, lamb shank, lunch menu).
3. Pick up the Bedford, halal and kebab modifiers through titles, H1s and natural copy.
4. Win the Google local pack through the Google Business Profile (off-site, section 7).

---

## 3. Keyword → page map, titles, descriptions, H1s

| Route | Primary keyword | Secondary | `<title>` (≤ 60 chars) | Meta description (≤ 155 chars) | H1 / hero copy |
|---|---|---|---|---|---|
| `/` | persian restaurant bedford / halifax | kebab, halal, dine-in takeout delivery | Tiara Kebabs & More \| Persian Restaurant in Bedford, NS | Authentic halal Persian kebabs, saffron rice and slow-cooked stews in West Bedford, Halifax. Dine-in, takeout, delivery and reservations. Open daily 11–9. | Keep brand H1 "Tiara Kebabs & More"; change tagline to "Authentic Persian Cuisine in Bedford, Nova Scotia" |
| `/menu` | persian menu bedford | dish names, family platters, lunch menu | Persian Menu: Kebabs, Stews & Lunch Specials \| Tiara Kebabs | Browse Tiara's full Persian menu in Bedford, NS: kebab koobideh, barg, lamb chops, ghormeh sabzi, fesenjan, tahdig, family platters and lunch specials. | H1 "Our Persian Menu"; subtitle "Kebabs, stews & lunch specials in Bedford, Nova Scotia" |
| `/about` | authentic iranian restaurant halifax | family-run, halal, saffron | Our Story: Authentic Persian Cuisine in Bedford, NS \| Tiara | Meet the family behind Tiara Kebabs & More, a halal Persian restaurant on Brookline Drive in West Bedford serving recipes passed down through generations. | H1 "Our Story"; subtitle "Persian hospitality in West Bedford, Halifax" |
| `/gallery` | persian restaurant bedford photos | interior, dishes | Photos: Persian Dishes & Dining Room \| Tiara Kebabs, Bedford | See Tiara Kebabs & More in Bedford, NS: grilled kebabs, saffron rice, Persian stews and our dining room, in photos and video. | H1 "Gallery"; subtitle "Inside Tiara Kebabs & More, Bedford" |
| `/contact` | tiara kebabs bedford hours / reservations | address, phone, directions | Contact, Hours & Reservations \| Tiara Kebabs, Bedford NS | 640 Brookline Drive, Unit 103, Bedford NS. Open daily 11 AM–9 PM. Call 902-835-0811 to reserve, or order online for takeout and delivery. | H1 "Contact & Reservations" |
| 404 | — | — | Page Not Found \| Tiara Kebabs & More | (noindex) | — |

Rules: one H1 per page, keyword in the first 100 words of body copy, no hidden text, no keyword stuffing. Keep the visual design; the changes are copy and attributes, not layout.

---

## 4. Structured data spec

**Site-wide (every page) — `Restaurant`**
- `@id`: `https://www.tiararestaurant.ca/#restaurant`
- `name`, `url`, `logo` (absolute), `image` (absolute array: OG image + 2–3 dish photos)
- `telephone`: `+1-902-835-0811`
- `address`: 640 Brookline Drive, Unit 103 / Bedford / NS / **B4B 1S8** / CA
- `geo`: **44.7128089, -63.7150946**
- `hasMap`: Google Maps search URL for the address
- `openingHoursSpecification`: Mon–Sun 11:00–21:00
- `servesCuisine`: Persian, Iranian, Middle Eastern, Halal
- `priceRange`: `$$`
- `acceptsReservations`: `true`
- `menu`: `https://www.tiararestaurant.ca/menu`, `hasMenu` → the Menu `@id`
- `sameAs`: Instagram, Facebook, DoorDash, Uber Eats, order.online, Birdeye
- **Do not** add `aggregateRating`. Google ignores self-serving ratings on LocalBusiness markup and can treat them as spam.

**`/menu` — `Menu`**
- `@id`: `https://www.tiararestaurant.ca/menu#menu`
- `hasMenuSection[]` built from `menuCategories` → `MenuSection { name, description (subtitle), hasMenuItem[] }`
- `MenuItem { name, description, image (absolute `-lg.webp`), offers: Offer { price, priceCurrency: CAD } }`; use `priceAlt` as a second Offer where present; `suitableForDiet: VeganDiet` for `vegan` tags.

**`/` — `WebSite`** with `name`, `url`, `publisher` → Restaurant `@id`.

**Sub-pages — `BreadcrumbList`** (Home › Page).

Validate after deploy with Google's Rich Results Test and validator.schema.org.

---

## 5. Technical implementation (phased; this is the build spec)

### Phase 0 — Constants
- `src/lib/constants.ts`: `SITE_URL = 'https://www.tiararestaurant.ca'`, `SITE_NAME`, `DEFAULT_OG_IMAGE` (absolute), `GEO`, `POSTAL_CODE`, external listing URLs (DoorDash, Uber Eats, Birdeye).
- Add `postalCode`, `geo`, `googleRating: { value, count, asOf }` to the `Restaurant` type/data so every rating figure on the site comes from one place.

### Phase 1 — Host and static files
- `public/robots.txt` and `public/sitemap.xml` → `www` URLs; add `<lastmod>` (ISO date).
- Add `public/CNAME` containing `www.tiararestaurant.ca`.
- Generate `sitemap.xml` from the route list in the prerender script so it cannot drift.

### Phase 2 — Per-route metadata layer (no new dependencies)
- `src/data/seo.ts`: typed `RouteSeo` map keyed by path (`title`, `description`, `ogImage`, `ogType`, `noindex`, `preloadImage`, `jsonLd` builder).
- `src/lib/structuredData.ts`: `buildRestaurantSchema()`, `buildMenuSchema()`, `buildWebSiteSchema()`, `buildBreadcrumbSchema(path)`.
- `src/lib/seo.ts`:
  - `buildHeadHtml(path): string` — pure; returns `<title>`, description, canonical, OG, Twitter, robots, preload link and JSON-LD scripts. Used by the prerender script.
  - `applySeo(path)` — client DOM updater for SPA navigation (sets `document.title`, updates/creates each tag by a stable `data-seo` attribute, swaps JSON-LD scripts). Idempotent, so on first load after prerender it changes nothing.
- `src/hooks/useSeo.ts` → `useSeo(path)` calls `applySeo` in an effect. Replace every `useDocumentTitle` call; delete the old hook.
- `index.html`: keep charset, viewport, theme-color, favicons and the SPA `?/` decode script. Wrap the homepage defaults in `<!--seo:start-->` … `<!--seo:end-->` markers so dev mode still has sane tags and the prerender script can replace the block per route.

### Phase 3 — Prerender every route at build time (fixes findings 1, 3, 5)
- Refactor `App` so the router is supplied from outside: `src/main.tsx` (client) wraps `BrowserRouter` and uses `hydrateRoot` when `#root` already has children, otherwise `createRoot` (dev). `src/entry-server.tsx` wraps `StaticRouter` and exports `render(url): Promise<string>` using `prerender` from `react-dom/static` (waits for `lazy()` routes inside `Suspense`).
- `scripts/prerender.mjs`, run after `vite build`:
  1. Build the SSR bundle with Vite's JS API (`build({ build: { ssr: 'src/entry-server.tsx', outDir: '.prerender' } })`).
  2. Read `dist/index.html` as the template.
  3. For each route in `src/data/seo.ts`: render body, replace the `<!--seo:start-->…<!--seo:end-->` block with `buildHeadHtml(path)`, replace `<div id="root"></div>` with the rendered markup, write:
     - `/` → `dist/index.html`
     - `/menu` → `dist/menu.html` (GitHub Pages serves `menu.html` at `/menu` with a 200 and no redirect, keeping clean canonical URLs)
     - likewise `about.html`, `gallery.html`, `contact.html`
     - `dist/404.html` → prerendered `NotFoundPage`, `<meta name="robots" content="noindex">`, plus a tiny script: if the path minus a trailing slash is a known route, `location.replace` to it; otherwise stay on the 404 page. Delete `public/404.html` (it is generated now).
  4. Write `dist/sitemap.xml` from the same route list.
  5. Delete `.prerender`.
- `package.json`: `"build": "tsc -b && vite build && node scripts/prerender.mjs"`.
- SSR safety: all `window`/`document` access is already inside effects or handlers (audited). Keep it that way; guard any new access with `typeof window !== 'undefined'`.
- **Acceptance:** `pnpm build` passes; `dist/menu.html` contains the menu items' text and a unique `<title>`; every generated HTML file has exactly one canonical and one Restaurant JSON-LD; `pnpm preview` serves `/menu` with a 200 and the page hydrates with **no hydration-mismatch warnings** in the console.

### Phase 4 — On-page changes
- Titles/descriptions/H1s/subtitles per the table in section 3.
- Add locality copy naturally: About page and Home "Our Story" section mention **West Bedford**, **Brookline Drive** and **Halifax Regional Municipality** once each.
- Footer: wrap the address in `<address>`; ensure phone renders as text next to the `tel:` link.
- Menu images: `alt` = `"<Item name> at Tiara Kebabs & More"` (from data, not hard-coded).
- Internal links with descriptive anchors: Home → Menu ("See the full Persian menu"), Menu → Contact ("Reserve a table"), About → Gallery.
- Rating: show `googleRating` from data everywhere ("4.9 ★ on Google, 129 reviews"), no other figures.
- Replace both Google Maps embeds with `https://www.google.com/maps?q=640+Brookline+Drive+Unit+103+Bedford+NS+B4B+1S8&output=embed`, `loading="lazy"`, a descriptive `title`.

### Phase 5 — Core Web Vitals
- Per-route `<link rel="preload" as="image" fetchpriority="high">` for the hero image (via `preloadImage` in `seo.ts`); `fetchPriority="high"` on the hero `<img>`.
- `VideoBackground`: `preload="metadata"`; poster is shown first.
- Preload the Lovelace Regular OTF used by every H1 (`<link rel="preload" as="font" type="font/otf" crossorigin>`).
- `loading="lazy"` on Maps iframes; keep `decoding="async"` on non-hero images.
- Optional: convert the two Lovelace OTFs to WOFF2 (roughly 40% smaller).

### Phase 6 — Measurement
- Verify the site in Google Search Console and Bing Webmaster Tools; submit `https://www.tiararestaurant.ca/sitemap.xml`.
- Add privacy-friendly analytics (Plausible or Umami) with events on "Order Online", `tel:` clicks and "Reserve".
- Track weekly: `persian restaurant halifax`, `kebab halifax`, `persian restaurant bedford`, `tiara kebabs` (brand), plus clicks/impressions for `/menu`.

---

## 6. Content roadmap (after the technical work)

1. **Dish explainers** on the menu page or as short sections: what koobideh, barg, ghormeh sabzi, fesenjan and tahdig are. These catch long-tail informational searches and help the menu page rank for dish names.
2. **FAQ block on Contact**: parking, halal certification, group reservations, delivery radius, vegetarian options, catering.
3. **Lunch specials** section with its own anchor and copy targeting "lunch Bedford NS".
4. Later, if traffic justifies it: `/dishes/<slug>` pages and a Persian-cuisine blog.

---

## 7. Off-site checklist (for the owner; not code)

- **Google Business Profile**: claim/verify; primary category "Persian restaurant", secondary "Middle Eastern restaurant", "Halal restaurant", "Kebab shop"; website `https://www.tiararestaurant.ca`; menu link `/menu`; hours; attributes (dine-in, takeout, delivery, reservations, halal); 20+ photos; weekly posts; answer Q&A; reply to every review (the `review-reply-writer` skill drafts these).
- **NAP consistency** everywhere: "640 Brookline Drive, Unit 103, Bedford, NS B4B 1S8" and "902-835-0811" on Google, Facebook, Instagram bio, DoorDash, Uber Eats, Yelp, TripAdvisor, Birdeye, Apple Maps.
- Claim listings on **Yelp**, **TripAdvisor**, **Apple Business Connect**, **Bing Places**.
- Local links: Discover Halifax, Halifax Chamber of Commerce / Bedford business listings, HalifaxReTales, Andy's East Coast Kitchen (already posted about Tiara; ask for the website link).
- Link the `www` URL from the Instagram and Facebook bios.
- Keep collecting Google reviews; the count and recency drive local-pack ranking more than anything on the site.

---

## 8. Verification after deploy

```
curl -I https://www.tiararestaurant.ca/menu        # expect 200
curl -s https://www.tiararestaurant.ca/menu | grep -o '<title>[^<]*'
curl -s https://www.tiararestaurant.ca/sitemap.xml
```
Then: Rich Results Test on `/` and `/menu`, Facebook Sharing Debugger on `/menu`, PageSpeed Insights (mobile) on `/` and `/menu`, and "Request indexing" in Search Console for all five URLs.
