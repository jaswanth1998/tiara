import { cn } from '@/lib/utils'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

type AnimationVariant = 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale' | 'fade'

export interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  variant?: AnimationVariant
  duration?: number
}

const variantClasses: Record<AnimationVariant, { hidden: string; visible: string }> = {
  'fade-up': {
    hidden: 'translate-y-8 opacity-0',
    visible: 'translate-y-0 opacity-100',
  },
  'fade-down': {
    hidden: '-translate-y-8 opacity-0',
    visible: 'translate-y-0 opacity-100',
  },
  'slide-left': {
    hidden: '-translate-x-12 opacity-0',
    visible: 'translate-x-0 opacity-100',
  },
  'slide-right': {
    hidden: 'translate-x-12 opacity-0',
    visible: 'translate-x-0 opacity-100',
  },
  'scale': {
    hidden: 'scale-90 opacity-0',
    visible: 'scale-100 opacity-100',
  },
  'fade': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
}

export function ScrollReveal({
  children,
  delay = 0,
  className,
  variant = 'fade-up',
  duration = 800,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation()
  const { hidden, visible } = variantClasses[variant]

  return (
    <div
      ref={ref}
      className={cn(
        'ease-out',
        isVisible ? visible : hidden,
        className,
      )}
      style={{
        transitionProperty: 'transform, opacity',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  )
}
