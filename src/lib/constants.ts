/** Canonical origin. The apex domain 301-redirects here, so every absolute URL uses `www`. */
export const SITE_URL = 'https://www.tiararestaurant.ca'
export const SITE_HOST = 'www.tiararestaurant.ca'
export const SITE_NAME = 'Tiara Kebabs & More'
export const SITE_LOCALE = 'en_CA'

/** Turns a root-relative path ("/images/x.jpg") into an absolute URL on the canonical host. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export const DEFAULT_OG_IMAGE = {
  url: absoluteUrl('/images/logo/og-image.jpg'),
  width: 1200,
  height: 630,
  alt: 'Tiara Kebabs & More, Persian restaurant in Bedford, Nova Scotia',
} as const

export const LOGO_URL = absoluteUrl('/images/logo/logo-full.png')

/** Every route that is prerendered and listed in the sitemap. */
export const INDEXABLE_PATHS = ['/', '/menu', '/about', '/gallery', '/contact'] as const

export const POSTAL_CODE = 'B4B 1S8'

/** Map pin for 640 Brookline Drive (OpenStreetMap). */
export const GEO = { latitude: 44.7128089, longitude: -63.7150946 } as const

export const PHONE_E164 = '+1-902-835-0811'

export const OPENING_HOURS = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '11:00',
  closes: '21:00',
} as const

const MAPS_QUERY = '640+Brookline+Drive+Unit+103+Bedford+NS+B4B+1S8'
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`
export const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`

/** External listings, used for `sameAs` in structured data. */
export const LISTING_URLS = {
  instagram: 'https://www.instagram.com/tiara_kebabs/',
  facebook: 'https://www.facebook.com/profile.php?id=61576191197083',
  doordash: 'https://www.doordash.com/store/tiara-kebabs-&-more-bedford-40983959/',
  uberEats: 'https://www.ubereats.com/ca/store/tiara-kebabs-640-brookline-drive/TD5AnmJHXdqYjyGRTnGssQ',
  orderOnline: 'https://order.online/store/tiara-kebabs-more-40983959',
  birdeye: 'https://reviews.birdeye.com/tiara-kebabs-more-178422016457397',
} as const
