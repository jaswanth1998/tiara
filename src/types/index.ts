export interface MenuItem {
  id: string
  name: string
  persianName?: string
  price: number
  priceAlt?: { label: string; price: number }
  description: string
  image?: string
  tags?: ('vegan' | 'spicy' | 'popular' | 'new')[]
  servingSize?: string
}

export interface MenuCategory {
  id: string
  name: string
  subtitle?: string
  note?: string
  items: MenuItem[]
}

export interface GeoCoordinates {
  latitude: number
  longitude: number
}

export interface GoogleRating {
  /** Average star rating, e.g. 4.9 */
  value: number
  /** Number of Google reviews behind `value` */
  count: number
  /** When the figures were last checked (ISO year-month, e.g. "2026-09") */
  asOf: string
}

export interface Restaurant {
  name: string
  tagline: string
  /** Full single-line address for display and map links */
  address: string
  streetAddress: string
  locality: string
  region: string
  postalCode: string
  country: string
  geo: GeoCoordinates
  phone: string
  hours: string
  services: string[]
  orderUrl: string
  googleRating: GoogleRating
  socialMedia: {
    instagram?: string
    facebook?: string
    tiktok?: string
  }
  listings: {
    doordash: string
    uberEats: string
    birdeye: string
  }
}

export interface GalleryImage {
  src: string
  alt: string
  category: 'food' | 'interior' | 'ambiance'
  width?: number
  height?: number
}

export interface Review {
  quote: string
  author: string
  rating: number
}
