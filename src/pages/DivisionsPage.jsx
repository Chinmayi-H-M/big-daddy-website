import { useEffect } from 'react';
import { motion } from 'motion/react';
import Divisions from '../components/Divisions/Divisions';
import './PageStyles.css';

export default function DivisionsPage() {
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
          <p className="text-eyebrow">Locations</p>
          <h1 className="page-hero__title heading-display">OUR DIVISIONS</h1>
          <div className="gold-divider" />
          <p className="page-hero__subtitle">
            Four locations. One premium experience.
          </p>
        </div>
      </motion.div>
      <Divisions />
    </main>
  );
}
