import type { Restaurant } from '@/types'
import { GEO, LISTING_URLS, POSTAL_CODE } from '@/lib/constants'

export const restaurant: Restaurant = {
  name: 'Tiara Kebabs & More',
  tagline: 'Authentic Persian Cuisine in Bedford, Nova Scotia',
  address: `640 Brookline Drive, Unit 103, Bedford, Nova Scotia ${POSTAL_CODE}`,
  streetAddress: '640 Brookline Drive, Unit 103',
  locality: 'Bedford',
  region: 'NS',
  postalCode: POSTAL_CODE,
  country: 'CA',
  geo: GEO,
  phone: '902-835-0811',
  hours: 'Monday – Sunday, 11:00 AM – 9:00 PM',
  services: ['Dine-in', 'Takeout', 'Delivery', 'Reservations'],
  orderUrl: LISTING_URLS.orderOnline,
  googleRating: { value: 4.9, count: 129, asOf: '2026-09' },
  socialMedia: {
    instagram: LISTING_URLS.instagram,
    facebook: LISTING_URLS.facebook,
  },
  listings: {
    doordash: LISTING_URLS.doordash,
    uberEats: LISTING_URLS.uberEats,
    birdeye: LISTING_URLS.birdeye,
  },
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const
