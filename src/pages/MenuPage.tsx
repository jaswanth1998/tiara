import { useRef } from 'react'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { Button } from '@/components/ui/button'
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
      {/* Hero */}
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden">
        <img
          src="/images/food/hero-lg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl font-bold text-gold-500 md:text-6xl">
            Our Menu
          </h1>
          <p className="mt-3 font-accent text-lg italic text-gold-300 md:text-xl">
            A Journey Through Authentic Persian Cuisine
          </p>
        </div>
      </section>

      {/* Sticky category tabs */}
      <nav
        className="sticky top-20 z-30 border-b border-navy-600/50 bg-navy-800/95 backdrop-blur-md"
        aria-label="Menu categories"
      >
        <div className="mx-auto max-w-7xl overflow-x-auto scrollbar-none">
          <div className="flex min-w-max gap-1 px-4 py-3">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToCategory(cat.id)}
                className="shrink-0 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gold-300 transition-colors hover:bg-gold-500/10 hover:text-gold-500"
              >
                {cat.name}
              </button>
            ))}
          </div>
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
                className="scroll-mt-36 py-10 first:pt-0"
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
                  <div className="mt-6 rounded-lg border border-gold-500/30 bg-navy-800/50 p-4">
                    <p className="text-sm font-medium text-gold-400">
                      All items are served with a choice of a soft drink
                    </p>
                  </div>
                )}

                <div className={
                  isFamily
                    ? 'mt-6 grid gap-4 md:grid-cols-2'
                    : hasImages
                      ? 'mt-6 grid gap-4 md:grid-cols-2'
                      : 'mt-6 divide-y divide-navy-600/30'
                }>
                  {category.items.map((item) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      variant={isFamily ? 'detailed' : item.image ? 'detailed' : 'compact'}
                    />
                  ))}
                </div>

                <PersianDivider className="mt-10" />
              </section>
            )
          })}
        </div>
      </div>

      {/* Order CTA */}
      <section className="bg-gold-500 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
            Love what you see?
          </h2>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="secondary" className="border-navy-900 bg-navy-900 text-gold-500 hover:bg-navy-800">
              <a href={restaurant.orderUrl}>Order Online</a>
            </Button>
            <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900/10">
              <a href={`tel:${restaurant.phone.replace(/-/g, '')}`}>
                Call to Reserve
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default MenuPage
