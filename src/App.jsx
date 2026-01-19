import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Header from './components/Header'
import Hero from './components/Hero'
import Location from './components/Location'
import Offerings from './components/Offerings'
import Menu from './components/Menu'
import Chef from './components/Chef'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Animate sections on scroll
    const sections = document.querySelectorAll('.section')

    sections.forEach((section) => {
      // Animate section headers
      const header = section.querySelector('.section-header')
      if (header) {
        gsap.fromTo(header,
          {
            opacity: 0,
            y: 60
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      }

      // Animate cards and grid items
      const cards = section.querySelectorAll('.location__card, .offerings__item, .menu__item, .gallery__item')
      if (cards.length > 0) {
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 80,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cards[0],
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
    })

    // Parallax effect for backgrounds
    const parallaxElements = document.querySelectorAll('.parallax-bg')
    parallaxElements.forEach((el) => {
      gsap.to(el, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Location />
        <Offerings />
        <Menu />
        <Chef />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
