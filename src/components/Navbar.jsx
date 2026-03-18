import { useState, useEffect } from 'react'
import { PERSON, NAV_LINKS } from '../data'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* ── Logo: shows first letters of your name from data.js ── */}
      <span className="navbar__logo">
        {PERSON.name.split(' ').map(w => w[0]).join('')}.
      </span>

      {/* ── Desktop links ── */}
      <ul className="navbar__links">
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* ── Mobile hamburger ── */}
      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="navbar__drawer">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
