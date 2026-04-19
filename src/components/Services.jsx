import { useReveal } from './useReveal'
import './Services.css'

const packages = [
  {
    name: 'Essential',
    tag: 'Day-of coordination',
    price: '₱35,000',
    per: '/ event',
    features: [
      'Full day-of coordination (12 hrs)',
      'Venue & vendor timeline',
      'Ceremony & reception flow',
      '2 planning consultations',
      'Emergency kit included',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    tag: 'Full partial planning',
    price: '₱75,000',
    per: '/ event',
    badge: 'Most loved',
    features: [
      'Everything in Essential',
      'Vendor sourcing & management',
      'Décor mood board & styling',
      'Budget tracking spreadsheet',
      'Unlimited email support',
      'Guest list & RSVP management',
    ],
    featured: true,
  },
  {
    name: 'Bespoke',
    tag: 'Full-service planning',
    price: '₱140,000',
    per: '+',
    features: [
      'Everything in Premium',
      'End-to-end event management',
      'Custom design & florals',
      'Dedicated planner + 2 assistants',
      'Rehearsal dinner coordination',
      'Post-event wrap-up & gifts',
    ],
    featured: false,
  },
]

export default function Services() {
  const r0 = useReveal(), r1 = useReveal(), r2 = useReveal(), r3 = useReveal()

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <p className="section-tag center reveal" ref={r0}>Our packages</p>
          <h2 className="section-title reveal" ref={r1}>Curated <em>for you</em></h2>
          <p className="section-sub reveal" ref={r2}>
            Every love story is one of a kind. Choose the level of support that feels right, and we'll tailor it to your vision.
          </p>
        </div>
        <div className="packages-grid reveal" ref={r3}>
          {packages.map(pkg => (
            <div key={pkg.name} className={`package ${pkg.featured ? 'featured' : ''}`}>
              {pkg.badge && <span className="pkg-badge">{pkg.badge}</span>}
              <p className="pkg-name">{pkg.name}</p>
              <p className="pkg-tag-line">{pkg.tag}</p>
              <p className="pkg-price">
                {pkg.price}<span> {pkg.per}</span>
              </p>
              <div className="pkg-divider" />
              <ul className="pkg-features">
                {pkg.features.map(f => (
                  <li key={f} className="pkg-feature">{f}</li>
                ))}
              </ul>
              <button className="pkg-cta">Inquire now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}