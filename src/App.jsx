import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CartDrawer from './components/CartDrawer/CartDrawer';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import DivisionsPage from './pages/DivisionsPage';
import DivisionDetailPage from './pages/DivisionDetailPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/divisions" element={<DivisionsPage />} />
        <Route path="/divisions/:id" element={<DivisionDetailPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* Placeholder routes for policy pages */}
        <Route path="/shipping" element={<PolicyPage title="Shipping & Delivery" />} />
        <Route path="/returns" element={<PolicyPage title="Returns & Exchanges" />} />
        <Route path="/privacy" element={<PolicyPage title="Privacy Policy" />} />
        <Route path="/terms" element={<PolicyPage title="Terms & Conditions" />} />
      </Routes>

      <Footer />
    </>
  );
}

/* Simple placeholder for policy pages until real content is supplied */
function PolicyPage({ title }) {
  return (
    <main className="page" style={{ paddingTop: 'var(--nav-height)' }}>
      <div className="page-hero page-hero--compact">
        <div className="container">
          <p className="text-eyebrow">Legal</p>
          <h1 className="page-hero__title heading-display">{title.toUpperCase()}</h1>
          <div className="gold-divider" />
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div style={{
            padding: 'var(--space-2xl)',
            border: '1px dashed var(--border-gold)',
            background: 'rgba(201, 149, 46, 0.03)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              marginBottom: '0.5rem',
            }}>
              Content Pending
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
              The {title.toLowerCase()} content for BIG DADDY will be added when available.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
