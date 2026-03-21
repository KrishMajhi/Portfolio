

import { useEffect, useRef } from 'react'
import { PERSON } from '../data'
import './Hero.css'

const PARTICLE_COUNT = 150
const MAX_DIST       = 130
const MOUSE_DIST     = 160
const PARTICLE_SPEED = 0.5
const DOT_SIZE_MIN   = 0.8
const DOT_SIZE_MAX   = 1.8

// Glow colors cycling on each click
const GLOW_COLORS = [
  { r: 167, g: 139, b: 250 }, // purple
  { r: 80,  g: 200, b: 255 }, // cyan
  { r: 255, g: 100, b: 180 }, // pink
  { r: 100, g: 255, b: 180 }, // mint
  { r: 255, g: 200, b: 80  }, // gold
]

export default function Hero() {
  const canvasRef   = useRef(null)
  const mouseRef    = useRef({ x: null, y: null })
  const glowRef     = useRef({ active: false, x: 0, y: 0, alpha: 0, colorIdx: 0 })

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
        this.glowAlpha = 0
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width)  this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
        // fade out individual particle glow
        if (this.glowAlpha > 0) this.glowAlpha -= 0.012
      }
    }

    function init() {
      resize()
      particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle())
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const g      = glowRef.current
      const col    = GLOW_COLORS[g.colorIdx % GLOW_COLORS.length]
      const useGlow = g.active && g.alpha > 0

      // fade global glow alpha
      if (useGlow) g.alpha -= 0.008

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.update()

        // determine per-particle glow from click proximity
        if (useGlow) {
          const dx = p.x - g.x
          const dy = p.y - g.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 220) {
            p.glowAlpha = Math.max(p.glowAlpha, (1 - d / 220) * g.alpha * 1.4)
          }
        }

        const pa = Math.min(p.glowAlpha, 1)

        // glow halo behind dot
        if (pa > 0.01) {
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
          grd.addColorStop(0,   `rgba(${col.r},${col.g},${col.b},${pa * 0.6})`)
          grd.addColorStop(1,   `rgba(${col.r},${col.g},${col.b},0)`)
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }

        // dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = pa > 0.01
          ? `rgba(${col.r},${col.g},${col.b},${0.75 + pa * 0.25})`
          : 'rgba(255,255,255,0.75)'
        ctx.fill()

        // connect to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q  = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX_DIST) {
            const lineAlpha = (1 - d / MAX_DIST)
            const lineGlow  = Math.max(pa, Math.min(q.glowAlpha, 1))

            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)

            if (lineGlow > 0.01) {
              // glowing coloured line
              ctx.strokeStyle = `rgba(${col.r},${col.g},${col.b},${lineAlpha * lineGlow * 0.9})`
              ctx.lineWidth   = 0.6 + lineGlow * 1.2
              ctx.shadowColor = `rgba(${col.r},${col.g},${col.b},${lineGlow * 0.8})`
              ctx.shadowBlur  = 6 * lineGlow
            } else {
              ctx.strokeStyle = `rgba(255,255,255,${lineAlpha * 0.35})`
              ctx.lineWidth   = 0.6
              ctx.shadowBlur  = 0
            }
            ctx.stroke()
            ctx.shadowBlur = 0
          }
        }

        // connect to mouse
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

    // click handler — trigger glow burst and cycle color
    const onClick = e => {
      const rect = canvas.getBoundingClientRect()
      const g    = glowRef.current
      g.active   = true
      g.x        = e.clientX - rect.left
      g.y        = e.clientY - rect.top
      g.alpha    = 1
      g.colorIdx = (g.colorIdx + 1) % GLOW_COLORS.length
    }

    init()
    draw()
    hero.addEventListener('mousemove',  onMouseMove)
    hero.addEventListener('mouseleave', onMouseLeave)
    hero.addEventListener('click',      onClick)
    window.addEventListener('resize',   resize)

    return () => {
      cancelAnimationFrame(animId)
      hero.removeEventListener('mousemove',  onMouseMove)
      hero.removeEventListener('mouseleave', onMouseLeave)
      hero.removeEventListener('click',      onClick)
      window.removeEventListener('resize',   resize)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__content">
        <p className="hero__eyebrow">{PERSON.role}</p>
        <h1 className="hero__name">
          {PERSON.name.split(' ').map((word, i) => (
            <span key={i}>{word}<br /></span>
          ))}
        </h1>
        <p className="hero__tagline">{PERSON.tagline}</p>
        <p className="hero__desc">{PERSON.heroBio}</p>
        <div className="hero__actions">
          <a href="#projects" className="btn-primary">View my work</a>
          <a href="#contact"  className="btn-outline">Get in touch</a>
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__avatar-wrap">
          <div className="hero__avatar-ring"  />
          <div className="hero__avatar-ring2" />
          {PERSON.avatarUrl ? (
            <img src={PERSON.avatarUrl} alt={PERSON.name} className="hero__avatar-img" />
          ) : (
            <div className="hero__avatar-initials">{PERSON.initials}</div>
          )}
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