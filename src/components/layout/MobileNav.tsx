import { Link, useLocation } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { NAV_LINKS, restaurant } from '@/data/restaurant'
import { cn } from '@/lib/utils'

export interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { pathname } = useLocation()

  return (
    <Sheet open={isOpen} onOpenChange={(open) => { if (!open) onClose() }}>
      <SheetContent side="right" className="w-full border-navy-600 bg-navy-900 sm:w-80">
        <nav className="flex flex-col gap-2 pt-12" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className={cn(
                'rounded-xl px-4 py-3.5 font-display text-lg uppercase tracking-widest transition-all duration-300',
                pathname === link.href
                  ? 'bg-gold-500/10 text-gold-500'
                  : 'text-gold-300 hover:bg-navy-800 hover:text-gold-500',
              )}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}

          <div className="my-4 h-px bg-navy-600/50" />

          <a
            href={`tel:${restaurant.phone.replace(/-/g, '')}`}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-gold-300 transition-colors duration-300 hover:bg-navy-800"
          >
            <Phone className="h-5 w-5" />
            {restaurant.phone}
          </a>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gold-300 transition-colors duration-300 hover:bg-navy-800"
          >
            <MapPin className="h-5 w-5 shrink-0" />
            {restaurant.address}
          </a>

          <div className="px-4 pt-4">
            <a href={restaurant.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-gold w-full text-center">
              <span>Order Online</span>
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
