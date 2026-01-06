import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand Section */}
        <div className="footer__section footer__brand-section">
          <h3 className="footer__brand-name">Megkart</h3>
          <p className="footer__tagline">Your trusted grocery partner</p>
          <p className="footer__description">
            Quality groceries for your home. From daily staples to household essentials, we bring everything you need with reliable service and honest prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__section">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Support */}
        <div className="footer__section">
          <h4 className="footer__heading">Get in Touch</h4>
          <div className="footer__contact">
            <p className="footer__contact-item">
              <span className="footer__icon">📱</span>
              <strong>WhatsApp Orders:</strong><br />
              +91 8076-17088-77
            </p>
            <p className="footer__contact-item">
              <span className="footer__icon">🕒</span>
              <strong>Support Hours:</strong><br />
              10 AM – 9 PM, Daily
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Megkart. All rights reserved. Made with ❤️ for our community.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
