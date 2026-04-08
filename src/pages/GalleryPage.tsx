import { useState } from 'react'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { X } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { galleryImages } from '@/data/gallery'
import { cn } from '@/lib/utils'

type Category = 'all' | 'food' | 'interior' | 'ambiance'

const FILTERS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Food', value: 'food' },
  { label: 'Interior', value: 'interior' },
  { label: 'Ambiance', value: 'ambiance' },
]

export function GalleryPage() {
  useDocumentTitle('Gallery')
  const [activeFilter, setActiveFilter] = useState<Category>('all')
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState('')

  const filtered = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[35vh] min-h-[250px] items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-900" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl font-bold text-gold-500 md:text-6xl">
            Gallery
          </h1>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-20 z-30 border-b border-navy-600/50 bg-navy-800/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl justify-center gap-2 px-4 py-3">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActiveFilter(f.value)}
              className={cn(
                'rounded-full px-5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors',
                activeFilter === f.value
                  ? 'bg-gold-500 text-navy-900'
                  : 'text-gold-300 hover:bg-gold-500/10 hover:text-gold-500',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <section className="bg-navy-900 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={img.src} delay={(i % 4) * 80}>
                <button
                  type="button"
                  className="mb-4 block w-full overflow-hidden rounded-lg focus-visible:ring-2 focus-visible:ring-gold-500"
                  onClick={() => {
                    setLightboxSrc(img.src)
                    setLightboxAlt(img.alt)
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!lightboxSrc} onOpenChange={() => setLightboxSrc(null)}>
        <DialogContent className="max-w-4xl border-navy-600 bg-navy-950 p-2">
          <button
            type="button"
            onClick={() => setLightboxSrc(null)}
            className="absolute right-3 top-3 z-10 rounded-full bg-navy-900/80 p-2 text-gold-300 hover:text-gold-500"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          {lightboxSrc && (
            <img
              src={lightboxSrc}
              alt={lightboxAlt}
              className="max-h-[80vh] w-full rounded-md object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default GalleryPage
