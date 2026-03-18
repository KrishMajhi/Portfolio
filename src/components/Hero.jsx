import { useEffect, useRef } from 'react'
import { PERSON } from '../data'
import './Hero.css'

// ── PARTICLE CONFIG ────────────────────────────────────────
// Tweak these numbers to change the particle network feel
const PARTICLE_COUNT = 90       // number of floating dots
const MAX_DIST       = 130      // max distance to draw a line between two dots
const MOUSE_DIST     = 160      // max distance to connect a dot to the cursor
const PARTICLE_SPEED = 0.5      // max speed of each dot (lower = slower drift)
const DOT_SIZE_MIN   = 0.8      // minimum dot radius in px
const DOT_SIZE_MAX   = 1.8      // maximum dot radius in px
// ──────────────────────────────────────────────────────────

export default function Hero() {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: null, y: null })

  // ── Particle Network Animation ────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animId
    let particles = []

    function resize() {
      canvas.width  = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }

    class Particle {
      constructor() {
        this.x  = Math.random() * canvas.width
        this.y  = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * PARTICLE_SPEED
        this.vy = (Math.random() - 0.5) * PARTICLE_SPEED
        this.r  = Math.random() * (DOT_SIZE_MAX - DOT_SIZE_MIN) + DOT_SIZE_MIN
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width)  this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }
    }

    function init() {
      resize()
      particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle())
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.update()

        // draw dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.75)'
        ctx.fill()

        // connect to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q  = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX_DIST) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / MAX_DIST) * 0.35})`
            ctx.lineWidth   = 0.6
            ctx.stroke()
          }
        }

        // connect to mouse cursor
        const mx = mouseRef.current.x
        const my = mouseRef.current.y
        if (mx !== null) {
          const dx = p.x - mx
          const dy = p.y - my
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < MOUSE_DIST) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mx, my)
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / MOUSE_DIST) * 0.6})`
            ctx.lineWidth   = 0.8
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    const hero = canvas.parentElement

    const onMouseMove = e => {
      const rect       = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onMouseLeave = () => { mouseRef.current = { x: null, y: null } }

    init()
    draw()
    hero.addEventListener('mousemove', onMouseMove)
    hero.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      hero.removeEventListener('mousemove', onMouseMove)
      hero.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero" id="home">
      {/* particle canvas — stays behind all content */}
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* ── Left: text content ── */}
      <div className="hero__content">
        <p className="hero__eyebrow">{PERSON.role}</p>

        {/* Name comes from data.js → PERSON.name */}
        <h1 className="hero__name">
          {PERSON.name.split(' ').map((word, i) => (
            <span key={i}>{word}<br /></span>
          ))}
        </h1>

        {/* Tagline comes from data.js → PERSON.tagline */}
        <p className="hero__tagline">{PERSON.tagline}</p>

        {/* Bio comes from data.js → PERSON.heroBio */}
        <p className="hero__desc">{PERSON.heroBio}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn-primary">View my work</a>
          <a href="#contact"  className="btn-outline">Get in touch</a>
        </div>
      </div>

      {/* ── Right: avatar card ── */}
      <div className="hero__right">
        <div className="hero__avatar-wrap">
          <div className="hero__avatar-ring"  />
          <div className="hero__avatar-ring2" />

          {/* ── Profile picture ──────────────────────────────────
              If PERSON.avatarUrl is set in data.js, shows the image.
              Otherwise shows your initials (PERSON.initials).
              To add your photo:
                1. Put your image in src/assets/photo.jpg
                2. In data.js set: avatarUrl: myPhoto  (after importing it)
                   OR:             avatarUrl: 'https://your-cdn.com/photo.jpg'
          ─────────────────────────────────────────────────────── */}
          {PERSON.avatarUrl ? (
            <img
              src={PERSON.avatarUrl}
              alt={PERSON.name}
              className="hero__avatar-img"
            />
          ) : (
            <div className="hero__avatar-initials">{PERSON.initials}</div>
          )}

          {/* Availability badge — set PERSON.availabilityBadge to null in data.js to hide */}
          {PERSON.availabilityBadge && (
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              {PERSON.availabilityBadge}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
