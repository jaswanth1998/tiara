import { cn } from '@/lib/utils'
import { DishImage } from './DishImage'
import { PriceTag } from './PriceTag'
import type { MenuItem } from '@/types'

export interface MenuCardProps {
  item: MenuItem
  variant?: 'compact' | 'featured' | 'detailed'
  className?: string
}

export function MenuCard({ item, variant = 'compact', className }: MenuCardProps) {
  if (variant === 'featured' && item.image) {
    return (
      <article
        className={cn(
          'group relative overflow-hidden rounded-lg',
          className,
        )}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <DishImage
            src={item.image}
            alt={item.name}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3 className="font-display text-xl font-bold text-gold-500 md:text-2xl">
            {item.name}
          </h3>
          <p className="mt-1 font-accent text-sm italic text-gold-300 line-clamp-2">
            {item.description}
          </p>
          <PriceTag price={item.price} priceAlt={item.priceAlt} className="mt-2" />
        </div>
      </article>
    )
  }

  if (variant === 'detailed' && item.image) {
    return (
      <article
        className={cn(
          'flex gap-4 rounded-lg border border-navy-600/50 bg-navy-800/50 p-4',
          className,
        )}
      >
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md md:h-32 md:w-32">
          <DishImage src={item.image} alt={item.name} sizes="128px" />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-bold text-gold-500">
              {item.name}
            </h3>
            <PriceTag price={item.price} priceAlt={item.priceAlt} className="shrink-0" />
          </div>
          <p className="mt-1 font-accent text-sm italic text-gold-300 line-clamp-2">
            {item.description}
          </p>
          {item.servingSize && (
            <span className="mt-2 inline-block w-fit rounded-full bg-gold-500/10 px-3 py-0.5 text-xs font-medium text-gold-400">
              Serves {item.servingSize}
            </span>
          )}
        </div>
      </article>
    )
  }

  // compact (default)
  return (
    <article className={cn('py-3', className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <h3 className="font-display text-base font-bold text-gold-500 md:text-lg">
              {item.name}
            </h3>
            {item.tags?.includes('popular') && (
              <span className="rounded-full bg-gold-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold-400">
                Popular
              </span>
            )}
          </div>
          <p className="mt-0.5 font-accent text-sm italic text-gold-300/80 line-clamp-2">
            {item.description}
          </p>
          {item.servingSize && (
            <span className="mt-1 inline-block text-xs text-gold-400">
              Serves {item.servingSize}
            </span>
          )}
        </div>
        <PriceTag price={item.price} priceAlt={item.priceAlt} className="shrink-0 text-base" />
      </div>
    </article>
  )
}
