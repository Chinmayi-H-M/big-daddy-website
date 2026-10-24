import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { divisions } from '../../data/siteData';
import './Divisions.css';

function DivisionCard({ division, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const bgColors = [
    'linear-gradient(135deg, #1a1408 0%, #0d0a04 100%)',
    'linear-gradient(135deg, #0d1117 0%, #0a0a0a 100%)',
    'linear-gradient(135deg, #141210 0%, #0a0a0a 100%)',
    'linear-gradient(135deg, #110d0a 0%, #0a0a0a 100%)',
  ];

  return (
    <motion.div
      ref={ref}
      className="division-card"
      style={{ background: bgColors[index] }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className="division-card__overlay" />
      
      <div className="division-card__content">
        <div className="division-card__icon">
          <MapPin size={20} strokeWidth={1.5} />
        </div>
        
        <div className="division-card__number">
          {String(index + 1).padStart(2, '0')}
        </div>

        <h3 className="division-card__name">{division.name}</h3>
        <p className="division-card__tagline">{division.tagline}</p>
        
        <div className="division-card__divider" />
        
        <Link
          to={`/divisions/${division.id}`}
          className="division-card__link"
          id={`division-${division.id}`}
        >
          <span>Explore Location</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="division-card__border-accent" />
    </motion.div>
  );
}

export default function Divisions() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-40px' });

  return (
    <section className="divisions section" id="divisions" aria-label="Our Divisions">
      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-eyebrow">Our Locations</p>
          <h2 className="section-heading">FIND BIG DADDY NEAR YOU</h2>
          <div className="gold-divider gold-divider--center" />
          <p className="section-subheading">
            Explore our four locations and discover the BIG DADDY experience.
          </p>
        </motion.div>

        <div className="divisions__grid">
          {divisions.map((division, i) => (
            <DivisionCard key={division.id} division={division} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
