import { useState } from 'react'
import './Footer.css'

const year = new Date().getFullYear()

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = e => {
    e.preventDefault()
    if (email.includes('@')) setSubscribed(true)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              J &amp; C
              <span>Events &amp; Weddings</span>
            </a>
            <p className="footer-tagline">
              Crafting intimate celebrations and grand affairs with equal devotion — from first vision to final dance.
            </p>
            <div className="footer-socials">
              {[
                { label: 'IG', href: '#' },
                { label: 'FB', href: '#' },
                { label: 'TK', href: '#' },
                { label: 'PT', href: '#' },
              ].map(s => (
                <a key={s.label} href={s.href} className="social-link" aria-label={s.label}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="footer-col-title">Navigate</p>
            <ul className="footer-nav">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'About', href: '#about' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Get a quote', href: '#quote' },
              ].map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Get in touch</p>
            {[
              { label: 'Phone', value: '+63 949 128 0100' },
              { label: 'Email', value: 'hello@jandcevents.ph' },
              { label: 'Location', value: 'Cordova, Cebu' },
              { label: 'Hours', value: 'Mon–Sat, 9 am – 6 pm' },
            ].map(c => (
              <div key={c.label} className="footer-contact-item">
                <span className="footer-contact-label">{c.label}</span>
                <span className="footer-contact-value">{c.value}</span>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <p className="footer-col-title">Stay inspired</p>
            <p className="footer-newsletter-text">
              Planning tips, real weddings, and seasonal inspiration — straight to your inbox. No spam, ever.
            </p>
            {subscribed ? (
              <p style={{ fontSize: '0.82rem', color: 'var(--blush)', lineHeight: 1.6 }}>
                ✦ &nbsp;You're on the list.<br />
                <span style={{ color: 'rgba(245,239,230,0.4)', fontSize: '0.75rem' }}>
                  Welcome to the J &amp; C family.
                </span>
              </p>
            ) : (
              <form className="footer-newsletter-form" onSubmit={handleNewsletter}>
                <input
                  className="footer-newsletter-input"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="footer-newsletter-btn">Subscribe</button>
              </form>
            )}
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-credits">
            <p className="footer-copy">
              &copy; {year} J &amp; C Events. All rights reserved.
            </p>
            <a
              href="https://johanna-panganuron.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="designer-link"
            >
              Developed by Johanna B. Panganuron
            </a>
          </div>

          <nav className="footer-legal">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Cookie settings</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}