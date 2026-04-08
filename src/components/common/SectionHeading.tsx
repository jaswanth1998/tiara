import { cn } from '@/lib/utils'

export interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  theme?: 'dark' | 'light'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  theme = 'dark',
  as: Tag = 'h2',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-3',
        align === 'center' && 'text-center',
        className,
      )}
    >
      <Tag
        className={cn(
          'font-display text-3xl font-bold tracking-tight md:text-5xl',
          theme === 'dark' ? 'text-gold-500' : 'text-warm-900',
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            'font-accent text-lg italic md:text-xl',
            theme === 'dark' ? 'text-gold-300' : 'text-warm-500',
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mx-auto mt-4 h-px w-16',
          align === 'left' && 'mx-0',
          theme === 'dark' ? 'bg-gold-500/40' : 'bg-warm-300',
        )}
        aria-hidden="true"
      />
    </div>
  )
}
