/* Content constants. Every string here is either verbatim from PROMPT.txt or a
   label written in the brief's composed, editorial register. */

export const PHONE_DISPLAY = '403-804-3895'
export const PHONE_TEL = 'tel:+14038043895'
export const PHONE_SMS = 'sms:+14038043895'
export const EMAIL = 'operations@swedburgelectric.com'
export const ADDRESS = '225 Railway St E, Cochrane, AB T4C 2C3'
export const ADDRESS_LINE_1 = '225 Railway St E'
export const ADDRESS_LINE_2 = 'Cochrane, AB T4C 2C3'

export const SERVICE_LINKS = [
  'Residential Electrical',
  'Commercial Electrical',
  'Renovation Electrical',
  'Panel Upgrades',
  'Lighting Installation',
  'Tenant Improvements',
  'New Construction Wiring',
  'Troubleshooting & Repairs',
  'Electrical Inspections',
  'EV Charger Installation',
  'Basement Development Wiring',
  'Service Calls',
]

export const AREA_LINKS = [
  'Cochrane',
  'Calgary',
  'Airdrie',
  'Bragg Creek',
  'Canmore',
  'Bearspaw',
  'Springbank',
  'Cochrane Lake',
  'Crossfield',
  'Water Valley',
  'Ghost Lake',
  'Bottrel',
]

export const NAV_LEFT = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#story' },
  { label: 'Services', href: '#services', panel: SERVICE_LINKS },
  { label: 'Service Areas', href: '#coverage', panel: AREA_LINKS },
]

export const NAV_RIGHT = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#footer' },
  { label: 'Contact', href: '#contact' },
]

export const REVIEWS = [
  {
    name: 'Heather N.',
    text: 'Renovated our kitchen and the electrical work was the cleanest part of the whole project. Panel labelled properly, nothing left loose behind the drywall.',
    topic: 'Kitchen renovation',
  },
  {
    name: 'Craig B.',
    text: 'Commercial tenant improvement job, done on schedule and on budget. No change orders we weren’t warned about ahead of time.',
    topic: 'Tenant improvement',
  },
  {
    name: 'Priya S.',
    text: 'Called about a renovation that had already gone sideways with another contractor. They sorted out the mess and finished it properly.',
    topic: 'Renovation rescue',
  },
  {
    name: 'Mark F.',
    text: 'Quoted fairly and the crew was tidy on-site, which matters when you’re living in the house during a renovation.',
    topic: 'Residential',
  },
  {
    name: 'Alison D.',
    text: 'Small commercial build-out in Calgary, and they coordinated well with our other trades without needing much hand-holding.',
    topic: 'Commercial build-out',
  },
]

export const SERVICES = [
  {
    title: 'Residential Electrical',
    body: 'Wiring, repairs, and upgrades for homes across Cochrane and Calgary.',
  },
  {
    title: 'Commercial Electrical',
    body: 'Electrical work for offices and commercial spaces, coordinated around a business’s real operating hours.',
  },
  {
    title: 'Renovation Electrical',
    body: 'Wiring planned around an existing home or space rather than treated as an afterthought.',
  },
  {
    title: 'Panel Upgrades & Service Changes',
    body: 'Older panels replaced and capacity increased to match current electrical demand.',
  },
  {
    title: 'Lighting Design & Installation',
    body: 'Lighting planned and wired to match how a space is really used.',
  },
  {
    title: 'Tenant Improvements',
    body: 'Electrical build-outs for commercial tenant spaces, scheduled to keep a business’s timeline on track.',
  },
]

export const FAQS = [
  {
    q: 'Do you handle renovation projects specifically, or just new wiring?',
    a: 'Renovation electrical work is a regular part of what we do, alongside new construction and standard residential and commercial jobs. We’re used to working around an existing home or business.',
  },
  {
    q: 'Do you work in Calgary, or only Cochrane?',
    a: 'Both. We’re based in Cochrane and regularly serve Calgary and the surrounding area, including communities like Airdrie and Bragg Creek.',
  },
  {
    q: 'How long have you been in business?',
    a: 'We’ve been serving Cochrane, Calgary, and area since 2017.',
  },
  {
    q: 'Can you coordinate with our other renovation contractors or trades?',
    a: 'Yes, coordinating with other trades on a renovation or tenant improvement job is a standard part of how we plan and schedule work.',
  },
  {
    q: 'Do you provide a quote before starting the job?',
    a: 'Yes, every project starts with a clear estimate so you know the cost before any work begins.',
  },
]

export const FOOTER_SERVICES = [
  'Residential Electrical',
  'Commercial Electrical',
  'Renovation Electrical',
  'Panel Upgrades',
  'Tenant Improvements',
]

export const FOOTER_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Service Areas', href: '#coverage' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
