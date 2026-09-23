import { AppRouter } from './router'

/**
 * Router-agnostic app root. The router is supplied by the caller:
 * `BrowserRouter` in `src/main.tsx`, `StaticRouter` in `src/entry-server.tsx`.
 */
export function App() {
  return <AppRouter />
}
