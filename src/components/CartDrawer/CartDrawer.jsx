import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose }) {
  const { items, itemCount, subtotal, hasConfiguredPrices, removeItem, updateQuantity, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Shopping cart"
            role="dialog"
          >
            {/* Header */}
            <div className="cart-drawer__header">
              <div className="cart-drawer__title">
                <ShoppingBag size={20} />
                <h2>Your Bag</h2>
                <span className="cart-drawer__count">({itemCount})</span>
              </div>
              <button
                className="cart-drawer__close"
                onClick={onClose}
                aria-label="Close cart"
              >
                <X size={22} />
              </button>
            </div>

            {/* Items */}
            {items.length === 0 ? (
              <div className="cart-drawer__empty">
                <ShoppingBag size={48} strokeWidth={1} />
                <p className="cart-drawer__empty-title">Your bag is empty</p>
                <p className="cart-drawer__empty-text">
                  Discover the BIG DADDY collection and find your signature style.
                </p>
                <Link
                  to="/collections"
                  className="btn btn--primary"
                  onClick={onClose}
                >
                  Shop Collection
                  <ArrowRight size={16} />
                </Link>
              </div>
            ) : (
              <>
                <div className="cart-drawer__items">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.key}
                        className="cart-item"
                        layout
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div
                          className="cart-item__image"
                          style={{
                            backgroundColor: item.product.colors?.[0]?.hex || '#1a1a1a',
                          }}
                        >
                          <img src="/images/logo.jpg" alt="" className="cart-item__logo" />
                        </div>

                        <div className="cart-item__details">
                          <h3 className="cart-item__name">{item.product.name}</h3>
                          <div className="cart-item__meta">
                            {item.size && <span>{item.size}</span>}
                            {item.color && <span>{item.color}</span>}
                          </div>
                          {item.product.price != null ? (
                            <p className="cart-item__price">
                              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                            </p>
                          ) : (
                            <p className="cart-item__price cart-item__price--pending">
                              Price pending
                            </p>
                          )}

                          <div className="cart-item__controls">
                            <div className="cart-item__quantity">
                              <button
                                onClick={() => updateQuantity(item.key, item.quantity - 1)}
                                aria-label="Decrease quantity"
                                className="cart-item__qty-btn"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="cart-item__qty-value">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.key, item.quantity + 1)}
                                aria-label="Increase quantity"
                                className="cart-item__qty-btn"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <button
                              className="cart-item__remove"
                              onClick={() => removeItem(item.key)}
                              aria-label={`Remove ${item.product.name}`}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Footer */}
                <div className="cart-drawer__footer">
                  <button className="cart-drawer__clear" onClick={clearCart}>
                    Clear All
                  </button>

                  <div className="cart-drawer__summary">
                    <div className="cart-drawer__subtotal">
                      <span>Subtotal</span>
                      {hasConfiguredPrices ? (
                        <span className="cart-drawer__subtotal-value">
                          ₹{subtotal.toLocaleString('en-IN')}
                        </span>
                      ) : (
                        <span className="cart-drawer__subtotal-value cart-drawer__subtotal-value--pending">
                          Pricing pending
                        </span>
                      )}
                    </div>
                    <p className="cart-drawer__note">
                      Shipping and taxes calculated at checkout.
                    </p>
                  </div>

                  <Link
                    to="/checkout"
                    className="btn btn--primary btn--large cart-drawer__checkout"
                    onClick={onClose}
                    id="cart-checkout-btn"
                  >
                    {hasConfiguredPrices ? 'Proceed to Checkout' : 'Review Order'}
                    <ArrowRight size={16} />
                  </Link>

                  <button className="cart-drawer__continue" onClick={onClose}>
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
