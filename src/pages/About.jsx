import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './About.css'

const values = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Integrity',
    desc: 'At Helping Hands, integrity is at the heart of everything we do. We believe in honesty and transparency, ensuring our clients always know what to expect from our services.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
      </svg>
    ),
    title: 'Excellence',
    desc: 'Commitment to excellence drives us to deliver outstanding cleaning services every time. We strive to exceed expectations and continuously improve our processes.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Sustainability',
    desc: 'We are dedicated to sustainability, using eco-friendly products and practices to protect the environment while maintaining a spotless home for our clients.',
  },
]

const team = [
  { name: 'Maria T.', role: 'Founder & Head of Operations', initial: 'M' },
  { name: 'James P.', role: 'Lead Cleaner – 4 yrs experience', initial: 'J' },
  { name: 'Angela R.', role: 'Customer Experience Manager', initial: 'A' },
  { name: 'Carlos V.', role: 'Senior Cleaner & Trainer', initial: 'C' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container about-hero__inner">
          <div>
            <h1 className="page-hero__title">People Who <span>Actually Care</span></h1>
            <p className="page-hero__sub">
              We started Helping Hands because we believe a clean home is the foundation of a clear mind. We're not just cleaners — we're your neighbors.
            </p>
            <Link to="/booking" className="btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
              Book Now
            </Link>
          </div>
          <img src={logo} alt="Helping Hands" className="about-hero__logo" />
        </div>
      </section>

      {/* Story */}
      <section className="section story-section">
        <div className="container story-container">
          <div className="story-text" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <h2 className="section-title">Our <span>Journey</span></h2>
            <p className="story-body">
              Helping Hands was built on something simple, a deep passion for making people's homes feel truly clean and welcoming. Since 2005, we've been on a mission to deliver more than just a tidy space. We believe a clean home changes how you feel, how you live, and how you show up every day. Over the years, that belief has driven us to grow, improve, and serve hundreds of families across our community, turning houses into homes people are proud of.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header section-header--center">
            <h2 className="section-title">Core Values of <span>Helping Hands</span></h2>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-banner__inner cta-banner__inner--center">
          <h2>Let Us Take Care of Your Home</h2>
          <p>Experience the Helping Hands difference — book your first clean today.</p>
          <Link to="/booking" className="btn-primary cta-banner__btn">Schedule a Clean</Link>
        </div>
      </section>
    </div>
  )
}
