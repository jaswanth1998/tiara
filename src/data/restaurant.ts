import type { Restaurant } from '@/types'

export const restaurant: Restaurant = {
  name: 'Tiara Kebabs & More',
  tagline: 'A Journey Through Authentic Persian Cuisine',
  address: '640 Brookline Drive, Unit 103, Bedford, Nova Scotia',
  phone: '902-835-0811',
  hours: 'Monday – Sunday, 11:00 AM – 9:00 PM',
  services: ['Dine-in', 'Takeout', 'Delivery', 'Reservations'],
  orderUrl: 'https://order.online/store/tiara-kebabs-more-40983959',
  socialMedia: {
    instagram: 'https://www.instagram.com/tiara_kebabs/',
    facebook: 'https://www.facebook.com/profile.php?id=61576191197083',
  },
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const
