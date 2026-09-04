import { Phone } from 'lucide-react'
import { Reveal, useAccordion, useInView } from '../lib/motion.js'
import { FAQS, PHONE_DISPLAY, PHONE_TEL } from '../lib/site.js'
import './faq.css'

export default function Faq() {
  const { toggle, isOpen } = useAccordion(0)
  const [listRef, listIn] = useInView({ threshold: 0.12 })

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="shell faq-shell">
        <div className="faq-aside">
          <Reveal technique="rise" className="faq-aside-inner">
            <p className="caps caps--brass faq-eyebrow">Questions</p>
            <h2 className="faq-title" id="faq-title">Answers Before You Call</h2>
            <p className="faq-support">
              Five things people ask most often. Anything else, the shop will answer it straight.
            </p>
            <a className="btn btn--brass faq-call" href={PHONE_TEL}>
              <Phone className="lucide" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </Reveal>
        </div>

        <ul className="faq-list list-reset" ref={listRef} data-in={listIn ? 'true' : 'false'}>
          {FAQS.map((item, i) => {
            const open = isOpen(i)
            return (
              <li
                className="faq-item"
                key={item.q}
                data-reveal="rise"
                data-open={open ? 'true' : 'false'}
                style={{ '--reveal-delay': `${i * 90}ms` }}
              >
                <h3 className="faq-q">
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={open}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-glyph" aria-hidden="true">
                      <i className="faq-glyph-bar faq-glyph-bar--h" />
                      <i className="faq-glyph-bar faq-glyph-bar--v" />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-panel"
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  inert={open ? undefined : ''}
                >
                  <div className="faq-panel-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
