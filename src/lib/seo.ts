import { INDEXABLE_PATHS, SITE_LOCALE, SITE_NAME } from '@/lib/constants'
import { getRouteSeo } from '@/data/seo'
import { pageUrl, type JsonLd } from '@/lib/structuredData'

/**
 * One managed `<head>` element. `key` is written to a `data-seo` attribute so the
 * client can find and update the same element on SPA navigation.
 */
export interface HeadTag {
  key: string
  tag: 'meta' | 'link' | 'script'
  attrs: Record<string, string>
  /** Text content (JSON-LD scripts only) */
  text?: string
}

export interface HeadData {
  title: string
  tags: HeadTag[]
}

const meta = (key: string, attrs: Record<string, string>): HeadTag => ({ key, tag: 'meta', attrs })

/** Serialises JSON-LD so it can never close its own `<script>` element. */
function serializeJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

function jsonLdKey(data: JsonLd, index: number): string {
  const type = data['@type']
  return `jsonld:${typeof type === 'string' ? type.toLowerCase() : index}`
}

/** Pure description of every managed head element for a route. */
export function getHeadData(path: string): HeadData {
  const seo = getRouteSeo(path)
  const url = pageUrl(seo.path)
  const tags: HeadTag[] = [
    meta('description', { name: 'description', content: seo.description }),
    meta('robots', {
      name: 'robots',
      content: seo.noindex ? 'noindex' : 'index, follow, max-image-preview:large',
    }),
  ]

  if (!seo.noindex) {
    tags.push({ key: 'canonical', tag: 'link', attrs: { rel: 'canonical', href: url } })
  }

  tags.push(
    meta('og:type', { property: 'og:type', content: seo.ogType }),
    meta('og:site_name', { property: 'og:site_name', content: SITE_NAME }),
    meta('og:locale', { property: 'og:locale', content: SITE_LOCALE }),
    meta('og:title', { property: 'og:title', content: seo.title }),
    meta('og:description', { property: 'og:description', content: seo.description }),
  )
  if (!seo.noindex) {
    tags.push(meta('og:url', { property: 'og:url', content: url }))
  }
  tags.push(meta('og:image', { property: 'og:image', content: seo.ogImage.url }))
  if (seo.ogImage.width !== undefined && seo.ogImage.height !== undefined) {
    tags.push(
      meta('og:image:width', { property: 'og:image:width', content: String(seo.ogImage.width) }),
      meta('og:image:height', { property: 'og:image:height', content: String(seo.ogImage.height) }),
    )
  }
  tags.push(
    meta('og:image:alt', { property: 'og:image:alt', content: seo.ogImage.alt }),
    meta('twitter:card', { name: 'twitter:card', content: 'summary_large_image' }),
    meta('twitter:title', { name: 'twitter:title', content: seo.title }),
    meta('twitter:description', { name: 'twitter:description', content: seo.description }),
    meta('twitter:image', { name: 'twitter:image', content: seo.ogImage.url }),
    meta('twitter:image:alt', { name: 'twitter:image:alt', content: seo.ogImage.alt }),
  )

  if (seo.preloadImage) {
    tags.push({
      key: 'preload-image',
      tag: 'link',
      attrs: { rel: 'preload', as: 'image', href: seo.preloadImage, fetchpriority: 'high' },
    })
  }

  seo.jsonLd().forEach((data, index) => {
    tags.push({
      key: jsonLdKey(data, index),
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      text: serializeJsonLd(data),
    })
  })

  return { title: seo.title, tags }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function renderTag({ key, tag, attrs, text }: HeadTag): string {
  const attributes = Object.entries({ ...attrs, 'data-seo': key })
    .map(([name, value]) => `${name}="${escapeHtml(value)}"`)
    .join(' ')
  if (tag === 'script') return `<script ${attributes}>${text ?? ''}</script>`
  return `<${tag} ${attributes} />`
}

/** Static `<head>` markup for a route. Used by the prerender script. */
export function buildHeadHtml(path: string): string {
  const { title, tags } = getHeadData(path)
  return [`<title>${escapeHtml(title)}</title>`, ...tags.map(renderTag)].join('\n    ')
}

/**
 * Brings `document.head` in line with `getHeadData(path)` after SPA navigation.
 * Only touches what differs, so on a prerendered first load it changes nothing.
 */
export function applySeo(path: string): void {
  if (typeof document === 'undefined') return
  const { title, tags } = getHeadData(path)
  const { head } = document

  if (document.title !== title) document.title = title

  const wanted = new Set(tags.map((tag) => tag.key))
  head.querySelectorAll('[data-seo]').forEach((element) => {
    const key = element.getAttribute('data-seo')
    if (key === null || !wanted.has(key)) element.remove()
  })

  for (const { key, tag, attrs, text } of tags) {
    let element = head.querySelector(`[data-seo="${key}"]`)
    if (element && element.tagName.toLowerCase() !== tag) {
      element.remove()
      element = null
    }
    if (!element) {
      element = document.createElement(tag)
      element.setAttribute('data-seo', key)
      head.appendChild(element)
    }

    for (const { name } of Array.from(element.attributes)) {
      if (name !== 'data-seo' && !(name in attrs)) element.removeAttribute(name)
    }
    for (const [name, value] of Object.entries(attrs)) {
      if (element.getAttribute(name) !== value) element.setAttribute(name, value)
    }
    if (text !== undefined && element.textContent !== text) element.textContent = text
  }
}

/** sitemap.xml for every indexable route. `lastmod` is an ISO date (YYYY-MM-DD). */
export function buildSitemapXml(lastmod: string): string {
  const urls = INDEXABLE_PATHS.map((path) => {
    const seo = getRouteSeo(path)
    const lines = [`    <loc>${escapeHtml(pageUrl(path))}</loc>`, `    <lastmod>${lastmod}</lastmod>`]
    if (seo.sitemap) {
      lines.push(
        `    <changefreq>${seo.sitemap.changefreq}</changefreq>`,
        `    <priority>${seo.sitemap.priority.toFixed(1)}</priority>`,
      )
    }
    return `  <url>\n${lines.join('\n')}\n  </url>`
  })

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n')
}
