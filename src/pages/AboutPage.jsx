import { useEffect } from 'react';
import { motion } from 'motion/react';
import About from '../components/About/About';
import InstaGallery from '../components/InstaGallery/InstaGallery';
import './PageStyles.css';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page">
      <motion.div
        className="page-hero page-hero--compact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container">
          <p className="text-eyebrow">Our Story</p>
          <h1 className="page-hero__title heading-display">ABOUT BIG DADDY</h1>
          <div className="gold-divider" />
          <p className="page-hero__subtitle">
            More than a look. It's your statement.
          </p>
        </div>
      </motion.div>
      <About />
      <InstaGallery />
    </main>
  );
}
