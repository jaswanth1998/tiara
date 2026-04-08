import { cn } from '@/lib/utils'

interface MarqueeItem {
  src: string
  name: string
}

const ITEMS: MarqueeItem[] = [
  { src: '/images/ai-food/ai-dish-16-lg.webp', name: 'Kebab Koobideh' },
  { src: '/images/ai-food/ai-dish-06-lg.webp', name: 'Chicken Kebab' },
  { src: '/images/ai-food/ai-dish-03-lg.webp', name: 'Fesenjan' },
  { src: '/images/ai-food/ai-dish-07-lg.webp', name: 'Salmon Kebab' },
  { src: '/images/ai-food/ai-dish-02-lg.webp', name: 'Doogh' },
  { src: '/images/ai-food/ai-dish-10-lg.webp', name: 'Zereshk Polo' },
  { src: '/images/ai-food/ai-dish-14-lg.webp', name: 'Chocolate Cake' },
  { src: '/images/ai-food/ai-dish-08-lg.webp', name: 'Lamb Chops' },
  { src: '/images/ai-food/ai-dish-05-lg.webp', name: 'Ghorme Sabzi' },
  { src: '/images/ai-food/ai-dish-12-lg.webp', name: 'Saffron Cake' },
]

export function FoodMarquee({ className }: { className?: string }) {
  // Double the items for seamless loop
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className={cn('relative overflow-hidden py-8', className)}>
      {/* Paper-torn edge effect top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-warm-50 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-warm-50 to-transparent z-10" />

      <div className="flex animate-marquee gap-8 will-change-transform">
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="group flex shrink-0 flex-col items-center gap-3"
          >
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-gold-500/30 shadow-lg transition-all duration-500 group-hover:border-gold-500 group-hover:shadow-gold-500/20 md:h-40 md:w-40">
              <img
                src={item.src}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <span className="font-display text-xs uppercase tracking-wider text-warm-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
