import { Link } from 'react-router-dom'
import homeImg from '../assets/home.png'
import moveImg from '../assets/move.png'
import airImg from '../assets/air.png'
import deepImg from '../assets/deep.png'
import officeImg from '../assets/office.png'
import './Home.css'

const services = [
  {
    icon: null,
    title: 'Airbnb Cleaning',
    desc: 'Fast, thorough turnovers between guests — fresh linens, restocked supplies, and guest-ready every time.',
    image: airImg,
  },
  {
    icon: null,
    title: 'Deep Cleaning',
    desc: 'Thorough top-to-bottom treatment — inside appliances, baseboards, and hard-to-reach spots.',
    image: deepImg,
  },
  {
    icon: null,
    title: 'Move-In / Move-Out',
    desc: 'Leave your old place spotless or start fresh in your new home with our move cleaning.',
    image: moveImg,
  },
  {
    icon: null,
    title: 'Office Cleaning',
    desc: 'Keep your workspace productive and professional with regular commercial cleaning.',
    image: officeImg,
  },
]

const steps = [
  { num: '01', title: 'Book Online', desc: 'Choose your service, pick a date and time, and fill out a quick form — done in under 2 minutes.' },
  { num: '02', title: 'We Show Up', desc: 'Our vetted, background-checked team arrives on time with all supplies and equipment.' },
  { num: '03', title: 'Enjoy a Clean Home', desc: 'Sit back and relax. We handle everything so you can come home to a spotless space.' },
]

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '20 yrs', label: 'In Business' },
  { value: '100%', label: 'Insured & Bonded' },
]

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Homeowner',
    text: 'Helping Hands has been a game changer for our family. The team is thorough, friendly, and always leaves our house smelling amazing.',
    rating: 5,
  },
  {
    name: 'David R.',
    role: 'Small Business Owner',
    text: 'We use them for our office every week. Incredibly reliable — never had to follow up or remind them about anything.',
    rating: 5,
  },
  {
    name: 'Priya K.',
    role: 'Apartment Renter',
    text: 'Used their move-out cleaning and got my full deposit back. Worth every penny. Would absolutely recommend.',
    rating: 5,
  },
]

const Stars = ({ count }) => (
  <div className="stars">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--blue)">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    ))}
  </div>
)

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                A Cleaner Home,<br />
                <span>Zero&nbsp;Stress</span>
              </h1>
              <p className="hero__sub">
                Professional cleaning services tailored to your schedule. We bring the supplies, the expertise, and the care — you enjoy the results.
              </p>
              <div className="hero__actions">
                <Link to="/booking" className="btn-primary">Get a Free Quote</Link>
                <Link to="/services" className="btn-outline">See Our Services</Link>
              </div>
            </div>
            <img src={homeImg} alt="" className="hero__home-img" />
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="stats-band">
        <div className="container stats-band__grid">
          {stats.map(s => (
            <div key={s.label} className="stats-band__item">
              <div className="stats-band__value">{s.value}</div>
              <div className="stats-band__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header section-header--center">
            <h2 className="section-title">Cleaning Services for <span>Every Need</span></h2>
            <p className="section-sub">From routine maintenance to specialized deep cleans, we have a solution for every home and business.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div key={s.title} className="service-card card">
                {s.image && <img src={s.image} alt={s.title} className="service-card__photo" />}
                {s.icon && <div className="service-card__icon">{s.icon}</div>}
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="service-card__link">
                  Learn more
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section how-section">
        <div className="container">
          <div className="section-header section-header--center">
            <h2 className="section-title section-title--white">How It <span>Works</span></h2>
          </div>
          <div className="how-steps">
            {steps.map((step) => (
              <div key={step.num} className="how-step">
                <div className="how-step__num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header section-header--center">
            <h2 className="section-title">What Our Clients <span>Say</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial card">
                <Stars count={t.rating} />
                <p className="testimonial__text">"{t.text}"</p>
                <div className="testimonial__author">
                  <div className="testimonial__avatar">{t.name[0]}</div>
                  <div>
                    <div className="testimonial__name">{t.name}</div>
                    <div className="testimonial__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-banner__inner cta-banner__inner--center">
          <h2>Ready for a Cleaner Home?</h2>
          <Link to="/booking" className="btn-primary cta-banner__btn">Book Now</Link>
        </div>
      </section>
    </div>
  )
}
