import { SKILL_GROUPS } from '../data'
import './Skills.css'

export default function Skills() {
  return (
    <>
      <hr className="divider" />
      <section className="section section--dark" id="skills">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills &amp; technologies</h2>

        {/* ── Skill groups — add/edit in data.js → SKILL_GROUPS ── */}
        <div className="skills__grid">
          {SKILL_GROUPS.map((group, i) => (
            <div key={i} className="skills__group">
              <h4 className="skills__group-heading">{group.heading}</h4>
              <div className="skills__pills">
                {group.pills.map((pill, j) => (
                  <span key={j} className="skills__pill">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
