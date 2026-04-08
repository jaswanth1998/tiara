import { cn } from '@/lib/utils'

export interface PriceTagProps {
  price: number
  priceAlt?: { label: string; price: number }
  className?: string
}

export function PriceTag({ price, priceAlt, className }: PriceTagProps) {
  const format = (n: number) =>
    n % 1 === 0 ? `$${n}` : `$${n.toFixed(2)}`

  if (priceAlt) {
    return (
      <span
        className={cn('font-sans text-lg font-semibold text-gold-500', className)}
        aria-label={`Price: ${price} dollars or ${priceAlt.label} ${priceAlt.price} dollars`}
      >
        {format(price)}{' '}
        <span className="text-sm font-normal text-gold-400">
          / {priceAlt.label} {format(priceAlt.price)}
        </span>
      </span>
    )
  }

  return (
    <span
      className={cn('font-sans text-lg font-semibold text-gold-500', className)}
      aria-label={`Price: ${price} dollars`}
    >
      {format(price)}
    </span>
  )
}
