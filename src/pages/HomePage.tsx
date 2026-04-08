import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { MapPin, Phone, Clock, ChevronDown, UtensilsCrossed, Truck, CalendarCheck, Store } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { MenuCard } from '@/components/common/MenuCard'
import { PersianDivider } from '@/components/common/PersianDivider'
import { DishImage } from '@/components/common/DishImage'
import { VideoBackground } from '@/components/common/VideoBackground'
import { FEATURED_DISHES } from '@/data/menu'
import { restaurant } from '@/data/restaurant'
import type { MenuItem } from '@/types'

/* ─── Hero with Video Background ───────────────────────────── */
function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video background */}
      <VideoBackground
        webmSrc="/videos/hero-bg.webm"
        mp4Src="/videos/hero-bg.mp4"
        posterSrc="/videos/hero-bg-poster.jpg"
      />

      {/* Fallback image for poster */}
      <img
        src="/images/food/hero-lg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/50 to-navy-950/90" />

      {/* Animated gold particles / ornaments */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 h-1 w-1 rounded-full bg-gold-500/30 animate-float" />
        <div className="absolute top-40 right-20 h-1.5 w-1.5 rounded-full bg-gold-500/20 animate-float-slow" />
        <div className="absolute bottom-40 left-1/4 h-1 w-1 rounded-full bg-gold-500/25 animate-float-delay" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Logo with glow */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <img
            src="/images/logo/logo-icon.png"
            alt=""
            className="mx-auto mb-8 h-24 w-auto drop-shadow-[0_0_30px_rgba(197,165,90,0.3)] md:h-28"
            aria-hidden="true"
          />
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-gold-gradient">Tiara Kebabs</span>
            <span className="block text-gold-500/80 text-3xl md:text-4xl lg:text-5xl mt-2 font-normal">&amp; More</span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <p className="mt-6 font-accent text-xl italic text-gold-300/90 md:text-2xl lg:text-3xl">
            A Journey Through Authentic Persian Cuisine
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/menu" className="btn-gold">
              <span>Explore Our Menu</span>
            </Link>
            <a href={restaurant.orderUrl} className="btn-gold-outline">
              <span>Order Online</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gold-500/50">Scroll</span>
          <ChevronDown className="h-6 w-6 text-gold-500/50" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  )
}

/* ─── Intro Strip with Icons ──────────────────────────────── */
function IntroStrip() {
  const services = [
    { icon: UtensilsCrossed, label: 'Dine-in' },
    { icon: Store, label: 'Takeout' },
    { icon: Truck, label: 'Delivery' },
    { icon: CalendarCheck, label: 'Reservations' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 py-6">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-center md:gap-10">
        {services.map((service) => (
          <div key={service.label} className="flex items-center gap-2 text-navy-900">
            <service.icon className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">{service.label}</span>
          </div>
        ))}
        <span className="hidden h-5 w-px bg-navy-900/30 md:block" />
        <p className="text-sm font-medium text-navy-900/80">
          {restaurant.address}
        </p>
      </div>
    </section>
  )
}

/* ─── Featured Dishes with AI Photos ──────────────────────── */
function FeaturedDishesSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Signature Dishes"
            subtitle="Crafted with fire, flavor, and tradition"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {FEATURED_DISHES.map((item, i) => (
            <ScrollReveal key={item?.id} delay={i * 200} variant="scale">
              <div className="hover-lift rounded-xl overflow-hidden bg-navy-800/50 border border-navy-700/50">
                <MenuCard item={item as MenuItem} variant="featured" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-12 text-center">
            <Link to="/menu" className="btn-gold-outline">
              <span>View Full Menu</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ─── AI Food Showcase (new section) ──────────────────────── */
function AIFoodShowcase() {
  const dishes = [
    { src: '/images/ai-food/ai-dish-16-lg.webp', name: 'Kebab Koobideh', desc: 'Ground beef kebab' },
    { src: '/images/ai-food/ai-dish-06-lg.webp', name: 'Chicken Kebab', desc: 'Grilled chicken thigh' },
    { src: '/images/ai-food/ai-dish-07-lg.webp', name: 'Salmon Kebab', desc: 'Saffron-glazed salmon' },
    { src: '/images/ai-food/ai-dish-05-lg.webp', name: 'Ghorme Sabzi', desc: 'Herb stew with rice' },
    { src: '/images/ai-food/ai-dish-04-lg.webp', name: 'Gheimeh', desc: 'Split pea stew' },
    { src: '/images/ai-food/ai-dish-10-lg.webp', name: 'Zereshk Polo', desc: 'Barberry rice & chicken' },
  ]

  return (
    <section className="bg-navy-950 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading
            title="A Feast for the Eyes"
            subtitle="Every dish tells a story of Persian heritage"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {dishes.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 100} variant={i % 2 === 0 ? 'fade-up' : 'scale'}>
              <div className="group relative overflow-hidden rounded-xl aspect-square hover-zoom">
                <img
                  src={dish.src}
                  alt={dish.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="font-display text-lg font-bold text-gold-500">{dish.name}</h3>
                  <p className="text-sm text-gold-300/70">{dish.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── About Preview ────────────────────────────────────────── */
function AboutPreviewSection() {
  return (
    <section className="bg-warm-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <ScrollReveal variant="slide-left">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl hover-zoom">
              <img
                src="/images/client-interior/client-interior-01-lg.webp"
                alt="Tiara restaurant interior with elegant lighting and modern design"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl border-2 border-gold-500/30 -z-10 hidden md:block" />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-right" delay={200}>
          <div>
            <SectionHeading
              title="Our Story"
              subtitle="Where tradition meets modern elegance"
              align="left"
              theme="light"
            />
            <p className="mt-6 text-warm-700 leading-relaxed text-lg">
              At Tiara Kebabs &amp; More, we bring the rich flavors of Persian cuisine to
              Bedford, Nova Scotia. Every dish is a celebration of centuries-old recipes,
              prepared with fresh ingredients and cooked over open flames just as
              our ancestors intended.
            </p>
            <p className="mt-4 text-warm-700 leading-relaxed">
              From the aromatic saffron rice to our signature koobideh kebabs, each
              bite is a journey through the heart of Iran. Welcome to our table.
            </p>
            <div className="mt-8">
              <Link to="/about" className="btn-navy">
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ─── Video Divider ───────────────────────────────────────── */
function VideoDivider() {
  return (
    <section className="relative h-[50vh] overflow-hidden md:h-[60vh]">
      <VideoBackground
        webmSrc="/videos/ambiance-1.webm"
        mp4Src="/videos/ambiance-1.mp4"
        posterSrc="/videos/ambiance-1-poster.jpg"
      />
      <img
        src="/images/ai-food/ai-dish-11-lg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-950/70" />
      <div className="relative flex h-full items-center justify-center px-4">
        <ScrollReveal variant="scale">
          <blockquote className="text-center">
            <PersianDivider variant="accent" className="mx-auto mb-6" />
            <p className="font-display text-3xl font-bold text-gold-500 md:text-5xl lg:text-6xl">
              Fire, flavor, and tradition.
            </p>
            <p className="mt-4 font-accent text-lg italic text-gold-300/70 md:text-xl">
              — The essence of Persian cuisine
            </p>
            <PersianDivider variant="accent" className="mx-auto mt-6" />
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ─── Menu Highlights (horizontal scroll) ──────────────────── */
function MenuHighlights() {
  const highlights: MenuItem[] = [
    { id: 'h-kebab-barg', name: 'Kebab Barg', price: 31, description: 'Juicy veal fillet mignon', image: '/images/food/kebab-barg', tags: [] },
    { id: 'h-fesenjan', name: 'Fesenjan', price: 19, description: 'Walnut pomegranate stew', image: '/images/food/fesenjan', tags: [] },
    { id: 'h-salmon', name: 'Grilled Salmon', price: 27, description: 'Saffron marinated Atlantic salmon', image: '/images/food/grilled-salmon-kebab', tags: [] },
    { id: 'h-mirza', name: 'Mirza Ghasemi', price: 13, description: 'Grilled eggplant appetizer', image: '/images/food/mirza-ghasemi', tags: [] },
    { id: 'h-ghorme', name: 'Ghorme Sabzi', price: 18, description: 'Rich herb stew', image: '/images/food/ghorme-sabzi', tags: [] },
    { id: 'h-cake', name: 'Saffron Pistachio Cake', price: 8, description: 'Delicate saffron-infused cake', image: '/images/food/saffron-pistachio-cake', tags: [] },
  ]

  return (
    <section className="bg-navy-800 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading
            title="From Our Kitchen"
            subtitle="A taste of what awaits"
          />
        </ScrollReveal>

        <div className="mt-14 flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 100} variant="fade-up">
              <div className="w-60 shrink-0 snap-start md:w-72 group">
                <div className="aspect-square overflow-hidden rounded-xl hover-zoom">
                  {item.image && (
                    <DishImage
                      src={item.image}
                      alt={item.name}
                      sizes="288px"
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-gold-500 group-hover:text-gold-gradient transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-sm text-gold-300/60">{item.description}</p>
                <p className="mt-1 text-sm font-semibold text-gold-500">${item.price}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-10 text-center">
            <Link to="/menu" className="btn-gold-outline">
              <span>See Full Menu</span>
            </Link>
          </div>
        </ScrollReveal>
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
    <section className="bg-warm-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading
            title="What Our Guests Say"
            theme="light"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.author} delay={i * 200} variant="fade-up">
              <div className="hover-lift rounded-2xl border border-warm-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex gap-1 text-gold-500">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg key={j} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-accent text-lg italic text-warm-700 leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-warm-500">
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
    <section className="bg-navy-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading title="Find Us" />
        </ScrollReveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <ScrollReveal variant="slide-left">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                title="Tiara Kebabs & More location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.1!2d-63.667!3d44.729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s640+Brookline+Drive+Bedford+Nova+Scotia!5e0!3m2!1sen!2sca!4v1"
                className="h-72 w-full border-0 md:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={200}>
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-900">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-gold-500">Address</h3>
                  <p className="mt-1 text-gold-300/80">{restaurant.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-900">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-gold-500">Phone</h3>
                  <a
                    href={`tel:${restaurant.phone.replace(/-/g, '')}`}
                    className="mt-1 text-gold-300/80 hover:text-gold-500 transition-colors duration-300"
                  >
                    {restaurant.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-900">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-gold-500">Hours</h3>
                  <p className="mt-1 text-gold-300/80">{restaurant.hours}</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <span>Get Directions</span>
                </a>
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
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background with AI food spread image */}
      <img
        src="/images/ai-food/ai-dish-11-lg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />

      <ScrollReveal variant="scale">
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <PersianDivider variant="accent" className="mx-auto mb-8" />
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            <span className="text-gold-gradient">Ready to experience</span>
            <br />
            <span className="text-gold-500">authentic Persian flavors?</span>
          </h2>
          <p className="mt-4 font-accent text-lg italic text-gold-300/70">
            Join us for an unforgettable dining experience
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href={restaurant.orderUrl} className="btn-gold">
              <span>Order Now</span>
            </a>
            <a
              href={`tel:${restaurant.phone.replace(/-/g, '')}`}
              className="btn-gold-outline"
            >
              <span>Call Us: {restaurant.phone}</span>
            </a>
          </div>
          <PersianDivider variant="accent" className="mx-auto mt-10" />
        </div>
      </ScrollReveal>
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
      <AIFoodShowcase />
      <AboutPreviewSection />
      <MenuHighlights />
      <VideoDivider />
      <TestimonialsSection />
      <LocationSection />
      <FinalCTA />
    </>
  )
}

export default HomePage
