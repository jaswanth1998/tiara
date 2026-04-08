import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { MapPin, Phone, Clock, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { MenuCard } from '@/components/common/MenuCard'
import { PersianDivider } from '@/components/common/PersianDivider'
import { DishImage } from '@/components/common/DishImage'
import { FEATURED_DISHES } from '@/data/menu'
import { restaurant } from '@/data/restaurant'
import type { MenuItem } from '@/types'

/* ─── Hero ─────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="/images/food/hero-lg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/60 to-navy-950/90" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <img
          src="/images/logo/logo-icon.png"
          alt=""
          className="mx-auto mb-6 h-20 w-auto md:h-24"
          aria-hidden="true"
        />
        <h1 className="font-display text-4xl font-bold tracking-tight text-gold-500 md:text-6xl lg:text-7xl">
          Tiara Kebabs & More
        </h1>
        <p className="mt-4 font-accent text-xl italic text-gold-300 md:text-2xl">
          A Journey Through Authentic Persian Cuisine
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="text-base">
            <Link to="/menu">Explore Our Menu</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-gold-500 text-base text-gold-500 hover:bg-gold-500/10">
            <a href={restaurant.orderUrl}>Order Online</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gold-500/60">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  )
}

/* ─── Intro Strip ──────────────────────────────────────────── */
function IntroStrip() {
  return (
    <section className="bg-gold-500 py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 text-center md:flex-row md:justify-center md:gap-6">
        <p className="text-sm font-medium tracking-wide text-navy-900">
          {restaurant.services.join(' | ')}
        </p>
        <span className="hidden h-4 w-px bg-navy-900/30 md:block" />
        <p className="text-sm text-navy-900/80">
          {restaurant.address}
        </p>
      </div>
    </section>
  )
}

/* ─── Featured Dishes ──────────────────────────────────────── */
function FeaturedDishesSection() {
  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Signature Dishes"
            subtitle="Crafted with fire, flavor, and tradition"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {FEATURED_DISHES.map((item, i) => (
            <ScrollReveal key={item?.id} delay={i * 150}>
              <MenuCard item={item as MenuItem} variant="featured" />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10">
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ─── About Preview ────────────────────────────────────────── */
function AboutPreviewSection() {
  return (
    <section className="bg-warm-50 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <ScrollReveal>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/interior/interior-ref-lg.webp"
              alt="Tiara restaurant interior with arched brown panels and warm beige walls"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div>
            <SectionHeading
              title="Our Story"
              subtitle="Where tradition meets modern elegance"
              align="left"
              theme="light"
            />
            <p className="mt-6 text-warm-700 leading-relaxed">
              At Tiara Kebabs & More, we bring the rich flavors of Persian cuisine to
              Bedford, Nova Scotia. Every dish is a celebration of centuries-old recipes,
              prepared with fresh ingredients and cooked over open flames just as
              our ancestors intended.
            </p>
            <p className="mt-4 text-warm-700 leading-relaxed">
              From the aromatic saffron rice to our signature koobideh kebabs, each
              bite is a journey through the heart of Iran. Welcome to our table.
            </p>
            <div className="mt-8">
              <Button variant="outline" className="border-warm-500 text-warm-700 hover:bg-warm-200">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ─── Parallax Divider ─────────────────────────────────────── */
function ParallaxDivider() {
  return (
    <section className="relative h-[50vh] overflow-hidden md:h-[60vh]">
      <img
        src="/images/ambiance/ambiance-01-lg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-950/70" />
      <div className="relative flex h-full items-center justify-center px-4">
        <blockquote className="text-center">
          <PersianDivider variant="accent" className="mx-auto mb-6" />
          <p className="font-display text-2xl font-bold text-gold-500 md:text-4xl">
            Fire, flavor, and tradition.
          </p>
          <PersianDivider variant="accent" className="mx-auto mt-6" />
        </blockquote>
      </div>
    </section>
  )
}

/* ─── Testimonials ─────────────────────────────────────────── */
function TestimonialsSection() {
  const reviews = [
    {
      quote: 'The best Persian food in Nova Scotia! The kebab koobideh is absolutely incredible.',
      author: 'Sarah M.',
      rating: 5,
    },
    {
      quote: 'Beautiful restaurant with amazing food. The lamb chops were cooked to perfection.',
      author: 'James R.',
      rating: 5,
    },
    {
      quote: 'Authentic flavors that remind me of home. The ghorme sabzi is a must-try!',
      author: 'Maryam K.',
      rating: 5,
    },
  ]

  return (
    <section className="bg-warm-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading
            title="What Our Guests Say"
            theme="light"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.author} delay={i * 150}>
              <div className="rounded-lg border border-warm-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-1 text-gold-500">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg key={j} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-accent text-base italic text-warm-700">
                  "{review.quote}"
                </p>
                <p className="mt-4 text-sm font-medium text-warm-500">
                  — {review.author}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Location & Hours ─────────────────────────────────────── */
function LocationSection() {
  return (
    <section className="bg-navy-900 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading title="Find Us" />
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <div className="overflow-hidden rounded-lg">
              <iframe
                title="Tiara Kebabs & More location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.1!2d-63.667!3d44.729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s640+Brookline+Drive+Bedford+Nova+Scotia!5e0!3m2!1sen!2sca!4v1"
                className="h-64 w-full rounded-lg border-0 md:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-display text-lg font-bold text-gold-500">Address</h3>
                  <p className="mt-1 text-gold-300/80">{restaurant.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-display text-lg font-bold text-gold-500">Phone</h3>
                  <a
                    href={`tel:${restaurant.phone.replace(/-/g, '')}`}
                    className="mt-1 text-gold-300/80 hover:text-gold-500"
                  >
                    {restaurant.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-display text-lg font-bold text-gold-500">Hours</h3>
                  <p className="mt-1 text-gold-300/80">{restaurant.hours}</p>
                </div>
              </div>
              <div className="pt-4">
                <Button>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ─── Final CTA ────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gold-500 py-14 md:py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-navy-900 md:text-4xl">
          Ready to experience authentic Persian flavors?
        </h2>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button variant="secondary" className="border-navy-900 bg-navy-900 text-gold-500 hover:bg-navy-800 text-base">
            <a href={restaurant.orderUrl}>Order Now</a>
          </Button>
          <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900/10 text-base">
            <a href={`tel:${restaurant.phone.replace(/-/g, '')}`}>
              Call Us: {restaurant.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ─── Menu Highlights (horizontal scroll) ──────────────────── */
function MenuHighlights() {
  // Pick dishes that have images from various categories
  const highlights: MenuItem[] = [
    { id: 'h-kebab-barg', name: 'Kebab Barg', price: 31, description: 'Juicy veal fillet mignon', image: '/images/food/kebab-barg', tags: [] },
    { id: 'h-fesenjan', name: 'Fesenjan', price: 19, description: 'Walnut pomegranate stew', image: '/images/food/fesenjan', tags: [] },
    { id: 'h-salmon', name: 'Grilled Salmon', price: 27, description: 'Saffron marinated Atlantic salmon', image: '/images/food/grilled-salmon-kebab', tags: [] },
    { id: 'h-mirza', name: 'Mirza Ghasemi', price: 13, description: 'Grilled eggplant appetizer', image: '/images/food/mirza-ghasemi', tags: [] },
    { id: 'h-ghorme', name: 'Ghorme Sabzi', price: 18, description: 'Rich herb stew', image: '/images/food/ghorme-sabzi', tags: [] },
    { id: 'h-cake', name: 'Saffron Pistachio Cake', price: 8, description: 'Delicate saffron-infused cake', image: '/images/food/saffron-pistachio-cake', tags: [] },
  ]

  return (
    <section className="bg-navy-800 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading
            title="From Our Kitchen"
            subtitle="A taste of what awaits"
          />
        </ScrollReveal>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 scrollbar-none">
          {highlights.map((item) => (
            <div key={item.id} className="w-56 shrink-0 md:w-64">
              <div className="aspect-square overflow-hidden rounded-lg">
                {item.image && (
                  <DishImage
                    src={item.image}
                    alt={item.name}
                    sizes="256px"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-gold-500">
                {item.name}
              </h3>
              <p className="text-sm text-gold-300/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10">
            <Link to="/menu">See Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ─── HomePage ─────────────────────────────────────────────── */
export function HomePage() {
  useDocumentTitle('')
  return (
    <>
      <HeroSection />
      <IntroStrip />
      <FeaturedDishesSection />
      <AboutPreviewSection />
      <MenuHighlights />
      <ParallaxDivider />
      <TestimonialsSection />
      <LocationSection />
      <FinalCTA />
    </>
  )
}

export default HomePage
