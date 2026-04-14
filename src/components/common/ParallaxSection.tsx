import { cn } from '@/lib/utils'
import { useParallax } from '@/hooks/useParallax'

export interface ParallaxSectionProps {
  /** Image source for the parallax background */
  imageSrc: string
  /** Alt text for accessibility (decorative images use empty string) */
  imageAlt?: string
  /** Parallax speed: 0.1 (subtle) to 0.5 (dramatic). Default: 0.3 */
  speed?: number
  /** Dark overlay opacity. Default: 0.6 */
  overlayOpacity?: number
  /** Overlay gradient direction */
  overlayGradient?: 'top' | 'bottom' | 'both' | 'none'
  /** Section height */
  height?: 'sm' | 'md' | 'lg' | 'full'
  /** Content alignment */
  align?: 'center' | 'left' | 'right'
  children?: React.ReactNode
  className?: string
}

const heightMap = {
  sm: 'h-[40vh] min-h-[300px]',
  md: 'h-[60vh] min-h-[400px]',
  lg: 'h-[80vh] min-h-[500px]',
  full: 'h-screen',
}

const alignMap = {
  center: 'items-center justify-center text-center',
  left: 'items-center justify-start text-left',
  right: 'items-center justify-end text-right',
}

export function ParallaxSection({
  imageSrc,
  imageAlt = '',
  speed = 0.3,
  overlayOpacity = 0.6,
  overlayGradient = 'both',
  height = 'md',
  align = 'center',
  children,
  className,
}: ParallaxSectionProps) {
  const { ref, style } = useParallax(speed)

  const gradientClass =
    overlayGradient === 'top'
      ? 'bg-gradient-to-b from-navy-950 via-navy-950/60 to-transparent'
      : overlayGradient === 'bottom'
        ? 'bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent'
        : overlayGradient === 'both'
          ? 'bg-gradient-to-b from-navy-950/80 via-transparent to-navy-950/80'
          : ''

  return (
    <section
      className={cn(
        'relative flex overflow-hidden',
        heightMap[height],
        alignMap[align],
        className,
      )}
    >
      {/* Parallax background image — oversized to allow vertical shift */}
      <div
        ref={ref}
        className="absolute inset-x-0 -top-20 -bottom-20 will-change-transform"
        style={style}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          aria-hidden={!imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      {overlayGradient !== 'none' ? (
        <div className={cn('absolute inset-0', gradientClass)} />
      ) : (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(8, 14, 34, ${overlayOpacity})` }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
        {children}
      </div>
    </section>
  )
}
