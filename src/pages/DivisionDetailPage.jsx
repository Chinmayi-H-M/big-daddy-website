import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, ArrowLeft } from 'lucide-react';
import { divisions } from '../data/siteData';
import './PageStyles.css';

export default function DivisionDetailPage() {
  const { id } = useParams();
  const division = divisions.find((d) => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!division) {
    return (
      <main className="page">
        <div className="page-hero page-hero--compact">
          <div className="container">
            <h1 className="page-hero__title heading-display">Location Not Found</h1>
            <Link to="/divisions" className="btn btn--outline" style={{ marginTop: '2rem' }}>
              <ArrowLeft size={16} />
              Back to Divisions
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const hasDetails = division.address || division.phone || division.hours || division.mapUrl;

  return (
    <main className="page">
      <motion.div
        className="page-hero page-hero--compact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container">
          <Link to="/divisions" className="page-back-link">
            <ArrowLeft size={14} />
            All Divisions
          </Link>
          <p className="text-eyebrow">BIG DADDY Location</p>
          <h1 className="page-hero__title heading-display">{division.name.toUpperCase()}</h1>
          <div className="gold-divider" />
          <p className="page-hero__subtitle">{division.tagline}</p>
        </div>
      </motion.div>

      <section className="section">
        <div className="container">
          <motion.div
            className="division-detail"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="division-detail__card">
              <div className="division-detail__logo-area">
                <img src="/images/logo.jpg" alt="BIG DADDY" className="division-detail__logo" />
                <h2 className="division-detail__store-name">BIG DADDY — {division.name}</h2>
              </div>

              {division.comingSoon ? (
                <div className="division-detail__pending">
                  <div style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.625rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-black)',
                    background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-light))',
                    padding: '0.25rem 0.75rem',
                    marginBottom: '1rem',
                  }}>
                    Coming Soon
                  </div>
                  <p className="division-detail__pending-text">
                    BIG DADDY — {division.name} is opening soon.
                  </p>
                  <p className="division-detail__pending-sub">
                    Stay tuned for the grand opening. Store details will be announced shortly.
                  </p>
                </div>
              ) : hasDetails ? (
                <div className="division-detail__info">
                  {division.address && (
                    <div className="division-detail__row">
                      <MapPin size={18} className="division-detail__icon" />
                      <div>
                        <strong>Address</strong>
                        <p>{division.address}</p>
                      </div>
                    </div>
                  )}
                  {division.phone && (
                    <div className="division-detail__row">
                      <Phone size={18} className="division-detail__icon" />
                      <div>
                        <strong>Phone</strong>
                        <p><a href={`tel:${division.phone}`}>{division.phone}</a></p>
                      </div>
                    </div>
                  )}
                  {division.hours && (
                    <div className="division-detail__row">
                      <Clock size={18} className="division-detail__icon" />
                      <div>
                        <strong>Hours</strong>
                        <p>{division.hours}</p>
                      </div>
                    </div>
                  )}
                  {division.mapUrl && (
                    <a
                      href={division.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                      style={{ marginTop: '1.5rem' }}
                    >
                      <Navigation size={16} />
                      Get Directions
                    </a>
                  )}
                </div>
              ) : (
                <div className="division-detail__pending">
                  <p className="division-detail__pending-text">
                    Store details for {division.name} are being updated.
                  </p>
                  <p className="division-detail__pending-sub">
                    Address, contact, and hours will be available soon.
                  </p>
                </div>
              )}
            </div>

            <div className="division-detail__cta">
              <Link to="/collections" className="btn btn--primary">
                Shop the Collection
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
