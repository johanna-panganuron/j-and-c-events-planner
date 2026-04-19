import { useState } from 'react'
import { useReveal } from './useReveal'
import './FAQ.css'

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'We recommend reaching out 9–18 months before your wedding date to secure your preferred vendors and venue in Cebu. For smaller events like debuts and corporate gatherings, 3–6 months is usually sufficient. We do occasionally take shorter bookings depending on availability — just ask.',
  },
  {
    q: 'Do you work with clients outside Cebu?',
    a: 'Absolutely. While we are based in Cordova, Cebu, we regularly plan events across the Visayas — including Bohol, Dumaguete, Bacolod, and Boracay — and have coordinated destination weddings throughout the Philippines. Travel and accommodation fees apply for locations outside Cebu.',
  },
  {
    q: 'What does "day-of coordination" mean exactly?',
    a: 'Day-of coordination means we step in about 4–6 weeks before your event to take over vendor communication, build a detailed timeline, and run everything seamlessly on the day itself. You enjoy your celebration; we handle every moving part behind the scenes.',
  },
  {
    q: 'Can I customise a package?',
    a: 'Yes — our packages are starting points, not boxes. We can add florals, photography management, transportation logistics, or pre-event styling sessions. We\'ll build a scope that fits exactly what you need.',
  },
  {
    q: 'How much does a full wedding typically cost with J & C?',
    a: 'Our packages start at ₱35,000 for day-of coordination. A full-service wedding with florals, styling, and a dedicated team typically ranges from ₱140,000 to ₱300,000+ depending on scale. We always work transparently with your total event budget and help you allocate it wisely.',
  },
  {
    q: 'Do you have preferred vendors or can I bring my own?',
    a: 'We have trusted, vetted partners across Cebu for photography, catering, florals, entertainment, and more — but we\'re happy to work with vendors you love. Our role is to make any team of suppliers function like a single seamless unit.',
  },
  {
    q: 'What happens if I need to reschedule or cancel?',
    a: 'Life happens. Our rescheduling policy allows one free date change within 12 months. Cancellations are handled according to the timeline outlined in your contract, with a portion of the retainer retained for planning work already completed.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-trigger" onClick={() => setOpen(o => !o)}>
        <span className="faq-question">{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-body">
        <div className="faq-body-inner">
          <p className="faq-answer">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const r0 = useReveal(), r1 = useReveal(), r2 = useReveal(), r3 = useReveal()

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq-grid">

          <div className="faq-intro">
            <p className="section-tag reveal" ref={r0}>Common questions</p>
            <h2 className="section-title reveal" ref={r1}>
              Good to <em>know</em>
            </h2>
            <p className="section-sub reveal" ref={r2}>
              Everything you'd want to ask before our first call — answered honestly.
            </p>
            <a href="#quote" className="btn-primary reveal" ref={r3}>Ask something else</a>
          </div>

          <div className="faq-list reveal" ref={r3}>
            {faqs.map(f => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}