import { useState } from 'react'
import { CONTACT } from '../data'
import './Contact.css'

export default function Contact() {
  // ── Form state — wire up to your backend / EmailJS / Formspree as needed ──
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // ── CONNECT YOUR FORM SUBMISSION HERE ────────────────────────────────
    // Option A – EmailJS:
    //   import emailjs from '@emailjs/browser'
    //   emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
    //
    // Option B – Formspree:
    //   fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST', headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    //
    // Option C – your own FastAPI endpoint:
    //   fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    // ─────────────────────────────────────────────────────────────────────
    console.log('Form submitted:', form)
    setSent(true)
  }

  return (
    <>
      <hr className="divider" />
      <section className="section section--dark" id="contact">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's work together</h2>

        <div className="contact__grid">
          {/* ── Left: intro + links — edit in data.js → CONTACT ── */}
          <div className="contact__info">
            <p>{CONTACT.intro}</p>
            <div className="contact__links">
              {CONTACT.links.filter(l => l.url).map((link, i) => (
                <a key={i} href={link.url} className="contact__link" target="_blank" rel="noopener noreferrer">
                  <span className="contact__link-icon">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: contact form ── */}
          <form className="contact__form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="contact__success">
                {/* ── CHANGE success message here ── */}
                <p>Message sent — I'll get back to you soon!</p>
              </div>
            ) : (
              <>
                <div className="contact__form-row">
                  <div className="form-field">
                    <label htmlFor="cf-name">Name</label>
                    <input
                      id="cf-name" name="name" type="text"
                      placeholder="Your name"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email" name="email" type="email"
                      placeholder="your@email.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="cf-subject">Subject</label>
                  <input
                    id="cf-subject" name="subject" type="text"
                    placeholder="What's this about?"
                    value={form.subject} onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message" name="message"
                    placeholder="Tell me about your project..."
                    value={form.message} onChange={handleChange} required
                  />
                </div>
                <button type="submit" className="btn-primary">Send message</button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
