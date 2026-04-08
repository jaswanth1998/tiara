import { cn } from '@/lib/utils'

export interface PersianDividerProps {
  variant?: 'full' | 'accent'
  className?: string
}

export function PersianDivider({ variant = 'full', className }: PersianDividerProps) {
  if (variant === 'accent') {
    return (
      <svg
        className={cn('h-4 w-12 text-gold-500/30', className)}
        viewBox="0 0 48 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M24 0l4 8-4 8-4-8 4-8z"
          fill="currentColor"
        />
        <path d="M8 8h8M32 8h8" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  }

  return (
    <div className={cn('flex items-center gap-4', className)} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <svg
        className="h-6 w-6 shrink-0 text-gold-500/40"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2l3 6-3 6-3-6 3-6z"
          fill="currentColor"
        />
        <path
          d="M12 10l6 3-6 3-6-3 6-3z"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
    </div>
  )
}
