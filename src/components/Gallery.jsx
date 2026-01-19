import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Gallery.css'

gsap.registerPlugin(ScrollTrigger)

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    title: 'Elegant Ambiance',
    category: 'Interior',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    title: 'Culinary Art',
    category: 'Cuisine',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
    title: 'Royal Setting',
    category: 'Dining',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80',
    title: 'Private Events',
    category: 'Events',
  },
]

function Gallery() {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo('.gallery .section-header',
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

      // Animate gallery items with stagger
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(item,
          {
            opacity: 0,
            scale: 0.8,
            y: 50
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            }
          }
        )
      })

      // Hover animations - slide up overlay from bottom
      itemsRef.current.forEach((item) => {
        const image = item.querySelector('.gallery__image')
        const overlay = item.querySelector('.gallery__overlay')
        const content = item.querySelector('.gallery__content')

        // Set initial state
        gsap.set(overlay, { yPercent: 101 })
        gsap.set(content, { y: 20, opacity: 0 })

        item.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.6,
            ease: 'power2.out'
          })
          gsap.to(overlay, {
            yPercent: 0,
            duration: 0.4,
            ease: 'power2.out'
          })
          gsap.to(content, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.1,
            ease: 'power2.out'
          })
        })

        item.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
          })
          gsap.to(overlay, {
            yPercent: 101,
            duration: 0.4,
            ease: 'power2.in'
          })
          gsap.to(content, {
            y: 20,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in'
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="gallery section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Gallery</span>
          <h2 className="section-title">A Visual Journey</h2>
          <p className="section-description">
            Experience the beauty of Tiara of Persia through our gallery
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery__item"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <div className="gallery__content">
                  <span className="gallery__category">{item.category}</span>
                  <h3 className="gallery__title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
