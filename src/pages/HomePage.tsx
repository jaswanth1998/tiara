import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import {
  MapPin, Phone, Clock, ChevronDown,
  UtensilsCrossed, Truck, CalendarCheck, Store,
  Flame, Leaf, Heart, Star, ChefHat, Award,
} from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { PersianDivider } from '@/components/common/PersianDivider'
import { VideoBackground } from '@/components/common/VideoBackground'
import { FoodMarquee } from '@/components/common/FoodMarquee'
import { restaurant } from '@/data/restaurant'

/* ─── Hero ─────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <VideoBackground
        webmSrc="/videos/hero-bg.webm"
        mp4Src="/videos/hero-bg.mp4"
        posterSrc="/videos/hero-bg-poster.jpg"
      />
      <img
        src="/images/food/hero-lg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/50 to-navy-950/90" />

      {/* Floating gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 h-1 w-1 rounded-full bg-gold-500/30 animate-float" />
        <div className="absolute top-40 right-20 h-1.5 w-1.5 rounded-full bg-gold-500/20 animate-float-slow" />
        <div className="absolute bottom-40 left-1/4 h-1 w-1 rounded-full bg-gold-500/25 animate-float-delay" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gold-500/50">Scroll</span>
          <ChevronDown className="h-6 w-6 text-gold-500/50" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  )
}

/* ─── About + Hours Card (Nawabs-style side-by-side) ──────── */
function AboutWithHours() {
  return (
    <section className="bg-navy-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
          {/* Left: About content — 3 cols */}
          <div className="lg:col-span-3">
            <ScrollReveal variant="slide-left">
              <div className="space-y-6">
                <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-500/70">
                  Welcome to Tiara
                </p>
                <h2 className="font-display text-3xl font-bold text-gold-500 md:text-5xl leading-tight">
                  Authentic Persian Cuisine<br />
                  <span className="text-gold-300/80">in Bedford, Nova Scotia</span>
                </h2>
                <div className="h-px w-20 bg-gold-500/40" />
                <p className="text-lg leading-relaxed text-gold-300/80">
                  At Tiara Kebabs &amp; More, we bring the rich flavors of Persian cuisine to
                  the heart of Bedford. Every dish is a celebration of centuries-old recipes,
                  prepared with fresh ingredients and cooked over open flames just as
                  our ancestors intended.
                </p>
                <p className="leading-relaxed text-gold-300/70">
                  From aromatic saffron rice to our signature koobideh kebabs, each
                  bite is a journey through the culinary traditions of Iran. Welcome to our table —
                  where every meal is a royal experience.
                </p>
                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                  <Link to="/about" className="btn-gold">
                    <span>Our Story</span>
                  </Link>
                  <Link to="/menu" className="btn-gold-outline">
                    <span>View Menu</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Hours card — 2 cols */}
          <div className="lg:col-span-2">
            <ScrollReveal variant="slide-right" delay={200}>
              <div className="relative overflow-hidden rounded-2xl border border-gold-500/20 bg-navy-800/60 p-8 backdrop-blur-sm">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 h-12 w-12 border-t-2 border-l-2 border-gold-500/30 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-gold-500/30 rounded-br-2xl" />

                <div className="text-center space-y-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/10">
                    <Clock className="h-8 w-8 text-gold-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gold-500">Opening Hours</h3>
                  <div className="h-px w-full bg-gold-500/20" />

                  <div className="space-y-3 text-sm">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex items-center justify-between">
                        <span className="font-medium text-gold-300">{day}</span>
                        <span className="flex-1 mx-3 border-b border-dotted border-gold-500/20" />
                        <span className="text-gold-300/70">11:00 AM – 9:30 PM</span>
                      </div>
                    ))}
                  </div>

                  <div className="h-px w-full bg-gold-500/20" />
                  <a
                    href={`tel:${restaurant.phone.replace(/-/g, '')}`}
                    className="flex items-center justify-center gap-2 text-gold-500 transition-colors hover:text-gold-400"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-semibold">{restaurant.phone}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Service Cards ───────────────────────────────────────── */
function ServiceCards() {
  const services = [
    { icon: UtensilsCrossed, label: 'Dine-in', desc: 'Elegant atmosphere with authentic Persian ambiance' },
    { icon: Store, label: 'Takeout', desc: 'Quick pickup of your favorite dishes' },
    { icon: Truck, label: 'Delivery', desc: 'Fresh food delivered right to your door' },
    { icon: CalendarCheck, label: 'Reservations', desc: 'Book your table for a special evening' },
  ]

  return (
    <section className="bg-warm-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.label} delay={i * 100} variant="fade-up">
              <div className="group relative overflow-hidden rounded-2xl border border-warm-200 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:border-gold-500/40 hover:shadow-lg hover:-translate-y-1">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10 text-gold-600 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-navy-900">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-warm-900">{service.label}</h3>
                <p className="mt-2 text-sm text-warm-500 leading-relaxed">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Signature Dishes (circular images + dotted price lines) ─ */
function SignatureDishes() {
  const dishes = [
    { name: 'Kebab Koobideh', price: 25, desc: 'Ground lamb & beef, saffron rice, grilled tomato', img: '/images/ai-food/ai-dish-16-lg.webp' },
    { name: 'Kebab Barg', price: 31, desc: 'Veal fillet mignon, marinated in spices', img: '/images/ai-food/ai-dish-01-lg.webp' },
    { name: 'Lamb Chops', price: 41, desc: 'Nova Scotia lamb, traditionally seasoned', img: '/images/ai-food/ai-dish-08-lg.webp' },
    { name: 'Grilled Salmon', price: 27, desc: 'Saffron-marinated Atlantic salmon', img: '/images/ai-food/ai-dish-07-lg.webp' },
    { name: 'Ghorme Sabzi', price: 18, desc: 'Rich herb stew with kidney beans & lime', img: '/images/ai-food/ai-dish-05-lg.webp' },
    { name: 'Fesenjan', price: 19, desc: 'Walnut pomegranate stew with chicken', img: '/images/ai-food/ai-dish-03-lg.webp' },
    { name: 'Zereshk Polo', price: 18, desc: 'Barberry rice with saffron chicken', img: '/images/ai-food/ai-dish-10-lg.webp' },
    { name: 'Kebab Sultani', price: 41, desc: 'Royal duo of lamb fillet & ground lamb', img: '/images/ai-food/ai-dish-09-lg.webp' },
  ]

  return (
    <section className="bg-navy-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Our Signature Dishes"
            subtitle="Handcrafted with fire, flavor, and tradition"
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {dishes.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 80} variant="fade-up">
              <div className="group flex items-center gap-5">
                {/* Circular image */}
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-gold-500/30 shadow-lg transition-all duration-500 group-hover:border-gold-500 group-hover:shadow-gold-500/20 md:h-24 md:w-24">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Name + dotted line + price */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <h3 className="shrink-0 font-display text-lg font-bold text-gold-500 transition-colors duration-300 group-hover:text-gold-400 md:text-xl">
                      {dish.name}
                    </h3>
                    <span className="flex-1 border-b-2 border-dotted border-gold-500/20 mb-1" />
                    <span className="shrink-0 font-display text-lg font-bold text-gold-500 md:text-xl">
                      ${dish.price}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gold-300/60 line-clamp-1">{dish.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-14 text-center">
            <Link to="/menu" className="btn-gold">
              <span>View Full Menu</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ─── Parallax Stats Section ─────────────────────────────── */
function ParallaxStats() {
  const stats = [
    { value: '50+', label: 'Menu Items', icon: ChefHat },
    { value: '100%', label: 'Halal Certified', icon: Award },
    { value: '7', label: 'Days a Week', icon: Clock },
    { value: '5★', label: 'Customer Rating', icon: Star },
  ]

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <img
        src="/images/ai-food/ai-dish-11-lg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-950/85 backdrop-blur-[2px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 150} variant="scale">
              <div className="group text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/30 bg-navy-900/60 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-500/10">
                  <stat.icon className="h-7 w-7 text-gold-500" />
                </div>
                <p className="mt-4 font-display text-4xl font-bold text-gold-500 md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider text-gold-300/60">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Experience Section (features + image) ──────────────── */
function ExperienceSection() {
  const features = [
    { icon: Flame, title: 'Open Flame Grilling', desc: 'All kebabs cooked over real charcoal fire for authentic smoky flavor' },
    { icon: Leaf, title: 'Fresh Ingredients', desc: 'Locally sourced Nova Scotia meats and seasonal produce' },
    { icon: Heart, title: 'Family Recipes', desc: 'Generations-old recipes from the heart of Persian tradition' },
    { icon: Award, title: '100% Halal', desc: 'All our meats are certified halal and prepared with care' },
  ]

  return (
    <section className="bg-warm-50 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Image collage */}
          <ScrollReveal variant="slide-left">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/client-interior/client-interior-01-lg.webp"
                  alt="Tiara restaurant interior with elegant lighting"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating small image */}
              <div className="absolute -bottom-6 -right-4 h-32 w-32 overflow-hidden rounded-xl border-4 border-warm-50 shadow-xl md:h-40 md:w-40 hidden md:block">
                <img
                  src="/images/ai-food/ai-dish-16-lg.webp"
                  alt="Kebab Koobideh"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-xl border-2 border-gold-600/30 -z-10 hidden md:block" />
            </div>
          </ScrollReveal>

          {/* Right: Features list */}
          <div>
            <ScrollReveal variant="slide-right">
              <div className="mb-10">
                <p className="font-display text-sm uppercase tracking-[0.3em] text-warm-500">
                  The Tiara Experience
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-warm-900 md:text-4xl lg:text-5xl">
                  Why Our Guests<br />Keep Coming Back
                </h2>
                <div className="mt-4 h-px w-20 bg-warm-300" />
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 120} variant="fade-up">
                  <div className="group flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-600 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-warm-900">{feature.title}</h3>
                      <p className="mt-1 text-sm text-warm-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={500}>
              <div className="mt-10">
                <Link to="/about" className="btn-navy">
                  <span>Learn More About Us</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ────────────────────────────────────────── */
function TestimonialsSection() {
  const reviews = [
    {
      quote: 'The best Persian food in Nova Scotia! The kebab koobideh is absolutely incredible. The flavors are rich and authentic.',
      author: 'Sarah M.',
      rating: 5,
    },
    {
      quote: 'Beautiful restaurant with amazing food. The lamb chops were cooked to perfection. Will definitely be coming back!',
      author: 'James R.',
      rating: 5,
    },
    {
      quote: 'Authentic flavors that remind me of home. The ghorme sabzi is a must-try! My family loves this place.',
      author: 'Maryam K.',
      rating: 5,
    },
  ]

  return (
    <section className="bg-navy-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading
            title="What Our Guests Say"
            subtitle="Hear from those who've experienced our cuisine"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.author} delay={i * 200} variant="fade-up">
              <div className="group relative overflow-hidden rounded-2xl border border-navy-700/50 bg-navy-800/50 p-8 transition-all duration-500 hover:border-gold-500/30 hover:-translate-y-1">
                {/* Quote mark */}
                <span className="absolute -top-2 left-6 font-display text-7xl text-gold-500/10 leading-none">&ldquo;</span>

                <div className="relative">
                  <div className="mb-4 flex gap-1 text-gold-500">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="font-accent text-lg italic text-gold-300/80 leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gold-500/20" />
                    <p className="text-sm font-semibold uppercase tracking-wider text-gold-500/60">
                      {review.author}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Food Marquee Strip ─────────────────────────────────── */
function FoodMarqueeStrip() {
  return (
    <section className="bg-warm-50 py-6 overflow-hidden">
      <FoodMarquee />
    </section>
  )
}

/* ─── Location 3-Column ──────────────────────────────────── */
function LocationSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading title="Visit Us" subtitle="We'd love to welcome you" />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {/* Map */}
          <ScrollReveal variant="fade-up" delay={0}>
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-navy-700/50 md:col-span-1 h-full min-h-[280px]">
              <iframe
                title="Tiara Kebabs & More location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.1!2d-63.667!3d44.729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s640+Brookline+Drive+Bedford+Nova+Scotia!5e0!3m2!1sen!2sca!4v1"
                className="h-full w-full border-0 min-h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal variant="fade-up" delay={150}>
            <div className="space-y-6 rounded-2xl border border-navy-700/50 bg-navy-800/40 p-8">
              <h3 className="font-display text-xl font-bold text-gold-500">Contact Info</h3>
              <div className="space-y-5">
                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-900">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold-300">Address</p>
                    <p className="text-sm text-gold-300/60">{restaurant.address}</p>
                  </div>
                </div>
                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-900">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold-300">Phone</p>
                    <a href={`tel:${restaurant.phone.replace(/-/g, '')}`} className="text-sm text-gold-300/60 hover:text-gold-500 transition-colors">
                      {restaurant.phone}
                    </a>
                  </div>
                </div>
                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-900">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold-300">Hours</p>
                    <p className="text-sm text-gold-300/60">{restaurant.hours}</p>
                  </div>
                </div>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center"
              >
                <span>Get Directions</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Interior image */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="overflow-hidden rounded-2xl shadow-2xl h-full min-h-[280px]">
              <img
                src="/images/client-interior/client-interior-02-lg.webp"
                alt="Inside Tiara restaurant — warm modern Persian decor"
                className="h-full w-full object-cover min-h-[280px]"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ─── Final CTA ──────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <VideoBackground
        webmSrc="/videos/ambiance-1.webm"
        mp4Src="/videos/ambiance-1.mp4"
        posterSrc="/videos/ambiance-1-poster.jpg"
      />
      <img
        src="/images/ai-food/ai-dish-04-lg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />

      <ScrollReveal variant="scale">
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <PersianDivider variant="accent" className="mx-auto mb-8" />
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            <span className="text-gold-gradient">Ready to Experience</span>
            <br />
            <span className="text-gold-500">Authentic Persian Flavors?</span>
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

/* ─── HomePage ───────────────────────────────────────────── */
export function HomePage() {
  useDocumentTitle('')
  return (
    <>
      <HeroSection />
      <AboutWithHours />
      <ServiceCards />
      <SignatureDishes />
      <ParallaxStats />
      <ExperienceSection />
      <TestimonialsSection />
      <FoodMarqueeStrip />
      <LocationSection />
      <FinalCTA />
    </>
  )
}

export default HomePage
