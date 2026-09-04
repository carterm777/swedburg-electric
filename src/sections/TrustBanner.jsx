import { Shield, CalendarDays, MapPin, ThumbsUp } from 'lucide-react'
import { Reveal, Stagger, useInView } from '../lib/motion.js'
import './trust.css'

const BADGES = [
  { Icon: Shield, title: 'Licensed & Insured', note: 'Certified electrical contractor' },
  { Icon: CalendarDays, title: 'Serving Since 2017', note: 'Cochrane, Calgary and area' },
  { Icon: MapPin, title: 'Locally Owned & Operated', note: '225 Railway St E, Cochrane' },
  { Icon: ThumbsUp, title: 'Satisfaction Guaranteed', note: 'Finished to a standard that shows' },
]

/* Site-specific: the certificate rules draw from the centre outward. Each pair
   owns its own observer so it never forces the badges' stagger to rest. */
function CertificateRules({ flip = false }) {
  const [ref, inView] = useInView({ threshold: 0.5, rootMargin: '0px 0px -6% 0px' })
  const rules = flip ? ['fine', 'heavy'] : ['heavy', 'fine']
  return (
    <span className="tb-rules" ref={ref} data-in={inView ? 'true' : 'false'} aria-hidden="true">
      {rules.map((kind, i) => (
        <i
          key={kind}
          className={kind === 'fine' ? 'tb-rule tb-rule--fine' : 'tb-rule'}
          data-rule="center"
          style={{ '--reveal-delay': `${i * 90}ms` }}
        />
      ))}
    </span>
  )
}

export default function TrustBanner() {
  return (
    <section className="section section--band tb" aria-labelledby="tb-title">
      <div className="tb-texture" aria-hidden="true" />
      <div className="shell shell--wide tb-shell">
        <CertificateRules />

        <span className="tb-corner tb-corner--tl" aria-hidden="true" />
        <span className="tb-corner tb-corner--tr" aria-hidden="true" />
        <span className="tb-corner tb-corner--bl" aria-hidden="true" />
        <span className="tb-corner tb-corner--br" aria-hidden="true" />

        <Reveal as="h2" technique="clip" className="tb-title" id="tb-title">
          What Backs The Work
        </Reveal>

        <Stagger className="tb-row" itemClassName="tb-cell" technique="rise" step={110} start={80}>
          {BADGES.map(({ Icon, title, note }) => (
            <div className="tb-badge" key={title}>
              <Icon className="lucide tb-icon" aria-hidden="true" />
              <span className="tb-badge-title">{title}</span>
              <span className="tb-badge-note">{note}</span>
            </div>
          ))}
        </Stagger>

        <CertificateRules flip />
      </div>
    </section>
  )
}
