import { useEffect } from 'react'

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const base = 'Tiara Kebabs & More'
    document.title = title ? `${title} | ${base}` : `${base} — Authentic Persian Restaurant`
  }, [title])
}
