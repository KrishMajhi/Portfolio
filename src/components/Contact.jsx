import { useState } from 'react'
import { CONTACT } from '../data'
import './Contact.css'

// ✅ FIXED: Your real Formspree ID
const FORMSPREE_ID = 'mykbngwo'

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' }) // ✅ reset form
      } else {
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <hr className="divider" />
      <section className="section section--dark" id="contact">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's work together</h2>

        <div className="contact__grid">
          <div className="contact__info">
            <p>{CONTACT.intro}</p>
            <div className="contact__links">
              {CONTACT.links.filter(l => l.url).map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="contact__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__link-icon">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="contact__success">
                <p>Message sent — I'll get back to you soon! 🚀</p>
              </div>
            ) : (
              <>
                <div className="contact__form-row">
                  <div className="form-field">
                    <label htmlFor="cf-name">Name</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="cf-subject">Subject</label>
                  <input
                    id="cf-subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {error && <p className="contact__error">{error}</p>}

                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
