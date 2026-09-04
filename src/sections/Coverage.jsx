import { Phone, Mail } from 'lucide-react'
import { Reveal, useInView } from '../lib/motion.js'
import {
  AREA_LINKS, ADDRESS_LINE_1, ADDRESS_LINE_2, EMAIL, PHONE_DISPLAY, PHONE_TEL,
} from '../lib/site.js'
import './coverage.css'

export default function Coverage() {
  const [listRef, listIn] = useInView({ threshold: 0.12 })

  return (
    <section className="section cov" id="coverage" aria-labelledby="cov-title">
      <div className="shell cov-head">
        <Reveal as="p" technique="rise" className="caps caps--brass cov-eyebrow">
          Coverage
        </Reveal>
        <Reveal as="h2" technique="clip" delay={110} className="cov-title" id="cov-title">
          Based In Cochrane, Working Across Calgary And Area
        </Reveal>
        <Reveal as="p" technique="rise" delay={200} className="lede cov-lede">
          We&rsquo;re based in Cochrane and regularly serve Calgary and the surrounding area,
          including Airdrie, Bragg Creek, Canmore, Bearspaw, Springbank, Cochrane Lake,
          Crossfield, Water Valley, Ghost Lake, and Bottrel. Call to confirm coverage for your
          specific project location.
        </Reveal>
      </div>

      <Reveal technique="settle" className="cov-band">
        <img
          src="/images/panorama-hills-hero.webp"
          alt="An elevated view across an Alberta suburb toward the Calgary skyline at golden hour."
          width="2000"
          height="1125"
          loading="lazy"
          decoding="async"
        />
      </Reveal>

      <div className="shell cov-body">
        <div className="cov-index">
          <h3 className="caps cov-sub">Areas We Serve</h3>
          <ul className="cov-list list-reset" ref={listRef} data-in={listIn ? 'true' : 'false'}>
            {AREA_LINKS.map((town, i) => (
              <li key={town} data-reveal="rise" style={{ '--reveal-delay': `${i * 60}ms` }}>
                <a className="cov-row sweep-row" href="#contact">
                  <span className="sweep-name cov-town">{town}</span>
                  <span className="cov-ab" aria-hidden="true">AB</span>
                  <span className="sweep-line" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Reveal technique="rise" delay={120} className="cov-card">
          <h3 className="caps cov-sub">The Shop</h3>
          <address className="cov-addr">
            {ADDRESS_LINE_1}
            <br />
            {ADDRESS_LINE_2}
          </address>
          <span className="rule rule--brass cov-card-rule" />
          <p className="caps caps--sm cov-card-label">Hours</p>
          <p className="cov-hours">
            Monday to Friday, 8am&ndash;5pm
            <br />
            Saturday, Sunday and holidays upon request
          </p>
          <span className="rule cov-card-rule" />
          <p className="cov-contact">
            <a className="tlink cov-contact-link" href={PHONE_TEL}>
              <Phone className="lucide" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a className="tlink cov-contact-link" href={`mailto:${EMAIL}`}>
              <Mail className="lucide" aria-hidden="true" />
              {EMAIL}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
