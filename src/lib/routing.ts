import { INDEXABLE_PATHS } from '@/lib/constants'

/**
 * Canonical form of a pathname: no trailing slash, no `.html`, `/index` → `/`.
 * GitHub Pages also answers `/menu.html` and `/index.html`; the app treats those as `/menu` and `/`.
 */
export function normalizePathname(pathname: string): string {
  const cleaned = pathname
    .replace(/\/index(\.html)?$/, '/')
    .replace(/\.html$/, '')
    .replace(/\/+$/, '')
  return cleaned === '' ? '/' : cleaned
}

export function isIndexablePath(pathname: string): boolean {
  const normalized = normalizePathname(pathname).toLowerCase()
  return INDEXABLE_PATHS.some((path) => path === normalized)
}
