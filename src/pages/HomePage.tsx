import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import {
  MapPin, Phone, Clock, ChevronDown,
  Flame, Leaf, Heart, Star,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { PersianDivider } from '@/components/common/PersianDivider'
import { VideoBackground } from '@/components/common/VideoBackground'
import { FoodMarquee } from '@/components/common/FoodMarquee'
import { ParallaxSection } from '@/components/common/ParallaxSection'
import { useParallax } from '@/hooks/useParallax'
import { restaurant } from '@/data/restaurant'

/* ─── Hero (Amrit-style: split typography + rating badge) ──── */
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

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Logo */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <img
            src="/images/logo/logo-icon.png"
            alt=""
            className="mx-auto mb-6 h-20 w-auto drop-shadow-[0_0_30px_rgba(197,165,90,0.3)] md:h-24"
            aria-hidden="true"
          />
        </div>

        {/* Split headline — Amrit style dramatic lines */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <h1 className="font-display font-bold tracking-tight">
            <span className="block text-5xl text-gold-gradient md:text-7xl lg:text-8xl">Tiara</span>
            <span className="block text-4xl text-gold-gradient md:text-6xl lg:text-7xl mt-1">Kebabs &amp; More</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <p className="mt-5 font-accent text-xl italic text-gold-300/90 md:text-2xl lg:text-3xl">
            A Journey Through Authentic Persian Cuisine
          </p>
        </div>

        {/* Location + Established line — Amrit style */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gold-500/60">
            Serving Bedford, Nova Scotia &bull; Est. 2024
          </p>
        </div>

        {/* Google rating badge — Amrit style */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
          <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-navy-900/60 px-5 py-2.5 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gold-300">4.8/5</span>
            <span className="text-xs text-gold-300/60">&mdash; Loved by our guests</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1.3s', animationFillMode: 'both' }}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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

/* ─── About Section (Amrit-style: "The Spirit of Persian Dining") ─── */
function SpiritSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text */}
          <ScrollReveal variant="slide-left">
            <div className="space-y-6">
              <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-500/70">
                Welcome to Tiara
              </p>
              <h2 className="font-display text-3xl font-bold text-gold-500 md:text-5xl leading-tight">
                The Spirit of<br />
                <span className="text-gold-300/80">Persian Dining</span>
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
                bite is a journey through the culinary traditions of Iran. Welcome to our table &mdash;
                where every meal is a royal experience.
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Link to="/about" className="btn-gold">
                  <span>About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Hours card */}
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
                      <span className="text-gold-300/70">11:00 AM – 9:00 PM</span>
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
    </section>
  )
}

/* ─── Signature Plates Grid (Amrit-style card grid) ────────── */
function SignaturePlatesGrid() {
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
    <section className="bg-warm-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Signature Plates"
            subtitle="Handcrafted with fire, flavor, and tradition"
            theme="light"
          />
        </ScrollReveal>

        {/* Amrit-style card grid: 4 cols desktop, 2 cols mobile */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {dishes.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 80} variant="fade-up">
              <div className="group overflow-hidden rounded-2xl border border-warm-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-gold-500/40">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Price badge */}
                  <div className="absolute top-3 right-3 rounded-full bg-navy-900/90 px-3 py-1 text-sm font-bold text-gold-500 backdrop-blur-sm">
                    ${dish.price}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-display text-lg font-bold text-warm-900 transition-colors duration-300 group-hover:text-gold-600">
                    {dish.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-warm-500 leading-relaxed line-clamp-2">
                    {dish.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-12 text-center">
            <Link to="/menu" className="btn-navy">
              <span>View Full Menu</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ─── Heritage Section (Amrit-style: text left, image right) ── */
function HeritageSection() {
  const { ref: imgRef, style: imgStyle } = useParallax(0.15)

  return (
    <section className="bg-navy-900 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Heritage text */}
          <ScrollReveal variant="slide-left">
            <div className="space-y-6">
              <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-500/70">
                Our Heritage
              </p>
              <h2 className="font-display text-3xl font-bold text-gold-500 md:text-5xl leading-tight">
                Recipes Passed Down<br />
                <span className="text-gold-300/80">Through Generations</span>
              </h2>
              <div className="h-px w-20 bg-gold-500/40" />
              <p className="text-lg leading-relaxed text-gold-300/80">
                Our culinary roots trace back to the ancient kitchens of Persia, where
                open-flame grilling and aromatic spice blending were elevated to an art form.
                Each dish at Tiara carries the soul of these time-honored traditions &mdash;
                from the careful marination of our kebabs to the slow simmering of our stews.
              </p>
              <p className="leading-relaxed text-gold-300/70">
                We believe food is more than nourishment; it&rsquo;s a bridge between cultures,
                a thread connecting past to present. When you dine at Tiara, you&rsquo;re not just
                having a meal &mdash; you&rsquo;re experiencing centuries of Persian hospitality.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="btn-gold">
                  <span>Reserve a Table</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Large food image with inline parallax */}
          <ScrollReveal variant="slide-right" delay={200}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div ref={imgRef} style={imgStyle} className="will-change-transform">
                  <img
                    src="/images/ai-food/ai-dish-09-lg.webp"
                    alt="Kebab Sultani — royal duo of lamb fillet and ground lamb on saffron rice"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-xl border-2 border-gold-500/20 -z-10 hidden md:block" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl border-2 border-gold-500/20 -z-10 hidden md:block" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ─── Services Section (Amrit-style: 3 feature cards with icons) ── */
function ServicesSection() {
  const services = [
    {
      icon: Flame,
      title: 'Open Flame Grilling',
      desc: 'Every kebab is cooked over real charcoal fire, producing that authentic smoky flavor and perfect char that defines Persian cuisine.',
      img: '/images/ai-food/ai-dish-11-lg.webp',
    },
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      desc: 'We source locally from Nova Scotia farms and purveyors, ensuring only the freshest meats and seasonal produce reach your plate.',
      img: '/images/ai-food/ai-dish-06-lg.webp',
    },
    {
      icon: Heart,
      title: 'Family Recipes',
      desc: 'Our dishes are crafted from generations-old recipes passed down through our family, preserving the authentic taste of Persian tradition.',
      img: '/images/ai-food/ai-dish-02-lg.webp',
    },
  ]

  return (
    <section className="bg-warm-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <SectionHeading
            title="The Tiara Difference"
            subtitle="What makes our cuisine truly exceptional"
            theme="light"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 150} variant="fade-up">
              <div className="group overflow-hidden rounded-2xl border border-warm-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                  {/* Icon badge overlapping bottom */}
                  <div className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-navy-900 shadow-lg transition-transform duration-500 group-hover:scale-110">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-10">
                  <h3 className="font-display text-xl font-bold text-warm-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-warm-500 leading-relaxed">
                    {service.desc}
                  </p>
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

/* ─── Rooted in Experience (Amrit-style: narrative + interior photo) ─ */
function RootedSection() {
  return (
    <section className="bg-navy-950 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Large interior image */}
          <ScrollReveal variant="slide-left">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/client-interior/client-interior-01-lg.webp"
                alt="Tiara restaurant interior with elegant lighting and warm Persian decor"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Right: About narrative */}
          <ScrollReveal variant="slide-right" delay={200}>
            <div className="space-y-6">
              <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-500/70">
                Rooted in Experience
              </p>
              <h2 className="font-display text-3xl font-bold text-gold-500 md:text-5xl leading-tight">
                More Than a Restaurant &mdash;<br />
                <span className="text-gold-300/80">A Gathering Place</span>
              </h2>
              <div className="h-px w-20 bg-gold-500/40" />
              <p className="text-lg leading-relaxed text-gold-300/80">
                Nestled in Bedford&rsquo;s Brookline Drive, Tiara Kebabs &amp; More was born from
                a simple dream: to share the warmth of Persian hospitality with
                the Nova Scotia community.
              </p>
              <p className="leading-relaxed text-gold-300/70">
                Our doors are open seven days a week, welcoming families, friends,
                and food lovers to gather around a table laden with flavor. Whether
                it&rsquo;s a weeknight dinner or a weekend celebration, we serve every meal
                with the same care and pride &mdash; as if you were a guest in our home.
              </p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Link to="/about" className="btn-gold">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/gallery" className="btn-gold-outline">
                  <span>View Gallery</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ─── Location 3-Column ──────────────────────────────────── */
function LocationSection() {
  return (
    <section className="bg-navy-950 py-20 md:py-28">
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

/* ─── Final CTA (Parallax background for dramatic ending) ── */
function FinalCTA() {
  return (
    <ParallaxSection
      imageSrc="/images/ai-food/ai-dish-04-lg.webp"
      speed={0.35}
      height="md"
      overlayOpacity={0.8}
      overlayGradient="none"
    >
      <ScrollReveal variant="scale">
        <div className="text-center">
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
    </ParallaxSection>
  )
}

/* ─── Parallax Divider: Fire, Flavor & Tradition ─────────── */
function ParallaxDividerFlavor() {
  return (
    <ParallaxSection
      imageSrc="/images/ai-food/ai-dish-11-lg.webp"
      speed={0.3}
      height="sm"
      overlayGradient="both"
    >
      <ScrollReveal variant="scale">
        <blockquote className="text-center">
          <PersianDivider variant="accent" className="mx-auto mb-6" />
          <p className="font-display text-3xl font-bold text-gold-500 md:text-5xl">
            Fire, Flavor &amp; Tradition
          </p>
          <p className="mt-3 font-accent text-lg italic text-gold-300/60">
            — The essence of Persian cuisine
          </p>
          <PersianDivider variant="accent" className="mx-auto mt-6" />
        </blockquote>
      </ScrollReveal>
    </ParallaxSection>
  )
}

/* ─── Parallax Stats Section ─────────────────────────────── */
function ParallaxStats() {
  return (
    <ParallaxSection
      imageSrc="/images/ai-food/ai-dish-04-lg.webp"
      speed={0.4}
      height="sm"
      overlayOpacity={0.75}
      overlayGradient="none"
    >
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {[
          { value: '50+', label: 'Menu Items' },
          { value: '100%', label: 'Halal Certified' },
          { value: '7', label: 'Days a Week' },
          { value: '5★', label: 'Customer Rating' },
        ].map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 150} variant="scale">
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-gold-500 md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-gold-300/60">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ParallaxSection>
  )
}

/* ─── Parallax Quote Section ─────────────────────────────── */
function ParallaxQuote() {
  return (
    <ParallaxSection
      imageSrc="/images/client-interior/client-interior-03-lg.webp"
      speed={0.25}
      height="sm"
      overlayGradient="both"
    >
      <ScrollReveal variant="fade-up">
        <div className="text-center">
          <p className="font-accent text-2xl italic text-gold-300/90 md:text-4xl leading-relaxed">
            &ldquo;Where every meal is a royal experience&rdquo;
          </p>
          <div className="mt-4 h-px w-20 mx-auto bg-gold-500/30" />
          <p className="mt-4 text-sm uppercase tracking-widest text-gold-500/60">Tiara Kebabs &amp; More</p>
        </div>
      </ScrollReveal>
    </ParallaxSection>
  )
}

/* ─── HomePage ───────────────────────────────────────────── */
export function HomePage() {
  useDocumentTitle('')
  return (
    <>
      <HeroSection />
      <SpiritSection />
      <SignaturePlatesGrid />
      <ParallaxDividerFlavor />
      <HeritageSection />
      <ServicesSection />
      <ParallaxStats />
      <FoodMarqueeStrip />
      <RootedSection />
      <ParallaxQuote />
      <LocationSection />
      <FinalCTA />
    </>
  )
}

export default HomePage
