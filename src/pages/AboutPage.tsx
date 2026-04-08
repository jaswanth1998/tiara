import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { Flame, Leaf, Heart } from 'lucide-react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { PersianDivider } from '@/components/common/PersianDivider'
import { VideoBackground } from '@/components/common/VideoBackground'
import { restaurant } from '@/data/restaurant'

export function AboutPage() {
  useDocumentTitle('About')
  return (
    <>
      {/* Hero with client interior photo */}
      <section className="relative flex h-[45vh] min-h-[350px] items-center justify-center overflow-hidden">
        <img
          src="/images/client-interior/client-interior-02-lg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/40 to-navy-900" />
        <div className="relative z-10 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h1 className="font-display text-4xl font-bold md:text-6xl">
              <span className="text-gold-gradient">Our Story</span>
            </h1>
            <p className="mt-3 font-accent text-lg italic text-gold-300/70">
              The heart behind every dish
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-warm-50 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
          <ScrollReveal variant="slide-left">
            <div>
              <SectionHeading
                title="The Heart of Persian Cuisine"
                subtitle="From Tehran to Bedford"
                align="left"
                theme="light"
              />
              <div className="mt-8 space-y-5 text-warm-700 leading-relaxed text-lg">
                <p>
                  Tiara Kebabs &amp; More was born from a deep passion for sharing the rich,
                  vibrant flavors of Persian cuisine with the community of Bedford, Nova Scotia.
                  Our journey began with a simple belief: that authentic food has the power
                  to bring people together.
                </p>
                <p>
                  Every dish on our menu tells a story — from the centuries-old recipes
                  for Ghorme Sabzi and Fesenjan, passed down through generations, to our
                  signature kebabs grilled over open flames using traditional techniques
                  perfected over millennia.
                </p>
                <p>
                  We source the freshest ingredients, use aromatic saffron, and take the
                  time to prepare every meal with the care and attention it deserves. When
                  you dine with us, you&apos;re not just eating — you&apos;re experiencing a
                  culinary tradition that stretches back thousands of years.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={200}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl hover-zoom">
                <img
                  src="/images/ai-food/ai-dish-11-lg.webp"
                  alt="Full spread of Persian dishes beautifully arranged"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl border-2 border-gold-500/30 -z-10 hidden md:block" />
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-xl border-2 border-warm-300/30 -z-10 hidden md:block" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interior Showcase — Real client photos */}
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Space"
              subtitle="Modern elegance meets traditional warmth"
            />
          </ScrollReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { src: '/images/client-interior/client-interior-01-lg.webp', alt: 'Blue velvet chairs and ambient wall lighting' },
              { src: '/images/client-interior/client-interior-03-lg.webp', alt: 'Restaurant view from entrance' },
              { src: '/images/client-interior/client-interior-04-lg.webp', alt: 'Dining area with wood paneling' },
            ].map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 150} variant="scale">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover-zoom group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <VideoBackground
          webmSrc="/videos/food-prep.webm"
          mp4Src="/videos/food-prep.mp4"
          posterSrc="/videos/food-prep-poster.jpg"
        />
        <img
          src="/images/ai-food/ai-dish-08-lg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-950/60" />
        <div className="relative flex h-full items-center justify-center">
          <ScrollReveal variant="scale">
            <blockquote className="text-center px-4">
              <PersianDivider variant="accent" className="mx-auto mb-6" />
              <p className="font-display text-2xl font-bold text-gold-500 md:text-4xl lg:text-5xl">
                Every meal is a celebration
              </p>
              <PersianDivider variant="accent" className="mx-auto mt-6" />
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-warm-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { icon: Flame, title: 'Authentic Recipes', desc: 'Centuries-old Persian recipes cooked over open flames, just as our ancestors intended.' },
              { icon: Leaf, title: 'Fresh Ingredients', desc: 'We source the freshest local ingredients combined with aromatic saffron, sumac, and pomegranate.' },
              { icon: Heart, title: 'Warm Hospitality', desc: 'Every guest is family. We take pride in creating an unforgettable dining experience.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 200} variant="fade-up">
                <div className="text-center group">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/10 transition-all duration-500 group-hover:bg-gold-500/20 group-hover:scale-110">
                    <item.icon className="h-9 w-9 text-gold-500" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-warm-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-warm-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]" />
        </div>
        <ScrollReveal variant="scale">
          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
              Join us for an unforgettable dining experience
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/menu" className="btn-navy">
                <span>View Menu</span>
              </Link>
              <a
                href={`tel:${restaurant.phone.replace(/-/g, '')}`}
                className="btn-gold-outline !border-navy-900 !text-navy-900 hover:!text-gold-300"
              >
                <span>Make a Reservation</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}

export default AboutPage
