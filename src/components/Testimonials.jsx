import { useState, useEffect, useRef } from 'react'
import { useReveal } from './useReveal'
import './Testimonials.css'

const testimonials = [
    {
      text: '"Catherine and her team turned our dream Cordova wedding into something even more beautiful than we imagined. Every flower, every light, every moment was perfect."',
      author: 'Isabella & Marco Reyes',
      event: 'Garden Wedding · Cordova, Cebu, 2024',
    },
    {
      text: '"We were planning from Manila and were so overwhelmed, but J & C Events handled everything in Cebu seamlessly. We flew in and just enjoyed our day."',
      author: 'Sofia & James Tan',
      event: 'Destination Wedding · Mactan, Cebu, 2024',
    },
    {
      text: '"Our debut at Mandaue was absolutely magical. The blush and sage palette Catherine suggested was more stunning in person than anything on Pinterest."',
      author: 'Francesca Villanueva',
      event: '18th Debut · Mandaue, Cebu, 2023',
    },
    {
      text: '"Professional, warm, and impossibly detail-oriented. I didn\'t worry about a single thing on my wedding day in Lapu-Lapu. That is priceless."',
      author: 'Andrea & Paolo Cruz',
      event: 'Intimate Wedding · Lapu-Lapu City, Cebu, 2023',
    },
  ]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const r0 = useReveal(), r1 = useReveal()

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = idx => {
    setCurrent(idx)
    startTimer()
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-wrap">
          <p className="section-tag center reveal" ref={r0}>Kind words</p>
          <h2 className="section-title reveal" ref={r1}>Stories from <em>our couples</em></h2>
          <div className="quote-mark">"</div>

          <div className="t-slides">
            {testimonials.map((t, i) => (
              <div key={i} className={`t-slide ${i === current ? 'active' : ''}`}>
                <p className="t-text">{t.text}</p>
                <p className="t-author">{t.author}</p>
                <p className="t-event">{t.event}</p>
              </div>
            ))}
          </div>

          <div className="t-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}