import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import { useScrollY, useMediaQuery } from '../lib/motion.js'
import {
  ADDRESS, EMAIL, NAV_LEFT, NAV_RIGHT, PHONE_DISPLAY, PHONE_TEL,
} from '../lib/site.js'
import './header.css'

function NavItem({ item, open, setOpen }) {
  const ref = useRef(null)
  const panelId = `nav-panel-${item.label.toLowerCase().replace(/\s+/g, '-')}`
  const isOpen = open === item.label

  const closeIfOutside = (e) => {
    if (!ref.current?.contains(e.relatedTarget)) setOpen(null)
  }

  if (!item.panel) {
    return (
      <li className="hd-item">
        <a className="hd-link" href={item.href}>{item.label}</a>
      </li>
    )
  }

  return (
    <li
      className="hd-item hd-item--has-panel"
      ref={ref}
      onMouseEnter={() => setOpen(item.label)}
      onMouseLeave={() => setOpen(null)}
      onBlur={closeIfOutside}
      onKeyDown={(e) => { if (e.key === 'Escape') setOpen(null) }}
    >
      <a className="hd-link" href={item.href}>{item.label}</a>
      <button
        type="button"
        className="hd-caret"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={`${isOpen ? 'Hide' : 'Show'} the ${item.label.toLowerCase()} menu`}
        onClick={() => setOpen(isOpen ? null : item.label)}
        onFocus={() => setOpen(item.label)}
      >
        <ChevronDown className="lucide" aria-hidden="true" />
      </button>

      <div className="hd-panel" id={panelId} data-open={isOpen ? 'true' : 'false'}>
        <span className="caps caps--sm hd-panel-label">{item.label}</span>
        <span className="rule rule--brass hd-panel-rule" />
        <ul className="hd-panel-list list-reset">
          {item.panel.map((entry) => (
            <li key={entry}>
              <a className="hd-panel-link" href={item.href} tabIndex={isOpen ? 0 : -1}>
                {entry}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function Header() {
  const [open, setOpen] = useState(null)
  const y = useScrollY()
  const compact = y > 48
  const isMobile = useMediaQuery('(max-width: 900px)')

  useEffect(() => { if (isMobile) setOpen(null) }, [isMobile])

  return (
    <header className="hd" data-compact={compact ? 'true' : 'false'}>
      <div className="hd-sub">
        <div className="shell shell--wide hd-sub-inner">
          <a className="hd-sub-link" href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          <span className="hd-sub-dot" aria-hidden="true">·</span>
          <a className="hd-sub-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <span className="hd-sub-dot" aria-hidden="true">·</span>
          <span className="hd-sub-text">{ADDRESS}</span>
        </div>
      </div>

      <div className="hd-bar">
        <div className="shell shell--wide hd-bar-inner">
          <nav className="hd-nav hd-nav--left" aria-label="Primary">
            <ul className="hd-list list-reset">
              {NAV_LEFT.map((item) => (
                <NavItem key={item.label} item={item} open={open} setOpen={setOpen} />
              ))}
            </ul>
          </nav>

          <a className="hd-mark" href="#top" aria-label="Swedburg Electric, home">
            <span className="hd-mark-name">Swedburg</span>
            <span className="hd-mark-sub" aria-hidden="true">
              <i className="hd-mark-rule" />
              Electric
              <i className="hd-mark-rule" />
            </span>
            <span className="hd-mark-mono" aria-hidden="true">SE</span>
          </a>

          <div className="hd-right">
            <nav className="hd-nav hd-nav--right" aria-label="Secondary">
              <ul className="hd-list list-reset">
                {NAV_RIGHT.map((item) => (
                  <NavItem key={item.label} item={item} open={open} setOpen={setOpen} />
                ))}
              </ul>
            </nav>
            <a className="btn btn--brass hd-call" href={PHONE_TEL}>
              <Phone className="lucide" aria-hidden="true" />
              <span className="hd-call-label">Call {PHONE_DISPLAY}</span>
              <span className="hd-call-short">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
