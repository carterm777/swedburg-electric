import { Phone } from 'lucide-react'
import { useScrollY, useMediaQuery } from '../lib/motion.js'
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/site.js'
import './sticky.css'

/* Sticky Bar Slide-In on Scroll Threshold. It only arrives past the hero, so it
   never competes for above-the-fold height on the 390x844 breakpoint. */
export default function StickyCall() {
  const y = useScrollY()
  const isMobile = useMediaQuery('(max-width: 900px)')
  const shown = isMobile && y > 560

  return (
    <div className="sc" data-shown={shown ? 'true' : 'false'} aria-hidden={!shown}>
      <a className="sc-link" href={PHONE_TEL} tabIndex={shown ? 0 : -1}>
        <Phone className="lucide" aria-hidden="true" />
        <span className="sc-label">Call Swedburg Electric</span>
        <span className="sc-number">{PHONE_DISPLAY}</span>
      </a>
    </div>
  )
}
