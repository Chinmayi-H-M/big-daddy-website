import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { ShoppingBag, Eye, ArrowRight } from 'lucide-react';
import { products, categories } from '../../data/siteData';
import { useCart } from '../../context/CartContext';
import './Collection.css';

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (!product.price) return;
    setIsAdding(true);
    addItem(
      product,
      product.sizes[0] || 'One Size',
      product.colors[0]?.name || 'Default'
    );
    setTimeout(() => setIsAdding(false), 1200);
  };

  const colorDot = product.colors[0]?.hex;

  return (
    <motion.article
      ref={ref}
      className="product-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
    >
      <div className="product-card__image-wrap">
        <div
          className="product-card__image"
          style={{
            backgroundColor: colorDot || '#1a1a1a',
            backgroundImage: product.images[0] ? `url(${product.images[0]})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {!product.images[0] && (
            <div className="product-card__placeholder">
              <img src="/images/logo.jpg" alt="" className="product-card__placeholder-logo" />
            </div>
          )}
        </div>

        {product.isNew && <span className="product-card__badge">New</span>}

        <div className="product-card__actions">
          <Link
            to={`/product/${product.id}`}
            className="product-card__action-btn"
            aria-label={`View ${product.name}`}
          >
            <Eye size={18} />
          </Link>
          {product.price != null && (
            <button
              className={`product-card__action-btn ${isAdding ? 'product-card__action-btn--added' : ''}`}
              onClick={handleAddToCart}
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag size={18} />
            </button>
          )}
        </div>
      </div>

      <div className="product-card__info">
        <div className="product-card__meta">
          {colorDot && (
            <span
              className="product-card__color-dot"
              style={{ background: colorDot }}
              aria-label={product.colors[0]?.name}
            />
          )}
          <span className="product-card__category">
            {product.category}
          </span>
        </div>

        <Link to={`/product/${product.id}`} className="product-card__name-link">
          <h3 className="product-card__name">{product.name}</h3>
        </Link>

        <div className="product-card__price-row">
          {product.price != null ? (
            <span className="product-card__price">₹{product.price.toLocaleString('en-IN')}</span>
          ) : (
            <span className="product-card__price product-card__price--pending">Price coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Collection({ limit }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-40px' });

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'new') return p.isNew;
    return p.category === activeCategory;
  });

  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section className="collection section section--dark" id="collection" aria-label="Shop the Collection">
      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-eyebrow">Shop Now</p>
          <h2 className="section-heading">THE SIGNATURE COLLECTION</h2>
          <div className="gold-divider gold-divider--center" />
          <p className="section-subheading">
            Find the pieces that define your style.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="collection__filters" role="tablist" aria-label="Product categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`collection__filter ${activeCategory === cat.id ? 'collection__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
              id={`filter-${cat.id}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="collection__grid">
          {displayProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {displayProducts.length === 0 && (
          <div className="collection__empty">
            <p>No products found in this category.</p>
          </div>
        )}

        {limit && filteredProducts.length > limit && (
          <div className="collection__view-all">
            <Link to="/collections" className="btn btn--outline" id="collection-view-all">
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
