---
name: brand-guidelines
description: Applies Tiara Kebabs & More official brand colors, typography, and design system to any artifact. Use this skill whenever building UI components, styling pages, creating marketing materials, generating documents, or making any visual/design decision for the Tiara restaurant website. Also triggers when asking about brand colors, fonts, button styles, layout patterns, or business details. Use it proactively for any design, branding, or visual styling work in this project.
---

# Tiara Kebabs & More — Brand Guidelines

## Overview

Official brand identity and design system for Tiara Kebabs & More, a premium Persian/Iranian restaurant in Bedford, Nova Scotia.
Apply these guidelines to all visual artifacts — web pages, components, documents, presentations, social media, and marketing materials.

**Keywords**: branding, corporate identity, visual identity, styling, brand colors, typography, Tiara brand, visual formatting, visual design, Persian restaurant, navy gold, luxury dining

## Brand Identity

- **Name:** Tiara Kebabs & More
- **Tagline:** A Journey Through Authentic Persian Cuisine
- **Personality:** Premium, warm, authentic, luxury Persian dining
- **Design Language:** Persian geometric patterns, gold-on-navy, luxury feel

## Brand Guidelines

### Colors

**Navy (Primary Backgrounds):**

- Navy 950: `#080E22` — Footer, deep overlays, darkest backgrounds
- Navy 900: `#0F1B3D` — Primary page background (most used)
- Navy 800: `#162550` — Cards, elevated surfaces, nav background
- Navy 700: `#1E3168` — Hover states, input backgrounds
- Navy 600: `#2A4080` — Borders, dividers

**Gold (Accent — Signature Brand Color):**

- Gold 300: `#E8D48B` — Body text on dark backgrounds
- Gold 400: `#D4BC6A` — Subtitles, secondary text, hover states
- Gold 500: `#C5A55A` — Primary accent: headings, CTAs, active states
- Gold 600: `#A8893E` — Pressed/active states
- Gold 700: `#8B6D2A` — Deep gold, rarely used

**Warm Neutrals (Light Sections):**

- Warm 50: `#FDF8F0` — Light section background
- Warm 100: `#F5EDE0` — Cards on light background
- Warm 200: `#E8DBC8` — Borders on light background
- Warm 300: `#D4C4A8` — Decorative lines on light
- Warm 500: `#A08B6A` — Secondary text on light
- Warm 700: `#6B5A40` — Body text on light
- Warm 900: `#3D3225` — Headings on light background

### Color Application

**Dark sections (default):**
- Background: Navy 900 (`#0F1B3D`)
- Body text: Gold 300/80 opacity
- Headings: Gold 500
- Cards: Navy 800/50 opacity with Navy 700/50 border

**Light sections (alternating):**
- Background: Warm 50 (`#FDF8F0`)
- Body text: Warm 700
- Headings: Warm 900
- Cards: White with Warm 200 border

**Gold gradient text:**
```css
background: linear-gradient(135deg, #E8D48B, #C5A55A, #E8D48B);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Gold gradient background (buttons):**
```css
background: linear-gradient(135deg, #E8D48B, #C5A55A, #A8893E);
```

### Typography

- **Headings:** Playfair Display (serif, luxury) — with Georgia fallback
- **Body/UI:** Lora (clean sans-serif) — with system-ui fallback
- **Accent/Descriptions:** Cormorant Garamond italic — with Georgia fallback

**Tailwind utility classes:**
- `font-display` — Playfair Display for all headings (h1-h6), section titles, hero text
- `font-sans` — Lora for paragraphs, buttons, nav links, form labels
- `font-accent` — Cormorant Garamond italic for subtitles, descriptions, quotes, taglines

### Text Styling

- Section titles: Playfair Display, bold, 3xl/5xl, Gold 500
- Subtitles: Cormorant Garamond italic, lg/xl, Gold 300
- Section labels (small): Playfair Display, sm, uppercase, tracking 0.3em, Gold 500/70
- Navigation links: uppercase, tracking 0.2em, xs
- Body text on dark: Gold 300 at 70-80% opacity
- Body text on light: Warm 700

### Buttons

Three button styles — all rounded-full, uppercase, tracking-widest:

**Primary (`.btn-gold`):** Gold gradient background, navy text. Use for main CTAs.
- "Explore Our Menu", "Order Now", "Get Directions"
- Hover: lift -2px, brighter gradient, stronger gold glow shadow

**Secondary (`.btn-gold-outline`):** Gold border, transparent background, gold text. Use for secondary CTAs.
- "View Menu", "Learn More", "Order Online"
- Hover: fill-from-left gold gradient, text becomes navy

**On Light (`.btn-navy`):** Navy background, gold text. Use on warm/white sections.
- "Learn More About Us", "Our Story"
- Hover: lift -2px, deeper navy shadow

All buttons wrap inner text in `<span>` for z-index layering.

### Shape and Decorative Elements

- **Persian Divider:** Gold geometric diamond SVG with gradient lines — used as section separator
- **Dotted price lines:** `border-b-2 border-dotted border-gold-500/20` — connecting dish names to prices
- **Corner accents:** `border-t-2 border-l-2 border-gold-500/30` — decorative card corners
- **Circular food images:** `rounded-full border-2 border-gold-500/30` with hover glow
- **Section rhythm:** Alternate dark (navy-900/950) and light (warm-50) sections

### Animation System

- **Scroll reveal:** 6 variants — fade-up, fade-down, slide-left, slide-right, scale, fade
- **Float:** Gentle Y-axis bob for decorative particles (6s cycle)
- **Ken Burns:** Slow zoom+pan for hero/parallax images (20s)
- **Marquee:** Infinite horizontal scroll for food image strip (30s)
- **Hover lift:** Cards lift -8px with deeper shadow on hover
- **Hover zoom:** Images scale 1.08x on hover inside overflow-hidden container
- **Stagger pattern:** Sequential animation delays (0.2s, 0.5s, 0.8s, 1.1s) for hero elements
- All animations respect `prefers-reduced-motion`

## Business Details

- **Address:** 640 Brookline Drive, Unit 103, Bedford, Nova Scotia
- **Phone:** 902-835-0811
- **Hours:** Monday–Sunday, 11:00 AM – 9:00 PM
- **Services:** Dine-in, Takeout, Delivery, Reservations

## Asset Inventory

### Logos (`public/images/logo/`)
- `logo-icon.png` — Gold flame-bowl icon (nav, hero, footer)
- `logo-full.png` — Icon + text combination
- `logo-text.png` — Text only
- `og-image.jpg` — Open Graph social sharing image
- `favicon-{16,32,180,192,512}.png` — Favicon set

### Photography
- **AI Food Photos (19):** `public/images/ai-food/ai-dish-{01-19}-{sm,md,lg}.webp` — Atmospheric shots for hero bgs, marquee, thumbnails
- **Uber Eats Photos (17):** `public/images/food/{dish-name}-{sm,md,lg}.webp` + `.jpg` fallbacks — Professional menu item photos
- **Client Interior (8):** `public/images/client-interior/client-interior-{01-08}-{sm,md,lg}.webp` — Real restaurant + AI renders

### Videos (`public/videos/`)
- `hero-bg` — Homepage hero background loop
- `ambiance-1`, `ambiance-2` — Restaurant ambiance clips
- `food-prep` — Kitchen/cooking footage
- Each has `.mp4`, `.webm`, and `-poster.jpg` variants

## Accessibility

- WCAG AA color contrast: Gold 500 on Navy 900 passes at ~4.8:1
- All animations gated by `prefers-reduced-motion`
- Semantic HTML: `nav`, `main`, `section`, `header`, `footer`
- All images require descriptive `alt` text
- Skip-to-content link on every page
- Focus visible outlines on all interactive elements
- Keyboard navigable throughout
