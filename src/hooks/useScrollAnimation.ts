import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from './useMediaQuery'

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasIntersected, setHasIntersected] = useState(false)
  // Respect reduced motion preference: content is shown immediately.
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    if (prefersReducedMotion) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasIntersected(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, prefersReducedMotion])

  return { ref, isVisible: prefersReducedMotion || hasIntersected }
}
