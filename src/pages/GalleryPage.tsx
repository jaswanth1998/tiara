import { useState } from 'react'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { X, Play } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { galleryImages } from '@/data/gallery'
import { cn } from '@/lib/utils'

type Category = 'all' | 'food' | 'interior' | 'ambiance'

const FILTERS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Food', value: 'food' },
  { label: 'Interior', value: 'interior' },
  { label: 'Ambiance', value: 'ambiance' },
]

const VIDEOS = [
  { mp4: '/videos/ambiance-1.mp4', webm: '/videos/ambiance-1.webm', poster: '/videos/ambiance-1-poster.jpg', title: 'Restaurant Ambiance' },
  { mp4: '/videos/food-prep.mp4', webm: '/videos/food-prep.webm', poster: '/videos/food-prep-poster.jpg', title: 'Food Preparation' },
  { mp4: '/videos/ambiance-2.mp4', webm: '/videos/ambiance-2.webm', poster: '/videos/ambiance-2-poster.jpg', title: 'Dining Experience' },
]

export function GalleryPage() {
  useDocumentTitle('Gallery')
  const [activeFilter, setActiveFilter] = useState<Category>('all')
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState('')
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const filtered = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <>
      {/* Hero with AI spread image */}
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden">
        <img
          src="/images/ai-food/ai-dish-11-lg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/50 to-navy-900" />
        <div className="relative z-10 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h1 className="font-display text-4xl font-bold md:text-6xl">
              <span className="text-gold-gradient">Gallery</span>
            </h1>
            <p className="mt-3 font-accent text-lg italic text-gold-300/70">
              A visual journey through our kitchen and space
            </p>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="bg-navy-950 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <SectionHeading title="Video Showcase" subtitle="See our kitchen in action" />
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {VIDEOS.map((video, i) => (
              <ScrollReveal key={video.mp4} delay={i * 150} variant="scale">
                <div className="group relative overflow-hidden rounded-xl aspect-video bg-navy-800">
                  {playingVideo === video.mp4 ? (
                    <video
                      autoPlay
                      controls
                      playsInline
                      className="h-full w-full object-cover"
                    >
                      <source src={video.webm} type="video/webm" />
                      <source src={video.mp4} type="video/mp4" />
                    </video>
                  ) : (
                    <button
                      type="button"
                      className="relative h-full w-full"
                      onClick={() => setPlayingVideo(video.mp4)}
                    >
                      <img
                        src={video.poster}
                        alt={video.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/90 text-navy-900 shadow-lg transition-transform duration-300 group-hover:scale-110 animate-glow-pulse">
                          <Play className="h-7 w-7 ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <p className="absolute bottom-3 left-3 text-sm font-medium text-gold-300">
                        {video.title}
                      </p>
                    </button>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-20 z-30 border-b border-navy-600/50 bg-navy-800/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl justify-center gap-2 px-4 py-4">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActiveFilter(f.value)}
              className={cn(
                'rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300',
                activeFilter === f.value
                  ? 'bg-gold-500 text-navy-900 shadow-lg shadow-gold-500/20'
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
              <ScrollReveal key={img.src} delay={(i % 4) * 80} variant={i % 3 === 0 ? 'scale' : 'fade-up'}>
                <button
                  type="button"
                  className="mb-4 block w-full overflow-hidden rounded-xl group focus-visible:ring-2 focus-visible:ring-gold-500"
                  onClick={() => {
                    setLightboxSrc(img.src)
                    setLightboxAlt(img.alt)
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!lightboxSrc} onOpenChange={() => setLightboxSrc(null)}>
        <DialogContent className="max-w-5xl border-navy-600 bg-navy-950 p-2">
          <button
            type="button"
            onClick={() => setLightboxSrc(null)}
            className="absolute right-3 top-3 z-10 rounded-full bg-navy-900/80 p-2 text-gold-300 hover:text-gold-500 transition-colors duration-300"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          {lightboxSrc && (
            <img
              src={lightboxSrc}
              alt={lightboxAlt}
              className="max-h-[85vh] w-full rounded-lg object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default GalleryPage
