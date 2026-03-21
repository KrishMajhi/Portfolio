import { ABOUT } from '../data'
import './About.css'

export default function About() {
  return (
    <>
      <hr className="divider" />
      <section className="section" id="about">
        <p className="section-label">About me</p>
        <h2 className="section-title">Who I am</h2>

        <div className="about__grid">
          {/* ── Bio paragraphs — edit in data.js → ABOUT.paragraphs ── */}
          <div className="about__text">
            {ABOUT.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* ── Stats — edit numbers/labels in data.js → ABOUT.stats ── */}
          {/* <div className="about__stats">
            {ABOUT.stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-card__num">{s.number}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  )
}
