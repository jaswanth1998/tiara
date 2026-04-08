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

export interface Restaurant {
  name: string
  tagline: string
  address: string
  phone: string
  hours: string
  services: string[]
  orderUrl: string
  socialMedia: {
    instagram?: string
    facebook?: string
    tiktok?: string
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
