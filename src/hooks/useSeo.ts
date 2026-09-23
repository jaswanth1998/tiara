import { useEffect } from 'react'
import { applySeo } from '@/lib/seo'
import type { SeoPath } from '@/data/seo'

/** Keeps title, meta, canonical and JSON-LD in sync with the current page. */
export function useSeo(path: SeoPath) {
  useEffect(() => {
    applySeo(path)
  }, [path])
}
