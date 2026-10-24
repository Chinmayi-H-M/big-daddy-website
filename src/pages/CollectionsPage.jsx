import { useEffect } from 'react';
import { motion } from 'motion/react';
import Collection from '../components/Collection/Collection';
import './PageStyles.css';

export default function CollectionsPage() {
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
          <p className="text-eyebrow">Shop</p>
          <h1 className="page-hero__title heading-display">THE COLLECTION</h1>
          <div className="gold-divider" />
          <p className="page-hero__subtitle">
            Browse our full range of contemporary menswear.
          </p>
        </div>
      </motion.div>
      <Collection />
    </main>
  );
}
