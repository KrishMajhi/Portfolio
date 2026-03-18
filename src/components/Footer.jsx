import { PERSON } from '../data'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      {/* ── Footer text — year is auto-generated ── */}
      <p>© {year} {PERSON.name} — designed &amp; built with care.</p>
    </footer>
  )
}
