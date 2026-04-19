import { useReveal } from './useReveal'
import './About.css'

export default function About() {
    const r0 = useReveal(), r1 = useReveal(), r2 = useReveal()
    const r3 = useReveal(), r4 = useReveal(), r5 = useReveal(), r6 = useReveal()

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">

                    <div className="about-img-wrap reveal" ref={r0}>
                        <img
                            className="about-img"
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&fit=crop&crop=faces"
                            alt="Catherine, lead event planner"
                        />
                        <div className="about-img-accent" />
                        <div className="about-badge">
                            <span className="about-badge-num">8+</span>
                            <p className="about-badge-label">Years of J & C </p>
                        </div>
                    </div>

                    <div className="about-content">
                        <p className="section-tag reveal" ref={r1}>Meet your planner</p>
                        <h2 className="section-title reveal" ref={r2}>
                            Hi, I'm <em>Catherine</em>
                        </h2>

                        <p className="about-body reveal" ref={r3}>
                            With over eight years spent turning dreams into meticulously crafted celebrations,
                            I founded J &amp; C Events out of a simple belief: every love story deserves its own
                            language. From intimate garden ceremonies in Cebu to grand celebrations across the
                            Visayas, I bring the same devotion to every single detail.
                        </p>
                        <p className="about-body reveal" ref={r4}>
                            Before events, I spent three years coordinating destination weddings across
                            the Visayas and beyond. That journey taught me that the best celebrations
                            feel effortless — because someone worked tirelessly behind the scenes.
                        </p>

                        <div className="about-stats reveal" ref={r5}>
                            {[
                                { num: '320+', label: 'Events crafted' },
                                { num: '98%', label: 'Happy couples' },
                                { num: '12', label: 'Venue partners' },
                            ].map(s => (
                                <div key={s.label} className="about-stat">
                                    <span className="about-stat-num">{s.num}</span>
                                    <p className="about-stat-label">{s.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="about-signature reveal" ref={r6}>
                            Catherine Inoc
                            <span>Founder &amp; Lead Planner, J &amp; C Events · Cordova, Cebu</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}