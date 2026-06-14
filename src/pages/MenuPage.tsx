import { useRef } from 'react'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { MenuCard } from '@/components/common/MenuCard'
import { PersianDivider } from '@/components/common/PersianDivider'
import { menuCategories } from '@/data/menu'
import { restaurant } from '@/data/restaurant'

export function MenuPage() {
  useDocumentTitle('Menu')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const scrollToCategory = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Hero with AI food spread */}
      <section className="relative flex h-[45vh] min-h-[340px] items-end justify-center overflow-hidden pb-12">
        <img
          src="/images/ai-food/ai-dish-11-lg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/40 to-navy-900" />
        <div className="relative z-10 text-center pt-32">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h1 className="font-display text-4xl font-bold md:text-6xl">
              <span className="text-gold-gradient">Our Menu</span>
            </h1>
            <p className="mt-3 font-accent text-lg italic text-gold-300/70 md:text-xl">
              A Journey Through Authentic Persian Cuisine
            </p>
          </div>
        </div>
      </section>

      {/* Sticky category tabs */}
      <nav
        className="sticky top-[56px] z-30 border-b border-navy-600/50 bg-navy-800/95 backdrop-blur-md"
        aria-label="Menu categories"
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="overflow-x-auto scrollbar-none">
            <div className="flex min-w-max gap-1 px-4 py-3 pr-10">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => scrollToCategory(cat.id)}
                  className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gold-300 transition-all duration-300 hover:bg-gold-500/10 hover:text-gold-500 md:px-5"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
          {/* Right fade hint for scroll */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-navy-800/95 to-transparent md:hidden" />
        </div>
      </nav>

      {/* Menu sections */}
      <div className="bg-navy-900 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          {menuCategories.map((category) => {
            const isFamily = category.id === 'family-kebabs'
            const hasImages = category.items.some((item) => item.image)

            return (
              <section
                key={category.id}
                ref={(el) => { sectionRefs.current[category.id] = el }}
                className="scroll-mt-28 py-10 first:pt-0"
              >
                <ScrollReveal>
                  <SectionHeading
                    title={category.name}
                    subtitle={category.subtitle}
                    align="left"
                  />
                  {category.note && (
                    <p className="mt-2 font-accent text-sm italic text-gold-300/60">
                      {category.note}
                    </p>
                  )}
                </ScrollReveal>

                {/* Lunch Menu callout */}
                {category.id === 'lunch-menu' && (
                  <ScrollReveal delay={100}>
                    <div className="mt-6 rounded-xl border border-gold-500/30 bg-navy-800/50 p-5 animate-glow-pulse">
                      <p className="text-sm font-medium text-gold-400">
                        All items are served with a choice of a soft drink
                      </p>
                    </div>
                  </ScrollReveal>
                )}

                <div className={
                  isFamily
                    ? 'mt-6 grid gap-4 md:grid-cols-2'
                    : hasImages
                      ? 'mt-6 grid gap-4 md:grid-cols-2'
                      : 'mt-6 divide-y divide-navy-600/30'
                }>
                  {category.items.map((item, i) => (
                    <ScrollReveal key={item.id} delay={i * 50} variant="fade-up">
                      <MenuCard
                        item={item}
                        variant={isFamily ? 'detailed' : item.image ? 'detailed' : 'compact'}
                      />
                    </ScrollReveal>
                  ))}
                </div>

                <PersianDivider className="mt-10" />
              </section>
            )
          })}
        </div>
      </div>

      {/* Order CTA */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]" />
        </div>
        <ScrollReveal variant="scale">
          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
              Love what you see?
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href={restaurant.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-navy">
                <span>Order Online</span>
              </a>
              <a
                href={`tel:${restaurant.phone.replace(/-/g, '')}`}
                className="btn-gold-outline !border-navy-900 !text-navy-900 hover:!text-gold-300"
              >
                <span>Call to Reserve</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}

export default MenuPage
