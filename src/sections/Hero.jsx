import { Calculator, ThumbsUp, ShieldCheck, Hammer, Phone, ArrowRight } from 'lucide-react'
import { WordReveal } from '../lib/motion.js'
import PhotoDiagnosis from './PhotoDiagnosis.jsx'
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/site.js'
import './hero.css'

const BADGES = [
  { Icon: Calculator, label: 'Free Estimates' },
  { Icon: ThumbsUp, label: 'Satisfaction Guaranteed' },
  { Icon: ShieldCheck, label: 'Fully Insured' },
  { Icon: Hammer, label: 'Residential, Commercial & Renovation' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bed">
        <img
          className="hero-photo"
          data-kb
          src="/images/landscape-lighting.webp"
          alt="A large home at night with its facade and landscape lighting fully lit."
          width="2000"
          height="1125"
          fetchpriority="high"
          decoding="async"
        />
      </div>

      <div className="shell shell--wide hero-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="caps caps--brass hero-eyebrow" data-load style={{ '--reveal-delay': '0ms' }}>
              Cochrane, Alberta · Since 2017
            </p>

            {/* Weighted Word Reveal — the page's once-only typographic moment. */}
            <WordReveal
              as="h1"
              className="hero-h1"
              text="Professional Electricians Serving Cochrane & Calgary Since 2017"
              step={50}
              start={110}
            />

            <p className="hero-sub" data-load style={{ '--reveal-delay': '180ms' }}>
              Licensed electricians handling residential, commercial, and renovation work across
              Cochrane and Calgary since 2017, with a standard of finish that shows.
            </p>

            <ul className="hero-badges list-reset" data-load style={{ '--reveal-delay': '270ms' }}>
              {BADGES.map(({ Icon, label }) => (
                <li className="hero-badge" key={label}>
                  <Icon className="lucide hero-badge-icon" aria-hidden="true" />
                  <span className="hero-badge-label">{label}</span>
                </li>
              ))}
            </ul>

            <div className="hero-cta" data-load style={{ '--reveal-delay': '360ms' }}>
              <a className="btn btn--brass" href={PHONE_TEL}>
                <Phone className="lucide" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
              <a className="btn btn--line" href="#services">
                See What We Do
                <ArrowRight className="lucide" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-widget" data-load style={{ '--reveal-delay': '450ms' }}>
            <PhotoDiagnosis />
          </div>
        </div>
      </div>
    </section>
  )
}
