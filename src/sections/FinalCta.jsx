import { Phone, MessageSquare } from 'lucide-react'
import { Reveal, useCursorGlow } from '../lib/motion.js'
import { PHONE_DISPLAY, PHONE_SMS, PHONE_TEL } from '../lib/site.js'
import './cta.css'

export default function FinalCta() {
  const glowRef = useCursorGlow()

  return (
    <section
      className="section section--airy cta"
      id="contact"
      aria-labelledby="cta-title"
      ref={glowRef}
      data-glow-surface
    >
      <div className="cta-bed" aria-hidden="true">
        <img
          data-pan
          src="/images/street-dusk.webp"
          alt=""
          width="2000"
          height="1125"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="shell cta-shell">
        <Reveal as="span" technique="draw" className="rule cta-rule" />
        <Reveal as="p" technique="rise" className="caps caps--sm cta-eyebrow">
          Cochrane &amp; Calgary
        </Reveal>
        <Reveal as="h2" technique="clip" delay={110} className="cta-title" id="cta-title">
          Talk To A Cochrane Electrician About Your Next Project
        </Reveal>
        <Reveal as="p" technique="rise" delay={210} className="cta-support">
          Residential, commercial, or renovation — get a clear quote before any work starts.
        </Reveal>

        <Reveal technique="rise" delay={300} className="cta-actions">
          <a className="btn btn--brass" href={PHONE_TEL}>
            <Phone className="lucide" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
          <a className="btn btn--line-dark" href={PHONE_SMS}>
            <MessageSquare className="lucide" aria-hidden="true" />
            Text Us Instead
          </a>
        </Reveal>

        <Reveal technique="fade" delay={400} className="cta-foot">
          <a className="cta-number" href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          <p className="cta-note">
            A written estimate before any work starts, and no obligation either way.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
