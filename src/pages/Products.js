import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getSEOTitle, getSEODescription, SEO_CONFIG, WHATSAPP_PHONE_NUMBER } from '../config';
import SEOHead from '../components/SEOHead';
import { products } from '../data/products';

const formatPrice = (amount) =>
  amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const seoTitle = getSEOTitle(SEO_CONFIG.titles.products);
  const seoDescription = getSEODescription(SEO_CONFIG.descriptions.products);

  // Get unique categories from products
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className="section">
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        keywords={SEO_CONFIG.keywords.primary + ', ' + SEO_CONFIG.keywords.secondary.slice(0, 3).join(', ')}
      />
      
      <div className="container">
        <div className="section__header">
          <div>
            <p className="section__eyebrow">Our Fresh Groceries</p>
            <h1 className="section__title">Shop Daily Essentials Delivered Near You</h1>
            <p style={{ fontSize: '1rem', color: '#666', marginTop: '0.5rem' }}>
              Browse our selection of fresh vegetables, fruits, and daily grocery essentials available for same-day delivery in {SEO_CONFIG.city}. 
              Find {SEO_CONFIG.keywords.secondary[0]} with affordable prices and trusted quality.
            </p>
          </div>
        </div>

        {/* INTRO SECTION - Hinglish Content */}
        <div style={{
          backgroundColor: '#fef6e9',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          border: '1px solid #fce7b8'
        }}>
          <h2 style={{
            fontSize: '1.4rem',
            fontWeight: '700',
            color: '#1e3a5f',
            marginBottom: '1rem'
          }}>
            Daily Grocery, Simple Ordering
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#333',
            lineHeight: '1.7',
            marginBottom: '1.5rem'
          }}>
            Yahan aapko milengi sabhi zaroori grocery items — jaise daily use ke staples, household groceries aur essentials. Bas product dekhiye, pasand kariye aur WhatsApp par order kijiye.
          </p>

          {/* Internal Navigation Links */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            fontSize: '0.95rem'
          }}>
            <Link to="/" style={{
              color: '#1e3a5f',
              fontWeight: '500',
              textDecoration: 'underline',
              transition: 'opacity 200ms'
            }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
              Home
            </Link>
            <Link to="/about" style={{
              color: '#1e3a5f',
              fontWeight: '500',
              textDecoration: 'underline',
              transition: 'opacity 200ms'
            }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
              About Us
            </Link>
            <Link to="/contact" style={{
              color: '#1e3a5f',
              fontWeight: '500',
              textDecoration: 'underline',
              transition: 'opacity 200ms'
            }} onMouseEnter={(e) => e.target.style.opacity = '0.7'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search fresh vegetables and groceries by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: '1',
                minWidth: '200px',
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '1rem',
              }}
              aria-label="Search for fresh vegetables and grocery products"
            />

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
              aria-label="Filter products by category"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'fresh product' : 'fresh products'} found - 
            {' '}<strong>Same-day delivery available</strong> | Fresh vegetables and groceries near you
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-card__image">
                  <img src={product.image} alt={product.name + " - fresh grocery delivery"} />
                </div>
                <h2 className="product-card__title">{product.name}</h2>
                <p className="product-card__price">{formatPrice(product.price)}</p>
                <p className="product-card__meta">{product.shortDescription}</p>
                <Link className="btn" to={`/product/${product.id}`}>
                  View Details - Order Fresh
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#666' }}>
            <p style={{ fontSize: '1.1rem' }}>No fresh groceries found matching your search.</p>
            <p style={{ fontSize: '0.9rem' }}>Try adjusting your search or browse our fresh vegetables and grocery categories.</p>
            <p style={{ fontSize: '0.85rem', marginTop: '1rem', color: '#999' }}>
              Looking for {SEO_CONFIG.keywords.secondary[0]}? Check our full selection of fresh produce and daily essentials.
            </p>
          </div>
        )}

        {/* MID-PAGE HELPER SECTION - Below Grid */}
        <div style={{
          backgroundColor: '#f0f4f8',
          padding: '2rem',
          borderRadius: '8px',
          marginTop: '3rem',
          marginBottom: '2rem',
          border: '1px solid #d1dce6',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#333',
            lineHeight: '1.7',
            marginBottom: '1.5rem'
          }}>
            <strong>Products pasand aaye?</strong><br />
            Agar aapko quantity, availability ya kisi aur grocery item ke baare mein poochna ho, toh bina jhijhak WhatsApp par message karein.
          </p>
          <button
            onClick={() => {
              const phoneNumber = WHATSAPP_PHONE_NUMBER;
              const message = 'Hi! Kya aap mujhe apne grocery products ke baare mein bata sakte hain?';
              const encodedMessage = encodeURIComponent(message);
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
              window.open(whatsappUrl, '_blank');
            }}
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#25d366',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 200ms',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1fa857'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#25d366'}
          >
            💬 WhatsApp par Message Kare
          </button>
        </div>

        {/* SEO Content Section */}
        <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Fresh Groceries Delivered Near You in {SEO_CONFIG.city}</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#555' }}>
            Get {SEO_CONFIG.keywords.primary} with our convenient online grocery delivery service. 
            We offer {SEO_CONFIG.keywords.secondary[1]} for all your household needs. 
            Order fresh vegetables and daily essentials with just a few clicks or through WhatsApp, 
            and enjoy {SEO_CONFIG.keywords.secondary[3]} at affordable prices. 
            {' '}{SEO_CONFIG.keywords.secondary[2]} ensures you always have access to quality produce. 
            Shop now and experience the convenience of online grocery shopping in {SEO_CONFIG.city}.
          </p>
        </div>

        {/* BOTTOM TRUST MESSAGE */}
        <div style={{
          backgroundColor: '#fef6e9',
          padding: '2rem',
          borderRadius: '8px',
          marginTop: '2rem',
          border: '1px solid #fce7b8',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#1e3a5f',
            lineHeight: '1.7',
            fontWeight: '500'
          }}>
            Megkart ek simple aur trusted grocery platform hai,<br />
            jahan aap apni daily needs bina kisi confusion ke order kar sakte hain.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Products;
