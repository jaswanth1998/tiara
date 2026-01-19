import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Chef.css'

gsap.registerPlugin(ScrollTrigger)

function Chef() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      })

      // Animate image from left
      tl.fromTo('.chef__image-wrapper',
        {
          opacity: 0,
          x: -100,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out'
        }
      )

      // Animate decoration
      .fromTo('.chef__image-decoration',
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 0.3,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out'
        },
        '-=0.6'
      )

      // Animate subtitle
      .fromTo('.chef__content .section-subtitle',
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out'
        },
        '-=0.8'
      )

      // Animate title
      .fromTo('.chef__title',
        {
          opacity: 0,
          y: 40,
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
        },
        {
          opacity: 1,
          y: 0,
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          duration: 0.8,
          ease: 'power3.out'
        },
        '-=0.4'
      )

      // Animate quote
      .fromTo('.chef__quote',
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out'
        },
        '-=0.5'
      )

      // Animate signature and button
      .fromTo(['.chef__info', '.chef__content .btn'],
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out'
        },
        '-=0.4'
      )

      // Hover animation for image
      const imageFrame = document.querySelector('.chef__image-frame')
      const image = document.querySelector('.chef__image')

      if (imageFrame && image) {
        imageFrame.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.08,
            duration: 0.6,
            ease: 'power2.out'
          })
        })

        imageFrame.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="chef section" ref={sectionRef}>
      <div className="container">
        <div className="chef__grid">
          <div className="chef__image-wrapper">
            <div className="chef__image-frame">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80"
                alt="Chef Alex"
                className="chef__image"
              />
            </div>
            <div className="chef__image-decoration"></div>
          </div>

          <div className="chef__content">
            <span className="section-subtitle">Meet Our Chef</span>
            <h2 className="chef__title">The Art of Persian Cuisine</h2>

            <blockquote className="chef__quote">
              <p>
                "We don't just cook history; we refine it. Every dish tells a story
                of ancient empires, yet we present it in ways that make a
                thousand-year-old dish feel brilliantly new."
              </p>
            </blockquote>

            <div className="chef__info">
              <div className="chef__signature">
                <svg viewBox="0 0 100 40" className="chef__signature-svg">
                  <text x="0" y="30" className="signature-text">Chef Alex</text>
                </svg>
              </div>
              <span className="chef__role">Executive Chef</span>
            </div>

            <a href="#about" className="btn btn-primary">About Tiara of Persia</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chef
