import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import HeroBackground from './HeroBackground';
import './Hero.css';

const transition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] };

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero banner">
      {/* Background — animated clothing canvas + overlay */}
      <div className="hero__bg">
        <HeroBackground />
        <motion.div
          className="hero__bg-gradient"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Logo watermark */}
      <motion.div
        className="hero__watermark"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        <img src="/images/logo.jpg" alt="" aria-hidden="true" />
      </motion.div>

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__text">
          <motion.p
            className="text-eyebrow hero__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
          >
            BIG DADDY &bull; PREMIUM COLLECTIONS
          </motion.p>

          <motion.h1
            className="hero__title heading-display"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.35 }}
          >
            <span className="hero__title-line">DRESS BOLD.</span>
            <span className="hero__title-line hero__title-line--gold">OWN YOUR STYLE.</span>
          </motion.h1>

          <motion.div
            className="gold-divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ ...transition, delay: 0.5 }}
          />

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.55 }}
          >
            Discover contemporary menswear designed to make every look count.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.7 }}
          >
            <Link to="/collections" className="btn btn--primary btn--large" id="hero-cta-shop">
              Shop Collection
              <ArrowRight size={18} />
            </Link>
            <Link to="/divisions" className="btn btn--outline btn--large" id="hero-cta-divisions">
              <MapPin size={18} />
              Explore Our Divisions
            </Link>
          </motion.div>
        </div>

        {/* Decorative side element */}
        <motion.div
          className="hero__side"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <div className="hero__logo-display">
            <img src="/images/logo.jpg" alt="BIG DADDY" className="hero__logo-img" />
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">5</span>
              <span className="hero__stat-label">Locations</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">BD</span>
              <span className="hero__stat-label">Since Est.</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}
