import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface VideoBackgroundProps {
  webmSrc: string
  mp4Src: string
  posterSrc: string
  className?: string
}

export function VideoBackground({ webmSrc, mp4Src, posterSrc, className }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      video.pause()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={posterSrc}
      onLoadedData={() => setIsLoaded(true)}
      className={cn(
        'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className,
      )}
    >
      <source src={webmSrc} type="video/webm" />
      <source src={mp4Src} type="video/mp4" />
    </video>
  )
}
