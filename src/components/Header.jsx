import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    // Initially hide header
    setIsHidden(true)

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show header after scrolling down 100px
      if (currentScrollY > 100) {
        setIsHidden(false)
        setIsScrolled(true)
      } else {
        setIsHidden(true)
        setIsScrolled(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Animate header visibility
    gsap.to(headerRef.current, {
      y: isHidden ? '-110%' : '0%',
      duration: 0.3,
      ease: 'power2.inOut'
    })
  }, [isHidden])

  // Removed initial animation - header starts hidden

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      ref={headerRef}
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
    >
      <div className="header__container">
        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li><a href="#home" className="header__nav-link">Home</a></li>
            <li><a href="#about" className="header__nav-link">About Us</a></li>
            <li><a href="#contact" className="header__nav-link">Contact Us</a></li>
          </ul>
        </nav>

        <a href="#" className="header__logo">
          <svg viewBox="0 0 200 80" className="header__logo-svg">
            {/* Decorative crown/tiara */}
            <g transform="translate(100, 15)">
              <path d="M-25,0 L-20,-8 L-15,0 L-10,-10 L-5,0 L0,-12 L5,0 L10,-10 L15,0 L20,-8 L25,0 L20,8 L-20,8 Z" 
                    fill="none" stroke="#B3945B" strokeWidth="1.5"/>
              <circle cx="0" cy="-12" r="2.5" fill="#B3945B"/>
              <circle cx="-10" cy="-10" r="2" fill="#B3945B" opacity="0.7"/>
              <circle cx="10" cy="-10" r="2" fill="#B3945B" opacity="0.7"/>
            </g>
            {/* Text */}
            <text x="100" y="48" className="logo-text" textAnchor="middle">TIARA OF PERSIA</text>
            <line x1="40" y1="55" x2="160" y2="55" stroke="#B3945B" strokeWidth="0.5" opacity="0.5"/>
          </svg>
        </a>

        <div className="header__actions">
          <a href="#book" className="btn btn-primary header__cta">Book a Table</a>
          <a href="#menu" className="btn btn-secondary header__menu-btn">Our Menu</a>
          <button className="header__cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
          <button
            className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
