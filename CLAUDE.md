# Tiara Kebabs & More — Website

## Project Overview
Premium restaurant website for Tiara Kebabs & More, an authentic Persian/Iranian restaurant in Bedford, Nova Scotia.

## Tech Stack
- **Framework:** Vite + React + TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + shadcn/ui (Radix primitives)
- **Router:** React Router DOM v7
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge, class-variance-authority
- **Package Manager:** pnpm
- **Deploy:** GitHub Pages via GitHub Actions

## Commands
- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm preview` — Preview production build
- `pnpm lint` — Run ESLint

## Project Structure
```
src/
├── app/          — App root, router, providers
├── components/
│   ├── ui/       — shadcn/ui primitives (auto-generated)
│   ├── layout/   — Header, Footer, MobileNav, Layout
│   ├── sections/ — Page-level section components
│   └── common/   — Shared presentational components
├── pages/        — Route-level page components
├── data/         — Menu, restaurant info, gallery metadata
├── hooks/        — Custom React hooks
├── lib/          — Utilities (cn helper, constants)
├── styles/       — Global CSS with Tailwind directives + custom tokens
└── types/        — Shared TypeScript types
```

## Coding Conventions
- Named exports only — no `export default`
- All components accept optional `className` prop
- Use `cn()` from `src/lib/utils.ts` for conditional class merging
- PascalCase for components, camelCase for hooks/data files
- No `any` type — use `unknown` + type narrowing
- No barrel exports (import directly from component files)
- Destructure props in function signatures

## Brand & Design
- **Primary color:** Dark navy blue `#0F1B3D`
- **Accent color:** Gold `#C5A55A`
- **Warm neutrals:** Beige `#FDF8F0`, Brown `#A08B6A`
- **Fonts:** Playfair Display (headings), Inter (body/UI), Cormorant Garamond (accent italic)
- **Design language:** Persian geometric patterns, gold-on-navy, luxury feel

## Business Info
- **Name:** Tiara Kebabs & More
- **Address:** 640 Brookline Drive, Unit 103, Bedford, Nova Scotia
- **Phone:** 902-835-0811
- **Hours:** Monday–Sunday, 11:00 AM – 9:00 PM
- **Services:** Dine-in, Takeout, Delivery, Reservations

## Assets
- Raw assets live in `assests/` (misspelled, don't rename) — gitignored except logos + menu screenshots
- Optimized web-ready images go in `public/images/`
- Compressed videos go in `public/videos/`
- Original Uber Eats photos (17) are the hero food photography
- 9 menu screenshot PNGs contain all menu data

## Routes
- `/` — Homepage
- `/menu` — Full menu with category tabs
- `/about` — Brand story + interior showcase
- `/gallery` — Photo grid + lightbox + video
- `/contact` — Contact info, map, form

## Accessibility
- WCAG AA color contrast (gold on navy ~4.8:1)
- Semantic HTML (`nav`, `main`, `section`, `header`, `footer`)
- Skip-to-content link
- All images have descriptive `alt` text
- `prefers-reduced-motion` respected on all animations
- Keyboard navigable throughout
