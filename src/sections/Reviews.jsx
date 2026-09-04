import { Star } from 'lucide-react'
import { Reveal, Stagger, useCountUp, useInView } from '../lib/motion.js'
import { REVIEWS } from '../lib/site.js'
import './reviews.css'

export function GoogleMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Google" focusable="false">
      <path fill="var(--g-blue)" d="M45.1 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h11.9c-.5 2.8-2.1 5.1-4.4 6.7v5.5h7.1c4.2-3.8 6.5-9.5 6.5-16.4z" />
      <path fill="var(--g-green)" d="M24 46c5.9 0 10.9-2 14.6-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.7 0-10.6-3.9-12.3-9.1H4.3v5.7C8 41.3 15.4 46 24 46z" />
      <path fill="var(--g-amber)" d="M11.7 28.2c-.4-1.3-.7-2.7-.7-4.2s.3-2.9.7-4.2v-5.7H4.3A22 22 0 0 0 2 24c0 3.6.9 6.9 2.3 9.9l7.4-5.7z" />
      <path fill="var(--g-red)" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 29.9 2 24 2 15.4 2 8 6.7 4.3 13.9l7.4 5.7c1.7-5.2 6.6-9 12.3-9z" />
    </svg>
  )
}

export function Stars({ size = '', label = '5 out of 5 stars' }) {
  const [ref, inView] = useInView({ threshold: 0.5 })
  return (
    <span
      ref={ref}
      className={`stars ${size}`}
      data-sweep
      data-in={inView ? 'true' : 'false'}
      role="img"
      aria-label={label}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="lucide" style={{ '--star-delay': `${i * 90}ms` }} aria-hidden="true" />
      ))}
    </span>
  )
}

export default function Reviews() {
  const [featured, ...rest] = REVIEWS
  const [countRef, rating] = useCountUp(4.9, { duration: 1500, decimals: 1 })

  return (
    <section className="section rev" id="reviews" aria-labelledby="rev-title">
      <div className="shell rev-shell">
        <div className="rev-head">
          <Reveal as="p" technique="rise" className="caps caps--brass rev-eyebrow">
            Google Reviews
          </Reveal>
          <Reveal as="h2" technique="clip" delay={90} className="rev-title" id="rev-title">
            What Cochrane And Calgary Clients Say
          </Reveal>
        </div>

        <div className="rev-top">
          <Reveal technique="rise" delay={140} className="rev-agg">
            <span className="caps caps--sm rev-agg-label">Aggregate Rating</span>
            <span className="rev-agg-figure" ref={countRef}>{rating.toFixed(1)}</span>
            <Stars size="stars--lg" label="4.9 out of 5 stars" />
            <p className="rev-agg-line">
              4.9 out of 5 stars from Cochrane and Calgary-area Google reviews
            </p>
            <span className="rule rev-agg-rule" />
            <span className="rev-agg-src">
              <GoogleMark className="rev-g" />
              <span className="caps caps--sm">Google Reviews</span>
            </span>
          </Reveal>

          <Reveal technique="rise" delay={260} className="rev-feature">
            <span className="rev-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="rev-quote">
              <p>{featured.text}</p>
            </blockquote>
            <footer className="rev-byline">
              <span className="rev-initial" aria-hidden="true">{featured.name[0]}</span>
              <span className="rev-byline-text">
                <cite className="rev-name">{featured.name}</cite>
                <span className="caps caps--sm rev-topic">{featured.topic} · Cochrane</span>
              </span>
              <Stars />
            </footer>
          </Reveal>
        </div>

        <Stagger className="rev-row" itemClassName="rev-cell" technique="rise" step={110} start={60}>
          {rest.map((r) => (
            <figure className="rev-item" key={r.name}>
              <Stars />
              <blockquote className="rev-item-quote">
                <p>{r.text}</p>
              </blockquote>
              <figcaption className="rev-item-by">
                <cite className="rev-name">{r.name}</cite>
                <span className="caps caps--sm rev-topic">{r.topic}</span>
              </figcaption>
            </figure>
          ))}
        </Stagger>

        <Reveal as="p" technique="fade" delay={120} className="placeholder rev-note">
          Placeholder reviews shown for layout. These are replaced with live Google Business
          Profile reviews before launch.
        </Reveal>
      </div>
    </section>
  )
}
