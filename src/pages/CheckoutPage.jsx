import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Lock, AlertTriangle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './PageStyles.css';

export default function CheckoutPage() {
  const { items, subtotal, hasConfiguredPrices, itemCount } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Required';
    if (!form.lastName.trim()) newErrors.lastName = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    if (!form.phone.trim()) newErrors.phone = 'Required';
    if (!form.address.trim()) newErrors.address = 'Required';
    if (!form.city.trim()) newErrors.city = 'Required';
    if (!form.state.trim()) newErrors.state = 'Required';
    if (!form.pincode.trim()) newErrors.pincode = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Prototype — no backend
    alert('Checkout is a prototype. Payment integration required for live orders.');
  };

  if (itemCount === 0) {
    return (
      <main className="page">
        <div className="page-hero page-hero--compact">
          <div className="container" style={{ textAlign: 'center' }}>
            <ShoppingBag size={48} strokeWidth={1} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
            <h1 className="page-hero__title heading-display">YOUR BAG IS EMPTY</h1>
            <p className="page-hero__subtitle" style={{ margin: '1rem auto' }}>
              Add items to your bag before checking out.
            </p>
            <Link to="/collections" className="btn btn--primary" style={{ marginTop: '1rem' }}>
              Shop Collection
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <motion.div
        className="page-hero page-hero--slim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <Link to="/collections" className="page-back-link">
            <ArrowLeft size={14} /> Continue Shopping
          </Link>
        </div>
      </motion.div>

      <section className="section">
        <div className="container">
          <motion.div
            className="checkout"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Prototype Banner */}
            <div className="checkout__prototype-banner">
              <AlertTriangle size={18} />
              <div>
                <strong>Checkout Prototype</strong>
                <p>This checkout is a development prototype. No payment will be processed and no order will be placed.</p>
              </div>
            </div>

            <div className="checkout__grid">
              {/* Form */}
              <form className="checkout__form" onSubmit={handleSubmit}>
                <h2 className="checkout__section-title">Contact Details</h2>
                <div className="checkout__row">
                  <div className="checkout__field">
                    <label htmlFor="ck-fname">First Name</label>
                    <input
                      id="ck-fname"
                      type="text"
                      value={form.firstName}
                      onChange={(e) => updateField('firstName', e.target.value)}
                      className={errors.firstName ? 'checkout__input--error' : ''}
                    />
                    {errors.firstName && <span className="checkout__error">{errors.firstName}</span>}
                  </div>
                  <div className="checkout__field">
                    <label htmlFor="ck-lname">Last Name</label>
                    <input
                      id="ck-lname"
                      type="text"
                      value={form.lastName}
                      onChange={(e) => updateField('lastName', e.target.value)}
                      className={errors.lastName ? 'checkout__input--error' : ''}
                    />
                    {errors.lastName && <span className="checkout__error">{errors.lastName}</span>}
                  </div>
                </div>
                <div className="checkout__row">
                  <div className="checkout__field">
                    <label htmlFor="ck-email">Email</label>
                    <input
                      id="ck-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={errors.email ? 'checkout__input--error' : ''}
                    />
                    {errors.email && <span className="checkout__error">{errors.email}</span>}
                  </div>
                  <div className="checkout__field">
                    <label htmlFor="ck-phone">Phone</label>
                    <input
                      id="ck-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className={errors.phone ? 'checkout__input--error' : ''}
                    />
                    {errors.phone && <span className="checkout__error">{errors.phone}</span>}
                  </div>
                </div>

                <h2 className="checkout__section-title">Delivery Address</h2>
                <div className="checkout__field">
                  <label htmlFor="ck-address">Address</label>
                  <input
                    id="ck-address"
                    type="text"
                    value={form.address}
                    onChange={(e) => updateField('address', e.target.value)}
                    className={errors.address ? 'checkout__input--error' : ''}
                  />
                  {errors.address && <span className="checkout__error">{errors.address}</span>}
                </div>
                <div className="checkout__row checkout__row--three">
                  <div className="checkout__field">
                    <label htmlFor="ck-city">City</label>
                    <input
                      id="ck-city"
                      type="text"
                      value={form.city}
                      onChange={(e) => updateField('city', e.target.value)}
                      className={errors.city ? 'checkout__input--error' : ''}
                    />
                    {errors.city && <span className="checkout__error">{errors.city}</span>}
                  </div>
                  <div className="checkout__field">
                    <label htmlFor="ck-state">State</label>
                    <input
                      id="ck-state"
                      type="text"
                      value={form.state}
                      onChange={(e) => updateField('state', e.target.value)}
                      className={errors.state ? 'checkout__input--error' : ''}
                    />
                    {errors.state && <span className="checkout__error">{errors.state}</span>}
                  </div>
                  <div className="checkout__field">
                    <label htmlFor="ck-pin">PIN Code</label>
                    <input
                      id="ck-pin"
                      type="text"
                      value={form.pincode}
                      onChange={(e) => updateField('pincode', e.target.value)}
                      className={errors.pincode ? 'checkout__input--error' : ''}
                    />
                    {errors.pincode && <span className="checkout__error">{errors.pincode}</span>}
                  </div>
                </div>

                <h2 className="checkout__section-title">Payment</h2>
                <div className="checkout__payment-placeholder">
                  <Lock size={20} />
                  <div>
                    <p><strong>Payment integration pending</strong></p>
                    <p>A secure payment gateway will be integrated here.</p>
                  </div>
                </div>

                <button type="submit" className="btn btn--primary btn--large checkout__submit" id="checkout-submit">
                  <Lock size={16} />
                  Review Order (Prototype)
                </button>
              </form>

              {/* Order Summary */}
              <aside className="checkout__summary">
                <h2 className="checkout__section-title">Order Summary</h2>
                <div className="checkout__items">
                  {items.map((item) => (
                    <div key={item.key} className="checkout__item">
                      <div
                        className="checkout__item-image"
                        style={{ backgroundColor: item.product.colors?.[0]?.hex || '#1a1a1a' }}
                      >
                        <img src="/images/logo.jpg" alt="" className="checkout__item-logo" />
                        <span className="checkout__item-qty">{item.quantity}</span>
                      </div>
                      <div className="checkout__item-info">
                        <p className="checkout__item-name">{item.product.name}</p>
                        <p className="checkout__item-meta">
                          {item.size}{item.color && ` · ${item.color}`}
                        </p>
                      </div>
                      <div className="checkout__item-price">
                        {item.product.price != null
                          ? `₹${(item.product.price * item.quantity).toLocaleString('en-IN')}`
                          : '—'
                        }
                      </div>
                    </div>
                  ))}
                </div>

                <div className="checkout__totals">
                  <div className="checkout__total-row">
                    <span>Subtotal</span>
                    <span>{hasConfiguredPrices ? `₹${subtotal.toLocaleString('en-IN')}` : 'Pending'}</span>
                  </div>
                  <div className="checkout__total-row">
                    <span>Shipping</span>
                    <span>TBD</span>
                  </div>
                  <div className="checkout__total-row">
                    <span>Tax</span>
                    <span>TBD</span>
                  </div>
                  <div className="checkout__total-row checkout__total-row--final">
                    <span>Total</span>
                    <span>{hasConfiguredPrices ? `₹${subtotal.toLocaleString('en-IN')}` : 'Pending'}</span>
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
