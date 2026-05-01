import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Helping Hands" className="navbar__logo-img" />
        </Link>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/booking" className="btn-primary navbar__cta" onClick={() => setOpen(false)}>
            Book Now
          </Link>
        </nav>

        <div className="navbar__actions">
          <button
            className={`navbar__burger ${open ? 'navbar__burger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div className="navbar__mobile-menu">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => isActive ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/booking" className="btn-primary" onClick={() => setOpen(false)} style={{ marginTop: 8 }}>
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
