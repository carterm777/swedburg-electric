import { Phone } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.js'
import { SERVICES, PHONE_DISPLAY, PHONE_TEL } from '../lib/site.js'
import './services.css'

const FIGURES = {
  a: {
    src: '/images/panel-tech.webp',
    alt: 'An electrician in navy workwear working at an open breaker panel with a clipboard in hand.',
    pos: 'center 34%',
  },
  b: {
    src: '/images/rewiring-hero.webp',
    alt: 'A stud-framed interior part-way through a renovation with new electrical cable run overhead.',
    pos: 'center 50%',
  },
  c: {
    src: '/images/office-ti.webp',
    alt: 'A finished modern office with glass partitions and continuous linear ceiling lighting.',
    pos: 'center 54%',
  },
}

function Pair({ items, cls, start }) {
  return (
    <Stagger className={`svc-pair ${cls}`} itemClassName="svc-slot" technique="rise" step={110} start={start}>
      {items.map((s) => (
        <article className="svc-item" key={s.title}>
          <span className="rule rule--brass svc-item-rule" />
          <h3 className="svc-item-title">{s.title}</h3>
          <p className="svc-item-body">{s.body}</p>
        </article>
      ))}
    </Stagger>
  )
}

export default function Services() {
  return (
    <section className="section section--quiet svc" id="services" aria-labelledby="svc-title">
      <div className="shell svc-shell">
        <div className="svc-head">
          <Reveal as="p" technique="rise" className="caps caps--brass svc-eyebrow">
            Services
          </Reveal>
          <Reveal as="h2" technique="clip" delay={110} className="svc-title" id="svc-title">
            Residential, Commercial And Renovation Electrical
          </Reveal>
        </div>

        <div className="svc-spread">
          <Reveal technique="settle" className="svc-figure svc-figure--a zoomable">
            <img src={FIGURES.a.src} alt={FIGURES.a.alt} width="2000" height="1125"
                 loading="lazy" decoding="async" style={{ objectPosition: FIGURES.a.pos }} />
          </Reveal>
          <Pair items={SERVICES.slice(0, 2)} cls="svc-pair--a" start={80} />

          <Pair items={SERVICES.slice(2, 4)} cls="svc-pair--b" start={0} />
          <Reveal technique="settle" delay={120} className="svc-figure svc-figure--b zoomable">
            <img src={FIGURES.b.src} alt={FIGURES.b.alt} width="2000" height="1125"
                 loading="lazy" decoding="async" style={{ objectPosition: FIGURES.b.pos }} />
          </Reveal>

          <Reveal technique="settle" className="svc-figure svc-figure--c zoomable">
            <img src={FIGURES.c.src} alt={FIGURES.c.alt} width="2000" height="1125"
                 loading="lazy" decoding="async" style={{ objectPosition: FIGURES.c.pos }} />
          </Reveal>
          <Pair items={SERVICES.slice(4, 6)} cls="svc-pair--c" start={120} />
        </div>

        <Reveal technique="rise" className="svc-foot">
          <p className="svc-foot-text">
            Not sure which one your project is? Describe it and we&rsquo;ll tell you.
          </p>
          <a className="btn btn--brass" href={PHONE_TEL}>
            <Phone className="lucide" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
