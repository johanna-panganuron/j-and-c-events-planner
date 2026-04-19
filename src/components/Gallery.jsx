import { useState } from 'react'
import { useReveal } from './useReveal'
import './Gallery.css'

const filters = ['All', 'Weddings', 'Debuts', 'Corporate', 'Parties']
const catMap = { Weddings: 'wedding', Debuts: 'debut', Corporate: 'corporate', Parties: 'party' }

const images = [
    // Weddings
    { src: '/images/gallery/garden-wedding.avif', cat: 'wedding', caption: 'Garden ceremony · Cordova, Cebu' },
    { src: '/images/gallery/reception-evening.jpg', cat: 'wedding', caption: 'Reception evening · Cebu City' },
    { src: '/images/gallery/table-setting.webp', cat: 'wedding', caption: 'Table setting · Lapu-Lapu City' },

    // Debuts
    { src: '/images/gallery/debut-soiree.jpg', cat: 'debut', caption: 'Debut soirée · Mandaue, Cebu' },
    { src: '/images/gallery/debut-18th.jpg', cat: 'debut', caption: '18th debut · Cordova, Cebu' },
    { src: '/images/gallery/debut-entrance.jpg', cat: 'debut', caption: 'Debut entrance · Cebu City' },

    // Corporate
    { src: '/images/gallery/corporate-gala.jpg', cat: 'corporate', caption: 'Corporate gala · Cebu Business Park' },
    { src: '/images/gallery/awards-night.jpg', cat: 'corporate', caption: 'Awards night · Cebu City' },
    { src: '/images/gallery/team-conference.png', cat: 'corporate', caption: 'Team conference · Cebu IT Park' },

    // Parties
    { src: '/images/gallery/birthday-celebration.jpg', cat: 'party', caption: 'Birthday celebration · Cordova, Cebu' },
    { src: '/images/gallery/styled-gathering.jpg', cat: 'party', caption: 'Styled gathering · Mactan, Cebu' },
    { src: '/images/gallery/anniversary-dinner.avif', cat: 'party', caption: 'Anniversary dinner · Cebu City' },
]

export default function Gallery() {
    const [active, setActive] = useState('All')
    const [lightbox, setLightbox] = useState(null)

    const r0 = useReveal(), r1 = useReveal(), r2 = useReveal(), r3 = useReveal()

    const filtered = active === 'All' ? images : images.filter(img => img.cat === catMap[active])

    const openLightbox = idx => setLightbox(idx)
    const closeLightbox = () => setLightbox(null)
    const shiftLightbox = dir => {
        setLightbox(i => (i + dir + filtered.length) % filtered.length)
    }

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="gallery-header">
                    <div>
                        <p className="section-tag reveal" ref={r0}>Our portfolio</p>
                        <h2 className="section-title reveal" ref={r1}>Moments <em>remembered</em></h2>
                    </div>
                    <div className="gallery-filters reveal" ref={r2}>
                        {filters.map(f => (
                            <button
                                key={f}
                                className={`filter-btn ${active === f ? 'active' : ''}`}
                                onClick={() => setActive(f)}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="gallery-grid reveal" ref={r3}>
                    {filtered.map((img, idx) => (
                        <div
                            key={img.src}
                            className={`gallery-item gi-${idx}`}
                            onClick={() => openLightbox(idx)}
                        >
                            <img className="gallery-img" src={img.src} alt={img.caption} loading="lazy" />
                            <div className="gallery-overlay">
                                <div className="gallery-zoom">+</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightbox !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>✕ Close</button>
                        <button className="lightbox-nav lightbox-prev" onClick={() => shiftLightbox(-1)}>&#8592;</button>
                        <img
                            className="lightbox-img"
                            src={filtered[lightbox].src.replace(/w=\d+/, 'w=1200')}
                            alt={filtered[lightbox].caption}
                        />
                        <button className="lightbox-nav lightbox-next" onClick={() => shiftLightbox(1)}>&#8594;</button>
                        <p className="lightbox-caption">{filtered[lightbox].caption}</p>
                    </div>
                </div>
            )}
        </section>
    )
}