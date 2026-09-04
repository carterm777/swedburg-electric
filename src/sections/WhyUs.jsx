import { Hammer, Layers, MapPin, ClipboardCheck } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.js'
import './whyus.css'

const POINTS = [
  {
    Icon: Hammer,
    title: 'Renovation-Ready Expertise',
    body: 'Renovation electrical work means coordinating with other trades and working around a home that’s still lived in. We’ve built our process around that reality.',
  },
  {
    Icon: Layers,
    title: 'Commercial & Residential Range',
    body: 'From a single-family home to a commercial tenant space, the same finish standard carries through every job.',
  },
  {
    Icon: MapPin,
    title: 'Based In Cochrane, Working Across Calgary',
    body: 'Local to Cochrane and familiar with the Calgary market, so you get a contractor who knows both without a long drive changing the price.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Clean, Documented Work',
    body: 'Panels labelled, work photographed, and nothing left for the next person to guess at.',
  },
]

export default function WhyUs() {
  return (
    <section className="section why" id="why" aria-labelledby="why-title">
      <div className="shell why-shell">
        <div className="why-top">
          <Reveal technique="settle" className="why-figure">
            <img
              src="/images/panel-new.webp"
              alt="A finished breaker panel in a clean grey enclosure with the door open and every circuit labelled."
              width="2000"
              height="1125"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          <div className="why-statement">
            <Reveal as="p" technique="rise" className="caps caps--brass why-eyebrow">
              Why Swedburg
            </Reveal>
            <Reveal as="h2" technique="clip" delay={120} className="why-title" id="why-title">
              The Same Standard, Whether It&rsquo;s A Kitchen Or A Tenant Space
            </Reveal>
            <Reveal as="p" technique="rise" delay={220} className="lede why-lede">
              Four things that hold true on a lived-in basement renovation and a commercial
              tenant space alike.
            </Reveal>
          </div>
        </div>

        <Stagger className="why-row" itemClassName="why-cell" technique="rise" step={110} start={80}>
          {POINTS.map(({ Icon, title, body }, i) => (
            <div className="why-point" key={title}>
              <span
                className="rule rule--brass why-point-rule"
                data-reveal="draw"
                style={{ '--reveal-delay': `${260 + i * 110}ms` }}
              />
              <Icon className="lucide why-point-icon" aria-hidden="true" />
              <h3 className="why-point-title">{title}</h3>
              <p className="why-point-body">{body}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
