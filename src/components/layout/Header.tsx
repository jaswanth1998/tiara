import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, MapPin, Phone, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, restaurant } from '@/data/restaurant'
import { MobileNav } from './MobileNav'

const LEFT_LINKS = NAV_LINKS.slice(0, 3)
const RIGHT_LINKS = NAV_LINKS.slice(3)

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* ── Top Utility Bar ── */}
      <div className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'h-0 opacity-0 pointer-events-none overflow-hidden' : 'h-auto opacity-100',
      )}>
        <div className="bg-navy-950/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 md:px-8">
            {/* Left: Location */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-gold-300/80 transition-colors duration-300 hover:text-gold-500"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="hidden sm:block">
                <span className="block text-xs font-semibold uppercase tracking-wider text-gold-500">Location</span>
                <span className="text-xs text-gold-300/70">{restaurant.address}</span>
              </span>
            </a>

            {/* Right: Order + Phone */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${restaurant.phone.replace(/-/g, '')}`}
                className="hidden items-center gap-2 text-sm text-gold-300/80 transition-colors duration-300 hover:text-gold-500 md:flex"
              >
                <span className="text-xs text-gold-300/70">{restaurant.phone}</span>
              </a>
              <a
                href={restaurant.orderUrl}
                className="flex items-center gap-2.5 text-sm text-gold-300/80 transition-colors duration-300 hover:text-gold-500"
              >
                <span className="hidden sm:block">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gold-500">Order Online</span>
                  <span className="text-xs text-gold-300/70">{restaurant.phone}</span>
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                  <ShoppingBag className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <header
        className={cn(
          'fixed left-0 right-0 z-40 transition-all duration-500',
          isScrolled ? 'top-0' : 'top-[52px]',
        )}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <nav
            className={cn(
              'flex items-center justify-between rounded-b-2xl px-6 transition-all duration-500 lg:justify-center lg:gap-0',
              isScrolled
                ? 'bg-navy-800/95 shadow-xl shadow-navy-950/40 backdrop-blur-md py-2'
                : 'bg-navy-800/80 backdrop-blur-sm py-3',
            )}
          >
            {/* Desktop Left Links */}
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-7 lg:pr-8">
              {LEFT_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'relative font-display text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-gold-500',
                    pathname === link.href ? 'text-gold-500' : 'text-gold-300/90',
                    'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-300',
                    pathname === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <Link to="/" className="relative shrink-0 group lg:-my-4" aria-label="Tiara Kebabs & More — Home">
              <img
                src="/images/logo/logo-icon.png"
                alt="Tiara Kebabs & More"
                className={cn(
                  'w-auto transition-all duration-500 group-hover:scale-105 drop-shadow-[0_0_20px_rgba(197,165,90,0.2)]',
                  isScrolled ? 'h-14' : 'h-16 lg:h-20',
                )}
              />
            </Link>

            {/* Desktop Right Links */}
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:gap-7 lg:pl-8">
              {RIGHT_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'relative font-display text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-gold-500',
                    pathname === link.href ? 'text-gold-500' : 'text-gold-300/90',
                    'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-300',
                    pathname === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gold-400 transition-colors duration-300 hover:bg-gold-500/10 hover:text-gold-500 lg:hidden"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </header>

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  )
}
