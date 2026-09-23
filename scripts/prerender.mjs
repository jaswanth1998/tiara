/**
 * Prerenders every route to static HTML. Runs after `vite build` (see package.json).
 *
 * 1. Builds src/entry-server.tsx as an SSR bundle into .prerender/
 * 2. For each route: renders the app, swaps the <!--seo:start-->…<!--seo:end--> block in
 *    dist/index.html for that route's head tags, fills <div id="root">, and writes
 *    dist/index.html, dist/menu.html, … and dist/404.html. GitHub Pages serves
 *    menu.html at /menu with a 200, so URLs stay clean.
 * 3. Writes dist/sitemap.xml from the same route list.
 * 4. Removes .prerender/
 */
import { execSync } from 'node:child_process'
import { readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

process.env.NODE_ENV ??= 'production'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, '.prerender')

const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/
const ROOT_DIV = '<div id="root"></div>'

/** Date of the last commit (YYYY-MM-DD), falling back to today outside a git checkout. */
function lastModified() {
  try {
    const date = execSync('git log -1 --format=%cs', {
      cwd: root,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim()
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date
  } catch {
    // not a git checkout
  }
  return new Date().toISOString().slice(0, 10)
}

/**
 * GitHub Pages answers /menu/ or /Menu with 404.html. Send those visitors to the clean
 * URL; any other unknown path stays on the (noindex) not-found page.
 */
function notFoundRedirectScript(knownPaths) {
  return (
    '<script>(function(l){' +
    "var p=l.pathname.replace(/\\/+$/,'').toLowerCase()||'/';" +
    `if(p!==l.pathname&&${JSON.stringify(knownPaths)}.indexOf(p)!==-1)l.replace(p+l.search+l.hash)` +
    '})(location)</script>'
  )
}

try {
  await build({
    root,
    logLevel: 'warn',
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: ssrDir,
      emptyOutDir: true,
      copyPublicDir: false,
      minify: false,
    },
  })

  const entry = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
  const { render, routes, knownPaths, buildHeadHtml, buildSitemapXml } = await import(entry)

  const template = await readFile(path.join(distDir, 'index.html'), 'utf8')
  if (!SEO_BLOCK.test(template)) {
    throw new Error('dist/index.html has no <!--seo:start-->…<!--seo:end--> block')
  }
  if (!template.includes(ROOT_DIV)) {
    throw new Error(`dist/index.html has no ${ROOT_DIV}`)
  }

  for (const route of routes) {
    const appHtml = await render(route.path)
    let head = buildHeadHtml(route.path)
    if (route.marker === '*') head = `${notFoundRedirectScript(knownPaths)}\n    ${head}`

    // Replacer functions, so "$" in prices or JSON-LD is never read as a replacement pattern.
    const html = template
      .replace(SEO_BLOCK, () => head)
      .replace(ROOT_DIV, () => `<div id="root" data-prerendered="${route.marker}">${appHtml}</div>`)

    await writeFile(path.join(distDir, route.file), html)
    console.log(`prerendered ${route.path.padEnd(8)} -> dist/${route.file}`)
  }

  await writeFile(path.join(distDir, 'sitemap.xml'), buildSitemapXml(lastModified()))
  console.log('wrote dist/sitemap.xml')
} finally {
  await rm(ssrDir, { recursive: true, force: true })
}
