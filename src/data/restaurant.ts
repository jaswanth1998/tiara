import type { Restaurant } from '@/types'

export const restaurant: Restaurant = {
  name: 'Tiara Kebabs & More',
  tagline: 'A Journey Through Authentic Persian Cuisine',
  address: '640 Brookline Drive, Unit 103, Bedford, Nova Scotia',
  phone: '902-835-0811',
  hours: 'Monday – Sunday, 11:00 AM – 9:30 PM',
  services: ['Dine-in', 'Takeout', 'Delivery', 'Reservations'],
  orderUrl: '#', // TODO: Replace with Uber Eats / DoorDash link
  socialMedia: {
    instagram: '#',
    facebook: '#',
  },
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const
