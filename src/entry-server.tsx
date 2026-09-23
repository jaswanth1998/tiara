import { StrictMode } from 'react'
import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import { App } from '@/app/App'
import { INDEXABLE_PATHS } from '@/lib/constants'
import { NOT_FOUND_PATH } from '@/data/seo'
import { buildHeadHtml, buildSitemapXml } from '@/lib/seo'

export interface PrerenderRoute {
  /** Router location to render */
  path: string
  /** Output file inside dist/ */
  file: string
  /** Value stamped on #root as data-prerendered, checked by src/main.tsx before hydrating */
  marker: string
}

/** Every file the build emits. GitHub Pages serves `menu.html` at `/menu` with a 200. */
export const routes: PrerenderRoute[] = [
  ...INDEXABLE_PATHS.map((path) => ({
    path,
    file: path === '/' ? 'index.html' : `${path.slice(1)}.html`,
    marker: path,
  })),
  { path: NOT_FOUND_PATH, file: '404.html', marker: '*' },
]

/** Paths the 404 page redirects to when reached with a trailing slash or different case. */
export const knownPaths: readonly string[] = INDEXABLE_PATHS

/** Renders the app for `url` to static HTML, waiting for every lazy route to resolve. */
export async function render(url: string): Promise<string> {
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return new Response(prelude).text()
}

export { buildHeadHtml, buildSitemapXml }
