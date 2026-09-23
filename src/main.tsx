import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@/styles/globals.css'
import { App } from '@/app/App'
import { isIndexablePath, normalizePathname } from '@/lib/routing'

const container = document.getElementById('root')

if (container) {
  const { pathname, search, hash } = window.location
  const cleanPath = normalizePathname(pathname)
  if (cleanPath !== pathname) {
    window.history.replaceState(window.history.state, '', `${cleanPath}${search}${hash}`)
  }

  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )

  // The prerender script stamps the route it rendered on #root ("*" for the 404 page).
  // Hydrate only when that markup belongs to the current URL; otherwise render fresh
  // (dev server, or a legacy "/?/menu" link that index.html rewrote to /menu).
  const prerendered = container.dataset.prerendered
  const matchesMarkup =
    prerendered === cleanPath || (prerendered === '*' && !isIndexablePath(cleanPath))

  if (container.hasChildNodes() && matchesMarkup) {
    hydrateRoot(container, app)
  } else {
    container.replaceChildren()
    createRoot(container).render(app)
  }
}
