import { PROJECTS } from '../data'
import './Projects.css'

export default function Projects() {
  return (
    <>
      <hr className="divider" />
      <section className="section" id="projects">
        <p className="section-label">Work</p>
        <h2 className="section-title">Featured projects</h2>

        {/* ── Project cards — add/edit in data.js → PROJECTS array ── */}
        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <div key={i} className="project-card">
              {/* Tag / category */}
              <p className="project-card__tag">{project.tag}</p>

              {/* Project name */}
              <h3 className="project-card__name">{project.name}</h3>

              {/* Description */}
              <p className="project-card__desc">{project.description}</p>

              {/* Tech stack pills */}
              <div className="project-card__stack">
                {project.stack.map((tech, j) => (
                  <span key={j} className="project-card__tech">{tech}</span>
                ))}
              </div>

              {/* ── Links ─────────────────────────────────────────────
                  Set liveUrl / githubUrl in data.js → PROJECTS
                  Set either to null to hide that link
              ───────────────────────────────────────────────────────── */}
              <div className="project-card__links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    Live demo →
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link project-card__link--ghost"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
