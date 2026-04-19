import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const items = useRef([])

  useEffect(() => {
    items.current.forEach((el, i) => {
      if (!el) return
      setTimeout(() => el.classList.add('visible'), 100 + i * 140)
    })
  }, [])

  const r = i => el => { items.current[i] = el }

  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <p className="hero-eyebrow reveal" ref={r(0)}>Wedding &amp; Events Planner</p>
        <h1 className="hero-headline reveal" ref={r(1)}>
          Every detail,<br /><em>beautifully</em><br />yours.
        </h1>
        <p className="hero-sub reveal" ref={r(2)}>
          We craft intimate celebrations and grand affairs with equal devotion — from first vision to final dance.
        </p>
        <div className="hero-actions reveal" ref={r(3)}>
          <a href="#quote" className="btn-primary">Begin your story</a>
          <a href="#gallery" className="btn-ghost">View our work</a>
        </div>
        <div className="hero-stats reveal" ref={r(4)}>
          {[
            { num: '320+', label: 'Events crafted' },
            { num: '8', label: 'Years of J & C' },
            { num: '98%', label: 'Happy couples' },
          ].map(s => (
            <div key={s.label}>
              <span className="stat-num">{s.num}</span>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right">
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&fit=crop"
          alt="Elegant wedding celebration"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
      </div>
    </section>
  )
}