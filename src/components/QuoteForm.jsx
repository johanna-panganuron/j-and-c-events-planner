import { useState } from 'react'
import { useReveal } from './useReveal'
import './QuoteForm.css'

const INITIAL = {
  name: '', email: '', phone: '',
  eventType: '', date: '', guests: '',
  budget: '', venue: '', message: '',
}

function validate(fields) {
  const errs = {}
  if (!fields.name.trim()) errs.name = 'Your name is required.'
  if (!fields.email.trim()) errs.email = 'Email address is required.'
  else if (!/\S+@\S+\.\S+/.test(fields.email)) errs.email = 'Please enter a valid email.'
  if (!fields.eventType) errs.eventType = 'Please select an event type.'
  if (!fields.date) errs.date = 'An approximate date helps us check availability.'
  if (!fields.guests) errs.guests = 'Guest count is required.'
  return errs
}

export default function QuoteForm() {
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const r0 = useReveal(), r1 = useReveal(), r2 = useReveal()
  const r3 = useReveal(), r4 = useReveal(), r5 = useReveal()

  const set = key => e => setFields(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  return (
    <section id="quote" className="quote">
      <div className="container">
        <div className="quote-grid">

          <div className="quote-intro">
            <p className="section-tag light reveal" ref={r0}>Start here</p>
            <h2 className="section-title light reveal" ref={r1}>
              Let's plan<br /><em>together</em>
            </h2>
            <p className="section-sub light reveal" ref={r2}>
              Tell us about your vision and we'll reach out within 24 hours with a personalised proposal.
            </p>

            <ul className="quote-promises reveal" ref={r3}>
              {[
                'Free initial consultation — no obligation',
                'Tailored package options for every budget',
                'Availability check across all our venue partners',
                'Response guaranteed within one business day',
              ].map(p => (
                <li key={p} className="quote-promise">
                  <span className="quote-promise-dot" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="quote-contact reveal" ref={r4}>
              <p className="quote-contact-label">Prefer to call?</p>
              <p className="quote-contact-value">+63 949 128 0100</p>
            </div>
          </div>

          <div className="reveal" ref={r5}>
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✦</div>
                <h3>Message received</h3>
                <p>
                  Thank you, {fields.name.split(' ')[0]}. We'll review your details and be
                  in touch within 24 hours with availability and options crafted just for you.
                </p>
              </div>
            ) : (
              <form className="quote-form" onSubmit={handleSubmit} noValidate>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full name *</label>
                    <input className="form-input" placeholder="Catherine Inoc" value={fields.name} onChange={set('name')} />
                    <span className="form-error">{errors.name}</span>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input className="form-input" type="email" placeholder="hello@email.com" value={fields.email} onChange={set('email')} />
                    <span className="form-error">{errors.email}</span>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input className="form-input" placeholder="+63 9XX XXX XXXX" value={fields.phone} onChange={set('phone')} />
                    <span className="form-error" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Event type *</label>
                    <select className="form-select" value={fields.eventType} onChange={set('eventType')}>
                      <option value="">Select one…</option>
                      <option value="wedding">Wedding</option>
                      <option value="debut">18th Debut</option>
                      <option value="corporate">Corporate event</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="parties">Parties</option>
                      <option value="other">Other celebration</option>
                    </select>
                    <span className="form-error">{errors.eventType}</span>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Approximate date *</label>
                    <input className="form-input" type="date" value={fields.date} onChange={set('date')} />
                    <span className="form-error">{errors.date}</span>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Estimated guests *</label>
                    <select className="form-select" value={fields.guests} onChange={set('guests')}>
                      <option value="">Select range…</option>
                      <option value="under50">Under 50</option>
                      <option value="50-100">50 – 100</option>
                      <option value="100-200">100 – 200</option>
                      <option value="200-350">200 – 350</option>
                      <option value="350+">350+</option>
                    </select>
                    <span className="form-error">{errors.guests}</span>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Budget range</label>
                    <select className="form-select" value={fields.budget} onChange={set('budget')}>
                      <option value="">Select range…</option>
                      <option value="under50k">Under ₱50,000</option>
                      <option value="50-100k">₱50,000 – ₱100,000</option>
                      <option value="100-200k">₱100,000 – ₱200,000</option>
                      <option value="200-500k">₱200,000 – ₱500,000</option>
                      <option value="500k+">₱500,000+</option>
                    </select>
                    <span className="form-error" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Venue in mind?</label>
                    <input
                      className="form-input"
                      placeholder="e.g. Shangri-La Mactan, Plantation Bay, Cebu City…"
                      value={fields.venue}
                      onChange={set('venue')}
                    />
                    <span className="form-error" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Tell us about your dream event</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Share your vision, inspiration, must-haves, or anything you'd love us to know…"
                    value={fields.message}
                    onChange={set('message')}
                  />
                  <span className="form-error" />
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn-submit">Send inquiry</button>
                  <p className="form-note">We respond within 24 hours,<br />typically much sooner.</p>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}