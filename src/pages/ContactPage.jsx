import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import InstagramIcon from '../components/icons/InstagramIcon';
import { brandInfo, divisions } from '../data/siteData';
import './PageStyles.css';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prototype — no backend connected
    setSubmitted(true);
  };

  return (
    <main className="page">
      <motion.div
        className="page-hero page-hero--compact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container">
          <p className="text-eyebrow">Get in Touch</p>
          <h1 className="page-hero__title heading-display">CONTACT US</h1>
          <div className="gold-divider" />
          <p className="page-hero__subtitle">
            Visit one of our five locations or send us a message.
          </p>
        </div>
      </motion.div>

      <section className="section">
        <div className="container">
          <motion.div
            className="contact-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Form */}
            <div className="contact-form-wrap">
              <h2 className="contact-form__title">Send a Message</h2>

              {submitted ? (
                <div className="contact-form__success">
                  <p className="contact-form__success-text">Thank you for your message.</p>
                  <p className="contact-form__success-sub">
                    This is a prototype form. A backend is required to process messages.
                  </p>
                  <button
                    className="btn btn--outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__field">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help?"
                    />
                  </div>
                  <button type="submit" className="btn btn--primary" id="contact-submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Locations summary */}
            <div className="contact-locations">
              <h2 className="contact-form__title">Our Locations</h2>
              <div className="contact-locations__list">
                {divisions.map((d) => (
                  <div key={d.id} className="contact-location-card">
                    <MapPin size={18} className="contact-location-card__icon" />
                    <div>
                      <h3 className="contact-location-card__name">BIG DADDY — {d.name}</h3>
                      {d.address ? (
                        <p className="contact-location-card__address">{d.address}</p>
                      ) : (
                        <p className="contact-location-card__address contact-location-card__address--pending">
                          Address details coming soon
                        </p>
                      )}
                      {d.phone && (
                        <p className="contact-location-card__phone">
                          <a href={`tel:${d.phone}`}>{d.phone}</a>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-social">
                <a
                  href={brandInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social__link"
                >
                  <InstagramIcon size={18} />
                  <span>Follow us on Instagram</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
