import { useState } from 'react'
import { Link } from 'react-router-dom'
import bucketImg from '../assets/bucket.png'
import truckImg from '../assets/truck.png'
import broomImg from '../assets/broom.png'
import caseImg from '../assets/case.png'
import houseImg from '../assets/house.png'
import apartmentImg from '../assets/aparment.png'
import './Services.css'

const packages = [
  {
    id: 'airbnb',
    icon: <img src={bucketImg} alt="Airbnb Cleaning" style={{ width: 36, height: 36, objectFit: 'contain' }} />,
    name: 'Airbnb Cleaning',
    tagline: 'Fast, guest-ready turnovers',
    price: '$85',
    duration: '1 – 3 hrs',
    popular: true,
    included: [
      'Fresh linens & made beds',
      'Bathrooms fully sanitized',
      'Kitchen wiped & reset',
      'Floors vacuumed & mopped',
      'Trash emptied & replaced',
      'Amenities restocked',
      'Guest-ready inspection',
    ],
  },
  {
    id: 'moveinout',
    icon: <img src={truckImg} alt="Move-In / Move-Out" style={{ width: 36, height: 36, objectFit: 'contain' }} />,
    name: 'Move-In / Move-Out',
    tagline: 'Leave clean, arrive clean',
    price: '$200',
    duration: '4 – 7 hrs',
    popular: false,
    included: [
      'Full deep clean of all rooms',
      'Inside all cabinets & drawers',
      'Inside appliances cleaned',
      'All windows cleaned',
      'Walls spot-cleaned',
      'Carpet detail clean',
      'Garage sweep',
    ],
  },
  {
    id: 'office',
    icon: <img src={caseImg} alt="Office Building" style={{ width: 36, height: 36, objectFit: 'contain' }} />,
    name: 'Office Building',
    tagline: 'Recurring commercial cleaning',
    price: 'Custom',
    duration: 'Flexible',
    popular: false,
    frequencies: [
      { label: 'Weekly', note: 'Best rate' },
      { label: 'Bi-Weekly', note: 'Popular' },
      { label: 'Monthly', note: 'One-time' },
    ],
    included: [
      'Common areas cleaned',
      'Bathrooms sanitized',
      'Desks & surfaces wiped',
      'Kitchen / break room cleaned',
      'Floors vacuumed & mopped',
      'Trash & recycling emptied',
    ],
  },
  {
    id: 'deepclean',
    icon: <img src={broomImg} alt="Deep Clean" style={{ width: 36, height: 36, objectFit: 'contain' }} />,
    name: 'Deep Clean',
    tagline: 'Top-to-bottom thorough clean',
    price: '$250',
    duration: '4 – 6 hrs',
    popular: false,
    included: [
      'All rooms scrubbed top to bottom',
      'Inside oven & microwave',
      'Inside refrigerator wiped',
      'Baseboards & window sills',
      'Light fixtures dusted',
      'Cabinet fronts cleaned',
    ],
  },
  {
    id: 'apartments',
    icon: <img src={apartmentImg} alt="Apartments & Condos" style={{ width: 36, height: 36, objectFit: 'contain' }} />,
    name: 'Apartments & Condos',
    tagline: 'Regular upkeep for your unit',
    price: '$100',
    duration: '1.5 – 2.5 hrs',
    popular: false,
    included: [
      'All rooms dusted & vacuumed',
      'Bathrooms sanitized',
      'Kitchen surfaces wiped',
      'Floors mopped',
      'Beds made',
      'Trash emptied',
    ],
  },
  {
    id: 'houses',
    icon: <img src={houseImg} alt="Houses" style={{ width: 36, height: 36, objectFit: 'contain' }} />,
    name: 'Houses',
    tagline: 'Full home cleaning service',
    price: '$150',
    duration: '2.5 – 4 hrs',
    popular: false,
    included: [
      'All rooms dusted & vacuumed',
      'Bathrooms fully cleaned',
      'Kitchen cleaned & wiped down',
      'All floors mopped',
      'Beds made & linens straightened',
      'Trash emptied throughout',
    ],
  },
]

const addons = [
  { name: 'Inside Windows', price: '+$40' },
  { name: 'Laundry (wash & fold)', price: '+$30' },
  { name: 'Inside Cabinets', price: '+$50' },
  { name: 'Carpet Steam Clean', price: '+$80' },
  { name: 'Refrigerator Deep Clean', price: '+$35' },
  { name: 'Oven Deep Clean', price: '+$35' },
]

const faqs = [
  {
    q: 'How quickly can you turn over an Airbnb between guests?',
    a: 'We work around your check-out and check-in times. Just share your calendar and we\'ll coordinate same-day turnovers, including fresh linens, restocked supplies, and a full clean.',
  },
  {
    q: 'What\'s included in the Move-In / Move-Out clean?',
    a: 'Everything — inside appliances, cabinets, closets, windows, walls, and floors. It\'s our most thorough clean, designed to help you get your deposit back or start fresh in a new space.',
  },
  {
    q: 'How does pricing work for office buildings?',
    a: 'Office pricing is based on square footage, number of rooms, and your preferred schedule (weekly, bi-weekly, or monthly). Contact us for a free on-site or virtual quote.',
  },
  {
    q: 'Do you bring your own supplies?',
    a: 'Yes, we bring all necessary cleaning supplies and equipment. If you have a preference for specific products or need eco-friendly options, just let us know.',
  },
  {
    q: 'What if I\'m not satisfied?',
    a: 'We offer a 100% satisfaction guarantee. If anything doesn\'t meet your expectations, contact us within 24 hours and we\'ll return to make it right — free of charge.',
  },
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <svg className="faq-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      </button>
      {open && <p className="faq-a">{a}</p>}
    </div>
  )
}

export default function Services() {
  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <h1 className="page-hero__title">Services Built for <span>Every Space</span></h1>
          <p className="page-hero__sub">
            Airbnb turnovers, move-in/out cleans, and recurring office cleaning — done right, every time.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section">
        <div className="container">
          <div className="packages-grid">
            {packages.map(pkg => (
              <div key={pkg.id} className={`pkg-card card ${pkg.popular ? 'pkg-card--popular' : ''}`}>
                {pkg.popular && <div className="pkg-badge">Most Popular</div>}
                <div className="pkg-header">
                  <div className="pkg-icon">{pkg.icon}</div>
                  <div>
                    <h3 className="pkg-name">{pkg.name}</h3>
                    <p className="pkg-tagline">{pkg.tagline}</p>
                  </div>
                </div>
                <div className="pkg-price">
                  <span className="pkg-price__amount">{pkg.price}</span>
                  <span className="pkg-price__note">{pkg.price === 'Custom' ? 'quote per visit' : 'starting price'}</span>
                </div>
                {pkg.frequencies ? (
                  <div className="pkg-frequencies">
                    {pkg.frequencies.map(f => (
                      <div key={f.label} className="pkg-freq">
                        <span className="pkg-freq__label">{f.label}</span>
                        <span className="pkg-freq__note">{f.note}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="pkg-meta">
                    <div className="pkg-meta__item">
                      <svg width="15" height="15" fill="none" stroke="var(--blue)" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                      <span>Approx. {pkg.duration}</span>
                    </div>
                  </div>
                )}
                <ul className="pkg-features">
                  {pkg.included.map(item => (
                    <li key={item}>
                      <svg width="16" height="16" fill="none" stroke="var(--blue)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/booking" className={pkg.popular ? 'btn-primary' : 'btn-outline'} style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                  Book This Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section addons-section">
        <div className="container">
          <div className="section-header section-header--center">
            <h2 className="section-title">Customize with <span>Add-Ons</span></h2>
            <p className="section-sub" style={{ margin: '14px auto 0' }}>Add any of these to any package at the time of booking.</p>
          </div>
          <div className="addons-grid">
            {addons.map(a => (
              <div key={a.name} className="addon-card card">
                <svg width="20" height="20" fill="none" stroke="var(--blue)" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                <span className="addon-name">{a.name}</span>
                <span className="addon-price">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-banner__inner cta-banner__inner--center">
          <h2>Not Sure Which Plan?</h2>
          <p>We'll help you pick the perfect service.</p>
          <Link to="/booking" className="btn-primary cta-banner__btn">Get a Free Recommendation</Link>
        </div>
      </section>
    </div>
  )
}
