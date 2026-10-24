import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import InstagramIcon from '../icons/InstagramIcon';
import { brandInfo } from '../../data/siteData';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="about section" id="about" aria-label="About BIG DADDY">
      <div className="container">
        <div className="about__grid" ref={ref}>
          {/* Visual Side */}
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about__logo-frame">
              <img src="/images/logo.jpg" alt="BIG DADDY Logo" className="about__logo" />
            </div>
            <div className="about__pattern" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <p className="text-eyebrow">About Us</p>
            <h2 className="about__heading heading-display">
              MORE THAN A LOOK.{' '}
              <span className="about__heading--italic">IT'S YOUR STATEMENT.</span>
            </h2>
            <div className="gold-divider" />
            <p className="about__description">
              {brandInfo.description}
            </p>
            <p className="about__description about__description--secondary">
              With five locations across Gadag, Koppal, Gangavathi, Sindhanur, and 
              the upcoming H.B. Halli, BIG DADDY is where contemporary fashion meets bold confidence.
            </p>

            <div className="about__social">
              <a
                href={brandInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="about__instagram-link"
                id="about-instagram"
              >
                <InstagramIcon size={20} />
                <span>Follow {brandInfo.instagramHandle}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
