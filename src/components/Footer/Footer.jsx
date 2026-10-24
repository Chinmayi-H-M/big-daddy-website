import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import InstagramIcon from '../icons/InstagramIcon';
import { brandInfo } from '../../data/siteData';
import './Footer.css';

const shopLinks = [
  { label: 'All Collections', path: '/collections' },
  { label: 'Shirts', path: '/collections?category=shirts' },
  { label: 'Trousers', path: '/collections?category=trousers' },
  { label: 'New Arrivals', path: '/collections?category=new' },
];

const companyLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Divisions', path: '/divisions' },
  { label: 'Contact', path: '/contact' },
];

const supportLinks = [
  { label: 'Shipping & Delivery', path: '/shipping' },
  { label: 'Returns & Exchanges', path: '/returns' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms & Conditions', path: '/terms' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      {/* Top border accent */}
      <div className="footer__border" />

      <div className="container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo-link">
              <img src="/images/logo.jpg" alt="BIG DADDY" className="footer__logo" />
            </Link>
            <p className="footer__tagline">{brandInfo.tagline}</p>
            <p className="footer__brand-desc">
              {brandInfo.description}
            </p>
            <a
              href={brandInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
              <span>{brandInfo.instagramHandle}</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Shop Links */}
          <div className="footer__column">
            <h3 className="footer__heading">Shop</h3>
            <ul className="footer__links">
              {shopLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer__column">
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__links">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer__column">
            <h3 className="footer__heading">Support</h3>
            <ul className="footer__links">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} BIG DADDY. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy" className="footer__bottom-link">Privacy</Link>
            <Link to="/terms" className="footer__bottom-link">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
