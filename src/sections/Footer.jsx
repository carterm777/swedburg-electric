import { Phone, MessageSquare, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Reveal, Stagger } from '../lib/motion.js'
import {
  ADDRESS_LINE_1, ADDRESS_LINE_2, EMAIL, FOOTER_LINKS, FOOTER_SERVICES,
  PHONE_DISPLAY, PHONE_SMS, PHONE_TEL,
} from '../lib/site.js'
import './footer.css'

const SOCIAL = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="ft" id="footer" aria-labelledby="ft-title">
      <div className="shell ft-shell">
        <Reveal technique="rise" className="ft-panel">
          <div className="ft-panel-lead">
            <p className="caps caps--sm ft-panel-eyebrow">Contact</p>
            <h2 className="ft-panel-title" id="ft-title">Reach The Shop</h2>
          </div>
          <div className="ft-panel-actions">
            <a className="btn btn--brass" href={PHONE_TEL}>
              <Phone className="lucide" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
            <a className="btn btn--line-dark" href={PHONE_SMS}>
              <MessageSquare className="lucide" aria-hidden="true" />
              Send A Text
            </a>
          </div>
        </Reveal>

        <Stagger className="ft-cols" itemClassName="ft-col" technique="rise" step={110} start={60}>
          <div className="ft-brand">
            <span className="ft-mark">
              <span className="ft-mark-name">Swedburg</span>
              <span className="ft-mark-sub">Electric</span>
            </span>
            <p className="ft-mission">
              We&rsquo;ve provided licensed residential, commercial, and renovation electrical
              services to Cochrane, Calgary, and area since 2017. Based in Cochrane, working
              across the region.
            </p>
            <ul className="ft-social list-reset">
              {SOCIAL.map(({ Icon, label }) => (
                <li key={label}>
                  <a className="ft-social-link" href="#footer" aria-label={label}>
                    <Icon className="lucide" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="caps ft-col-title">Our Services</h3>
            <ul className="ft-list list-reset">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}><a className="tlink ft-link" href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="caps ft-col-title">Quick Links</h3>
            <ul className="ft-list list-reset">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}><a className="tlink ft-link" href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="caps ft-col-title">Visit Or Call</h3>
            <p className="ft-name">Swedburg Electric</p>
            <address className="ft-address">
              <span className="ft-line">
                <MapPin className="lucide" aria-hidden="true" />
                <span>{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</span>
              </span>
              <a className="ft-line ft-line--link" href={PHONE_TEL}>
                <Phone className="lucide" aria-hidden="true" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a className="ft-line ft-line--link" href={PHONE_SMS}>
                <MessageSquare className="lucide" aria-hidden="true" />
                <span>Text {PHONE_DISPLAY}</span>
              </a>
              <a className="ft-line ft-line--link" href={`mailto:${EMAIL}`}>
                <Mail className="lucide" aria-hidden="true" />
                <span>{EMAIL}</span>
              </a>
            </address>
          </div>
        </Stagger>
      </div>

      <div className="ft-legal">
        <div className="shell ft-legal-inner">
          <p>&copy; {new Date().getFullYear()} Swedburg Electric. All rights reserved.</p>
          <p className="placeholder placeholder--dark">
            Demo concept. Reviews, social links and photography are placeholders pending client
            assets.
          </p>
        </div>
      </div>
    </footer>
  )
}
