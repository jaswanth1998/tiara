import { Link } from 'react-router-dom'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { Flame, Leaf, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { restaurant } from '@/data/restaurant'

export function AboutPage() {
  useDocumentTitle('About')
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden">
        <img
          src="/images/interior/interior-ref-lg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl font-bold text-gold-500 md:text-6xl">
            Our Story
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-warm-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
          <ScrollReveal>
            <div>
              <SectionHeading
                title="The Heart of Persian Cuisine"
                subtitle="From Tehran to Bedford"
                align="left"
                theme="light"
              />
              <div className="mt-8 space-y-4 text-warm-700 leading-relaxed">
                <p>
                  Tiara Kebabs & More was born from a deep passion for sharing the rich,
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
                  you dine with us, you're not just eating — you're experiencing a
                  culinary tradition that stretches back thousands of years.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/ambiance/ambiance-07-lg.webp"
                alt="Persian food spread beautifully arranged on a dark table"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interior Showcase */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Space"
              subtitle="Modern elegance meets traditional warmth"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {['interior-01', 'interior-03', 'interior-04'].map((img, i) => (
              <ScrollReveal key={img} delay={i * 100}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={`/images/interior/${img}-lg.webp`}
                    alt="Tiara restaurant interior"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-warm-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Flame, title: 'Authentic Recipes', desc: 'Centuries-old Persian recipes cooked over open flames, just as our ancestors intended.' },
              { icon: Leaf, title: 'Fresh Ingredients', desc: 'We source the freshest local ingredients combined with aromatic saffron, sumac, and pomegranate.' },
              { icon: Heart, title: 'Warm Hospitality', desc: 'Every guest is family. We take pride in creating an unforgettable dining experience.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/10">
                    <item.icon className="h-8 w-8 text-gold-500" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-warm-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-warm-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-500 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
            Join us for an unforgettable dining experience
          </h2>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="secondary" className="border-navy-900 bg-navy-900 text-gold-500 hover:bg-navy-800">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900/10">
              <a href={`tel:${restaurant.phone.replace(/-/g, '')}`}>
                Make a Reservation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
