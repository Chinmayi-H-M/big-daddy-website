import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Minus, Plus, ShoppingBag, Check, Heart } from 'lucide-react';
import { products } from '../data/siteData';
import { useCart } from '../context/CartContext';
import './PageStyles.css';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product) {
      if (product.colors?.length > 0) setSelectedColor(product.colors[0].name);
      if (product.sizes?.length > 0) setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <main className="page">
        <div className="page-hero page-hero--compact">
          <div className="container">
            <h1 className="page-hero__title heading-display">Product Not Found</h1>
            <Link to="/collections" className="btn btn--outline" style={{ marginTop: '2rem' }}>
              <ArrowLeft size={16} /> Back to Collection
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const canPurchase = product.price != null;
  const requiresSize = product.sizes?.length > 0;

  const handleAddToCart = () => {
    if (requiresSize && !selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addItem(product, selectedSize || 'One Size', selectedColor || 'Default', quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="page">
      <div className="page-hero page-hero--slim">
        <div className="container">
          <Link to="/collections" className="page-back-link">
            <ArrowLeft size={14} /> Collection
          </Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div
            className="product-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gallery */}
            <div className="product-detail__gallery">
              <div
                className="product-detail__main-image"
                style={{
                  backgroundColor: product.colors?.[0]?.hex || '#1a1a1a',
                }}
              >
                {product.images?.[0] ? (
                  <img src={product.images[0]} alt={product.name} className="product-detail__img" />
                ) : (
                  <div className="product-detail__placeholder">
                    <img src="/images/logo.jpg" alt="" className="product-detail__placeholder-logo" />
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="product-detail__info">
              <div className="product-detail__badges">
                {product.isNew && <span className="product-detail__badge">New Arrival</span>}
                <span className="product-detail__category">{product.category}</span>
              </div>

              <h1 className="product-detail__name">{product.name}</h1>

              <div className="product-detail__price-area">
                {canPurchase ? (
                  <span className="product-detail__price">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                ) : (
                  <span className="product-detail__price product-detail__price--pending">
                    Price coming soon
                  </span>
                )}
              </div>

              <div className="gold-divider" />

              <p className="product-detail__desc">{product.description}</p>

              {product.fabric && (
                <p className="product-detail__fabric">
                  <strong>Fabric:</strong> {product.fabric}
                </p>
              )}

              {/* Color Selection */}
              {product.colors?.length > 0 && (
                <div className="product-detail__option">
                  <label className="product-detail__label">
                    Color: <strong>{selectedColor}</strong>
                  </label>
                  <div className="product-detail__colors">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        className={`product-detail__color-btn ${selectedColor === c.name ? 'product-detail__color-btn--active' : ''}`}
                        style={{ backgroundColor: c.hex }}
                        onClick={() => setSelectedColor(c.name)}
                        aria-label={c.name}
                        title={c.name}
                      >
                        {selectedColor === c.name && <Check size={12} color="#fff" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {requiresSize && (
                <div className="product-detail__option">
                  <label className="product-detail__label">
                    Size: {selectedSize && <strong>{selectedSize}</strong>}
                    {sizeError && <span className="product-detail__error">Please select a size</span>}
                  </label>
                  <div className="product-detail__sizes">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        className={`product-detail__size-btn ${selectedSize === s ? 'product-detail__size-btn--active' : ''}`}
                        onClick={() => { setSelectedSize(s); setSizeError(false); }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="product-detail__option">
                <label className="product-detail__label">Quantity</label>
                <div className="product-detail__quantity">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease"
                    className="product-detail__qty-btn"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="product-detail__qty-value">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase"
                    className="product-detail__qty-btn"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="product-detail__actions">
                {canPurchase ? (
                  <button
                    className={`btn btn--primary btn--large product-detail__add-btn ${added ? 'product-detail__add-btn--added' : ''}`}
                    onClick={handleAddToCart}
                    id="add-to-cart-btn"
                  >
                    {added ? (
                      <><Check size={18} /> Added to Bag</>
                    ) : (
                      <><ShoppingBag size={18} /> Add to Bag</>
                    )}
                  </button>
                ) : (
                  <div className="product-detail__unavailable">
                    <p className="product-detail__unavailable-text">
                      This product is not yet available for purchase online.
                    </p>
                    <p className="product-detail__unavailable-sub">
                      Visit one of our stores or check back soon.
                    </p>
                  </div>
                )}

                <button className="product-detail__wishlist" aria-label="Add to wishlist">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
