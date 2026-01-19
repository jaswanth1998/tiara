import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Offerings.css'

gsap.registerPlugin(ScrollTrigger)

const offerings = [
  {
    id: 1,
    title: 'Architectural Serenity',
    description: 'Dining within a Vaulted Oasis of Timeless Design',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  },
  {
    id: 2,
    title: 'Curated Culinary Voyages',
    description: 'A Seamless Expedition Through Three Ancient Cuisines',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
  },
  {
    id: 3,
    title: 'Royal Hospitality',
    description: 'Service Fit for Persian Royalty in Every Detail',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80',
  },
]

function Offerings() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo('.offerings .section-header',
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

      // Animate each card with stagger from different directions
      cardsRef.current.forEach((card, index) => {
        const direction = index % 2 === 0 ? -100 : 100

        gsap.fromTo(card,
          {
            opacity: 0,
            x: direction,
            rotateY: direction > 0 ? 15 : -15
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        )
      })

      // Hover animations for cards
      cardsRef.current.forEach((card) => {
        const image = card.querySelector('.offerings__image')
        const content = card.querySelector('.offerings__content')

        card.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.6,
            ease: 'power2.out'
          })
          gsap.to(content, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
          })
          gsap.to(content, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="offerings section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Distinguishing Offerings</span>
          <h2 className="section-title">Experience the Difference</h2>
          <p className="section-description">
            Discover what makes Tiara of Persia a unique culinary destination
          </p>
        </div>

        <div className="offerings__grid">
          {offerings.map((offering, index) => (
            <div
              key={offering.id}
              className="offerings__item"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="offerings__image-wrapper">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="offerings__image"
                />
                <div className="offerings__image-overlay"></div>
              </div>
              <div className="offerings__content">
                <h3 className="offerings__title">{offering.title}</h3>
                <p className="offerings__description">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offerings
