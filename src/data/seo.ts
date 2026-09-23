import { DEFAULT_OG_IMAGE, INDEXABLE_PATHS } from '@/lib/constants'
import {
  buildBreadcrumbSchema,
  buildMenuSchema,
  buildRestaurantSchema,
  buildWebSiteSchema,
  type JsonLd,
} from '@/lib/structuredData'

export type IndexablePath = (typeof INDEXABLE_PATHS)[number]
export const NOT_FOUND_PATH = '/404'
export type SeoPath = IndexablePath | typeof NOT_FOUND_PATH

export interface OgImage {
  /** Absolute URL */
  url: string
  width?: number
  height?: number
  alt: string
}

export interface RouteSeo {
  path: SeoPath
  /** Full `<title>`, ≤ 60 characters */
  title: string
  /** Meta description, ≤ 155 characters */
  description: string
  ogImage: OgImage
  ogType: 'website'
  noindex: boolean
  /** Root-relative hero image preloaded with high priority (LCP candidate) */
  preloadImage?: string
  sitemap?: { changefreq: 'weekly' | 'monthly'; priority: number }
  jsonLd: () => JsonLd[]
}

export const ROUTE_SEO: Record<SeoPath, RouteSeo> = {
  '/': {
    path: '/',
    title: 'Tiara Kebabs & More | Persian Restaurant in Bedford, NS',
    description:
      'Authentic halal Persian kebabs, saffron rice and slow-cooked stews in West Bedford, Halifax. Dine-in, takeout, delivery and reservations. Open daily 11–9.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    noindex: false,
    preloadImage: '/images/food/hero-lg.webp',
    sitemap: { changefreq: 'weekly', priority: 1.0 },
    jsonLd: () => [buildRestaurantSchema(), buildWebSiteSchema()],
  },
  '/menu': {
    path: '/menu',
    title: 'Persian Menu: Kebabs, Stews & Lunch Specials | Tiara Kebabs',
    description:
      "Browse Tiara's full Persian menu in Bedford, NS: kebab koobideh, barg, lamb chops, ghormeh sabzi, fesenjan, tahdig, family platters and lunch specials.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    noindex: false,
    preloadImage: '/images/ai-food/ai-dish-11-lg.webp',
    sitemap: { changefreq: 'weekly', priority: 0.9 },
    jsonLd: () => [buildRestaurantSchema(), buildMenuSchema(), buildBreadcrumbSchema('/menu')],
  },
  '/about': {
    path: '/about',
    title: 'Our Story: Authentic Persian Cuisine in Bedford, NS | Tiara',
    description:
      'Tiara Kebabs & More is a halal Persian restaurant on Brookline Drive in West Bedford serving recipes passed down through generations.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    noindex: false,
    preloadImage: '/images/client-interior/client-interior-02-lg.webp',
    sitemap: { changefreq: 'monthly', priority: 0.7 },
    jsonLd: () => [buildRestaurantSchema(), buildBreadcrumbSchema('/about')],
  },
  '/gallery': {
    path: '/gallery',
    title: 'Photos: Persian Dishes & Dining Room | Tiara Kebabs, Bedford',
    description:
      'See Tiara Kebabs & More in Bedford, NS: grilled kebabs, saffron rice, Persian stews and our dining room, in photos and video.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    noindex: false,
    preloadImage: '/images/ai-food/ai-dish-11-lg.webp',
    sitemap: { changefreq: 'monthly', priority: 0.6 },
    jsonLd: () => [buildRestaurantSchema(), buildBreadcrumbSchema('/gallery')],
  },
  '/contact': {
    path: '/contact',
    title: 'Contact, Hours & Reservations | Tiara Kebabs, Bedford NS',
    description:
      '640 Brookline Drive, Unit 103, Bedford NS. Open daily 11 AM–9 PM. Call 902-835-0811 to reserve, or order online for takeout and delivery.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    noindex: false,
    preloadImage: '/images/client-interior/client-interior-08-lg.webp',
    sitemap: { changefreq: 'monthly', priority: 0.8 },
    jsonLd: () => [buildRestaurantSchema(), buildBreadcrumbSchema('/contact')],
  },
  '/404': {
    path: '/404',
    title: 'Page Not Found | Tiara Kebabs & More',
    description: "The page you're looking for doesn't exist. Browse the menu or find our hours and address.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    noindex: true,
    jsonLd: () => [buildRestaurantSchema()],
  },
}

export function isSeoPath(path: string): path is SeoPath {
  return Object.prototype.hasOwnProperty.call(ROUTE_SEO, path)
}

/** SEO for any pathname; unknown paths get the 404 entry. */
export function getRouteSeo(path: string): RouteSeo {
  return isSeoPath(path) ? ROUTE_SEO[path] : ROUTE_SEO[NOT_FOUND_PATH]
}
