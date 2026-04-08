import { cn } from '@/lib/utils'

export interface DishImageProps {
  /** Base path without size suffix or extension, e.g. "/images/food/kebab-barg" */
  src: string
  alt: string
  sizes?: string
  className?: string
  priority?: boolean
}

export function DishImage({
  src,
  alt,
  sizes = '(max-width: 640px) 300px, (max-width: 1024px) 600px, 1200px',
  className,
  priority = false,
}: DishImageProps) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${src}-sm.webp 300w, ${src}-md.webp 600w, ${src}-lg.webp 1200w`}
        sizes={sizes}
      />
      <img
        src={`${src}-md.jpg`}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className={cn('h-full w-full object-cover', className)}
      />
    </picture>
  )
}
