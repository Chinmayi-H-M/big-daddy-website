import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import InstagramIcon from '../icons/InstagramIcon';
import { brandInfo } from '../../data/siteData';
import './InstaGallery.css';

const gallerySlots = [
  { id: 1, image: '/images/tshirts.jpg', label: 'Round Shoulder T-Shirts' },
  { id: 2, image: '/images/shorts.jpg', label: 'Premium Shorts' },
  { id: 3, image: '/images/trackpants.jpg', label: 'Track Pants' },
  { id: 4, image: '/images/formal-shirts.jpg', label: 'Formal Shirts' },
  { id: 5, image: '/images/jacket.jpg', label: 'Moto Jacket' },
  { id: 6, image: '/images/logo.jpg', label: 'BIG DADDY Collection' },
];

export default function InstaGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section className="insta-gallery section section--dark" id="instagram" aria-label="Instagram Gallery">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-eyebrow">Follow Our Journey</p>
          <h2 className="section-heading">THE BIG DADDY LOOK</h2>
          <div className="gold-divider gold-divider--center" />
          <p className="section-subheading">
            Style inspiration from our collection. Follow us for the latest drops.
          </p>
        </motion.div>

        <div className="insta-gallery__grid">
          {gallerySlots.map((slot, i) => (
            <motion.a
              key={slot.id}
              href={brandInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="insta-gallery__item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
            >
              <div
                className="insta-gallery__image"
                style={{
                  backgroundImage: `url(${slot.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="insta-gallery__overlay">
                <InstagramIcon size={24} />
                <span className="insta-gallery__label">{slot.label}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="insta-gallery__cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href={brandInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            id="insta-follow-btn"
          >
            <InstagramIcon size={18} />
            Follow {brandInfo.instagramHandle}
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
