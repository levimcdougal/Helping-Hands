import { useState } from 'react'
import './Booking.css'

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

export default function Booking() {
  return (
    <div className="booking-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <h1 className="page-hero__title">Get in <span>Touch</span></h1>
          <p className="page-hero__sub">
            Ready to book or have a question? Reach out to us directly — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">

          <a href="tel:5551234567" className="contact-card card">
            <div className="contact-card__icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.95-1.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="contact-card__label">Call Us</div>
            <div className="contact-card__value">(555) 123-4567</div>
            <div className="contact-card__action">Tap to call</div>
          </a>

          <a href="mailto:hello@helpinghands.com" className="contact-card card">
            <div className="contact-card__icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="contact-card__label">Email Us</div>
            <div className="contact-card__value">hello@helpinghands.com</div>
            <div className="contact-card__action">Tap to email</div>
          </a>

          <a href="sms:5551234567" className="contact-card card">
            <div className="contact-card__icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div className="contact-card__label">Text Us</div>
            <div className="contact-card__value">(555) 123-4567</div>
            <div className="contact-card__action">Tap to text</div>
          </a>

        </div>

      </section>

      <div className="hours-banner">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
        </svg>
        <span>We're available <strong>Monday – Saturday, 7am – 7pm</strong></span>
      </div>

      <section className="section faq-section">
        <div className="container booking-faq">
          <div className="section-header section-header--center">
            <h2 className="section-title">Common <span>Questions</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map(f => <FAQ key={f.q} {...f} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
