import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Menu.css'

gsap.registerPlugin(ScrollTrigger)

const menuItems = [
  {
    id: 1,
    name: 'Chelo Kebab',
    description: 'Succulent grilled kebab served with saffron rice and grilled tomatoes',
    price: '$50.00',
    salePrice: '$40.00',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80',
  },
  {
    id: 2,
    name: 'Greek Moussaka',
    description: 'Layered eggplant, spiced meat, and creamy béchamel sauce',
    price: '$50.00',
    salePrice: '$40.00',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80',
  },
  {
    id: 3,
    name: 'Ghormeh Sabzi',
    description: 'Traditional Persian herb stew with tender lamb and dried limes',
    price: '$50.00',
    salePrice: '$40.00',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
  },
]

function Menu() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo('.menu .section-header',
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

      // Animate menu items with stagger and scale
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotateX: 15
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
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

      // Hover animations
      cardsRef.current.forEach((card) => {
        const image = card.querySelector('.menu__item-image')
        const badge = card.querySelector('.menu__item-badge')

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -15,
            boxShadow: '0 30px 60px rgba(179, 148, 91, 0.25)',
            duration: 0.4,
            ease: 'power2.out'
          })
          gsap.to(image, {
            scale: 1.15,
            duration: 0.6,
            ease: 'power2.out'
          })
          if (badge) {
            gsap.to(badge, {
              scale: 1.1,
              duration: 0.3,
              ease: 'back.out(1.7)'
            })
          }
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 0 0 rgba(179, 148, 91, 0)',
            duration: 0.4,
            ease: 'power2.out'
          })
          gsap.to(image, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
          })
          if (badge) {
            gsap.to(badge, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            })
          }
        })
      })

      // Animate CTA button
      gsap.fromTo('.menu__cta',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.menu__cta',
            start: 'top 90%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="menu section" id="menu" ref={sectionRef}>
      <div className="menu__background"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Menu</span>
          <h2 className="section-title">Experience the Difference</h2>
          <p className="section-description">
            Discover our carefully crafted dishes from three ancient civilizations
          </p>
        </div>

        <div className="menu__grid">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="menu__item"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="menu__item-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu__item-image"
                />
                <div className="menu__item-badge">Sale</div>
              </div>
              <div className="menu__item-content">
                <h3 className="menu__item-name">{item.name}</h3>
                <p className="menu__item-description">{item.description}</p>
                <div className="menu__item-pricing">
                  <span className="menu__item-price-original">{item.price}</span>
                  <span className="menu__item-price-sale">{item.salePrice}</span>
                </div>
                <button className="menu__item-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="menu__cta">
          <a href="#full-menu" className="btn btn-primary">View Our Menu</a>
        </div>
      </div>
    </section>
  )
}

export default Menu
