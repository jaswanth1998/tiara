import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Hook that creates a parallax scrolling effect.
 * Returns a ref to attach to the element, and a CSS transform value.
 *
 * @param speed - Parallax speed multiplier. 0.5 = half scroll speed (subtle), -0.3 = reverse direction.
 *                Positive values move the element slower than scroll (background feel).
 *                Default: 0.3
 */
export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  const handleScroll = useCallback(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Only calculate when element is in or near viewport
    if (rect.bottom < -200 || rect.top > windowHeight + 200) return

    // Calculate how far through the viewport the element center is
    const elementCenter = rect.top + rect.height / 2
    const viewportCenter = windowHeight / 2
    const distFromCenter = elementCenter - viewportCenter

    setOffset(distFromCenter * speed)
  }, [speed])

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial calculation
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return { ref, offset, style: { transform: `translateY(${offset}px)` } }
}
