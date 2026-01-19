import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import topPartImage from '../assets/images/top-part.png'
import './Hero.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const heroRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for sequenced animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      timelineRef.current = tl

      // Initial state - hide all elements
      gsap.set(['.hero__subtitle', '.hero__title', '.hero__tagline', '.hero__buttons', '.hero__decorative', '.hero__scroll-indicator'], {
        opacity: 0
      })

      // Animate hero background
      tl.fromTo('.hero__background',
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 }
      )

      // Animate subtitle
      .fromTo('.hero__subtitle',
        { opacity: 0, y: 40, rotationX: -45 },
        { opacity: 1, y: 0, rotationX: 0, duration: 0.8 },
        '-=0.8'
      )

      // Animate title with split effect
      .fromTo('.hero__title',
        { opacity: 0, y: 60, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
        { opacity: 1, y: 0, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', duration: 1 },
        '-=0.5'
      )

      // Animate tagline
      .fromTo('.hero__tagline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )

      // Animate buttons with stagger
      .fromTo('.hero__buttons',
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 },
        '-=0.4'
      )

      // Animate decorative element
      .fromTo('.hero__decorative',
        { opacity: 0, scale: 0.5, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)' },
        '-=0.3'
      )

      // Animate scroll indicator
      .fromTo('.hero__scroll-indicator',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )

      // Continuous floating animation for decorative
      gsap.to('.hero__crown', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Parallax effect on scroll
      gsap.to('.hero__background', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // Fade out hero content on scroll
      gsap.to('.hero__content', {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: true
        }
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__background">
        <div className="hero__overlay"></div>
        <div className="hero__pattern"></div>
      </div>


      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__subtitle"> <img src={topPartImage} alt="Tiara decoration" className="hero__top-svg" /></span>
          <h1 className="hero__title">A Tiara of Flavors</h1>
          <p className="hero__tagline">Where Empires Feast. Together.</p>

          <div className="hero__buttons">
            <a href="#book" className="btn btn-primary">Discover Your Table</a> 
            <a href="#menu" className="btn btn-secondary">View Our Menu</a>
          </div>
        </div>

        <div className="hero__decorative">
          <svg viewBox="0 0 200 200" className="hero__crown">
            <path d="M100 20 L120 60 L160 60 L130 90 L140 130 L100 110 L60 130 L70 90 L40 60 L80 60 Z"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="2"/>
            <circle cx="100" cy="60" r="8" fill="var(--color-gold)" opacity="0.6"/>
            <circle cx="70" cy="80" r="5" fill="var(--color-gold)" opacity="0.4"/>
            <circle cx="130" cy="80" r="5" fill="var(--color-gold)" opacity="0.4"/>
          </svg>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
