import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Location.css'

gsap.registerPlugin(ScrollTrigger)

function Location() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo('.location .section-header',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )

      // Animate cards with stagger
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 80,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            }
          }
        )
      })

      // Hover animations for cards
      cardsRef.current.forEach((card) => {
        const icon = card.querySelector('.location__icon')

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
            borderColor: 'var(--color-gold)',
            duration: 0.4,
            ease: 'power2.out'
          })
          if (icon) {
            gsap.to(icon, {
              backgroundColor: 'var(--color-gold)',
              scale: 1.1,
              duration: 0.3,
              ease: 'back.out(1.7)'
            })
            gsap.to(icon.querySelector('svg'), {
              color: 'var(--color-white)',
              duration: 0.3
            })
          }
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
            borderColor: 'var(--color-border)',
            duration: 0.4,
            ease: 'power2.out'
          })
          if (icon) {
            gsap.to(icon, {
              backgroundColor: 'transparent',
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            })
            gsap.to(icon.querySelector('svg'), {
              color: 'var(--color-gold)',
              duration: 0.3
            })
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="location section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Location & Hours</span>
          <h2 className="section-title">Discover the breathtaking beauty</h2>
          <p className="section-description">
            Visit us and experience the finest Persian hospitality
          </p>
        </div>

        <div className="location__grid">
          <div className="location__card" ref={(el) => (cardsRef.current[0] = el)}>
            <div className="location__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="location__card-title">Operating Hours</h3>
            <div className="location__card-content">
              <p>Monday – Thursday</p>
              <p className="location__highlight">11:30 AM – 10:30 PM</p>
              <p>Friday – Saturday</p>
              <p className="location__highlight">11:30 AM – 11:30 PM</p>
              <p>Sunday</p>
              <p className="location__highlight">12:00 PM – 10:00 PM</p>
            </div>
          </div>

          <div className="location__card" ref={(el) => (cardsRef.current[1] = el)}>
            <div className="location__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="location__card-title">Our Location</h3>
            <div className="location__card-content">
              <p className="location__highlight">123 Waterfront Drive</p>
              <p>Halifax, NS B3J 3J9</p>
              <p>Canada</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="location__link">
                Get Directions →
              </a>
            </div>
          </div>

          <div className="location__card" ref={(el) => (cardsRef.current[2] = el)}>
            <div className="location__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="location__card-title">Contact Us</h3>
            <div className="location__card-content">
              <p>Phone</p>
              <a href="tel:+17822341535" className="location__highlight">+1 (782) 234-1535</a>
              <p>Email</p>
              <a href="mailto:Reservations@TiaraOfPersia.ca" className="location__highlight location__email">
                Reservations@TiaraOfPersia.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
