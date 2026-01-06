import { useState } from 'react';
import { Link } from "react-router-dom";
import { WHATSAPP_PHONE_NUMBER } from '../config';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleWhatsAppClick = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Open WhatsApp with general inquiry message
    const message = 'Hi, I would like to inquire about your products.';
    const phoneNumber = WHATSAPP_PHONE_NUMBER;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset loading state after 2 seconds
    setTimeout(() => setIsLoading(false), 2000);
  };
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">Megkart</Link>
        <nav className="navbar__menu">
          <Link className="navbar__link" to="/">Home</Link>
          <Link className="navbar__link" to="/products">Products</Link>
          <Link className="navbar__link" to="/about">About</Link>
          <Link className="navbar__link" to="/contact">Contact</Link>
        </nav>
        <button 
          className="navbar__cta" 
          type="button" 
          onClick={handleWhatsAppClick}
          disabled={isLoading}
          style={{
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Opening...' : 'WhatsApp Order'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
