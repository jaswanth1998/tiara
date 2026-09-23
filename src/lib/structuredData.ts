import { menuCategories } from '@/data/menu'
import { NAV_LINKS, restaurant } from '@/data/restaurant'
import {
  DEFAULT_OG_IMAGE,
  GOOGLE_MAPS_URL,
  LOGO_URL,
  OPENING_HOURS,
  PHONE_E164,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from '@/lib/constants'
import type { MenuItem } from '@/types'

/** A JSON-LD node. Values are plain JSON, so `unknown` is enough. */
export type JsonLd = Record<string, unknown>

const CONTEXT = 'https://schema.org'
export const RESTAURANT_ID = `${SITE_URL}/#restaurant`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const MENU_ID = `${SITE_URL}/menu#menu`

/** Absolute page URL for a route path ("/" → "https://www.../"). */
export function pageUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

export function buildRestaurantSchema(): JsonLd {
  const sameAs = [
    restaurant.socialMedia.instagram,
    restaurant.socialMedia.facebook,
    restaurant.listings.doordash,
    restaurant.listings.uberEats,
    restaurant.orderUrl,
    restaurant.listings.birdeye,
  ].filter((url): url is string => typeof url === 'string')

  return {
    '@context': CONTEXT,
    '@type': 'Restaurant',
    '@id': RESTAURANT_ID,
    name: SITE_NAME,
    description:
      'Halal Persian restaurant in West Bedford, Halifax, serving charcoal-grilled kebabs, saffron rice and slow-cooked stews. Dine-in, takeout, delivery and reservations.',
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    image: [
      DEFAULT_OG_IMAGE.url,
      absoluteUrl('/images/food/hero-lg.webp'),
      absoluteUrl('/images/food/kebab-koobideh-lg.webp'),
      absoluteUrl('/images/food/kebab-barg-lg.webp'),
    ],
    telephone: PHONE_E164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurant.streetAddress,
      addressLocality: restaurant.locality,
      addressRegion: restaurant.region,
      postalCode: restaurant.postalCode,
      addressCountry: restaurant.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurant.geo.latitude,
      longitude: restaurant.geo.longitude,
    },
    hasMap: GOOGLE_MAPS_URL,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...OPENING_HOURS.days],
        opens: OPENING_HOURS.opens,
        closes: OPENING_HOURS.closes,
      },
    ],
    servesCuisine: ['Persian', 'Iranian', 'Middle Eastern', 'Halal'],
    priceRange: '$$',
    acceptsReservations: true,
    menu: pageUrl('/menu'),
    hasMenu: { '@id': MENU_ID },
    sameAs,
  }
}

function buildOffer(price: number, name?: string): JsonLd {
  return {
    '@type': 'Offer',
    ...(name ? { name } : {}),
    price: price.toFixed(2),
    priceCurrency: 'CAD',
  }
}

function buildMenuItem(item: MenuItem): JsonLd {
  const offers = item.priceAlt
    ? [buildOffer(item.price), buildOffer(item.priceAlt.price, item.priceAlt.label)]
    : buildOffer(item.price)

  return {
    '@type': 'MenuItem',
    name: item.name,
    description: item.description,
    ...(item.image ? { image: absoluteUrl(`${item.image}-lg.webp`) } : {}),
    offers,
    ...(item.tags?.includes('vegan') ? { suitableForDiet: 'https://schema.org/VeganDiet' } : {}),
  }
}

export function buildMenuSchema(): JsonLd {
  return {
    '@context': CONTEXT,
    '@type': 'Menu',
    '@id': MENU_ID,
    name: `${SITE_NAME} Menu`,
    url: pageUrl('/menu'),
    inLanguage: 'en-CA',
    hasMenuSection: menuCategories.map((category) => ({
      '@type': 'MenuSection',
      name: category.name,
      ...(category.subtitle ? { description: category.subtitle } : {}),
      hasMenuItem: category.items.map(buildMenuItem),
    })),
  }
}

export function buildWebSiteSchema(): JsonLd {
  return {
    '@context': CONTEXT,
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: 'en-CA',
    publisher: { '@id': RESTAURANT_ID },
  }
}

/** Home › Page. Page names come from the navigation labels. */
export function buildBreadcrumbSchema(path: string): JsonLd {
  const home = NAV_LINKS[0]
  const page = NAV_LINKS.find((link) => link.href === path)
  const items: { name: string; path: string }[] = [{ name: home.label, path: home.href }]
  if (page && page.href !== home.href) items.push({ name: page.label, path: page.href })

  return {
    '@context': CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  }
}
