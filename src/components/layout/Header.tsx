import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, restaurant } from '@/data/restaurant'
import { MobileNav } from './MobileNav'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-navy-900/95 shadow-lg backdrop-blur-md'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="shrink-0" aria-label="Tiara Kebabs & More — Home">
            <img
              src="/images/logo/logo-icon.png"
              alt="Tiara Kebabs & More"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'relative font-display text-sm uppercase tracking-widest transition-colors hover:text-gold-500',
                  pathname === link.href
                    ? 'text-gold-500'
                    : 'text-gold-300',
                  // Animated underline
                  'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-300',
                  pathname === link.href
                    ? 'after:w-full'
                    : 'after:w-0 hover:after:w-full',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA + Phone + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${restaurant.phone.replace(/-/g, '')}`}
              className="hidden items-center gap-1.5 text-sm text-gold-300 transition-colors hover:text-gold-500 md:flex"
            >
              <Phone className="h-4 w-4" />
              {restaurant.phone}
            </a>

            <Button className="hidden sm:inline-flex">
              <a href={restaurant.orderUrl}>Order Online</a>
            </Button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gold-400 hover:text-gold-500 lg:hidden"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  )
}
