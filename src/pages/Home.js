import { Link } from "react-router-dom";
import { WHATSAPP_PHONE_NUMBER, getSEOTitle, getSEODescription, SEO_CONFIG } from '../config';
import SEOHead from '../components/SEOHead';
import { products } from "../data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 6);
  const seoTitle = getSEOTitle(SEO_CONFIG.titles.home);
  const seoDescription = getSEODescription(SEO_CONFIG.descriptions.home);

  return (
    <div className="home">
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        keywords={SEO_CONFIG.keywords.primary + ', ' + SEO_CONFIG.keywords.secondary.join(', ')}
      />

      {/* 1. Banner Section */}
      <section className="grocery-banner">
        <div className="grocery-banner__bg">
          <img src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&h=400&fit=crop" alt="Complete grocery range - rice, oil, flour, spices, pulses" />
        </div>
        <div className="grocery-banner__overlay">
          <div className="container grocery-banner__content">
            <h1 className="grocery-banner__title">Your Everyday Grocery Store, Simplified</h1>
            <p className="grocery-banner__subtitle">Staples • Household groceries • Easy WhatsApp ordering</p>
            <Link className="btn btn--primary" to="/products">Browse Groceries</Link>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="hero__badge">Trusted & reliable</span>
            <h2 className="hero__title">Your Complete Grocery Partner</h2>
            <p className="hero__subtitle">
              From daily staples to household essentials—everything you need for your home, delivered with care. Simple ordering, honest prices.
            </p>
            <div className="hero__actions">
              <Link className="btn" to="/products">Shop groceries</Link>
              <a
                className="btn btn--ghost"
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp order
              </a>
            </div>
            <div className="hero__meta">
              <span>Daily essentials</span>
              <span>Household groceries</span>
              <span>Trusted quality</span>
              <span>Fair pricing</span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__card">
              <img src="https://imagine-public.x.ai/imagine-public/images/b3f33f9d-cd03-4843-90f2-4bbc94711082.jpg?cache=1&dl=1" alt="Complete grocery range - rice, oil, spices, pulses, household items" />
              <div className="hero__card-title">Everything you need daily</div>
              <div className="hero__card-meta">
                Quality products for your home. Rice, oil, flour, spices, pulses, and more. Your trusted grocery partner in {SEO_CONFIG.city}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators Section */}
      <section className="trust-indicators">
        <div className="container trust-indicators__grid">
          <div className="trust-indicator">
            <div className="trust-indicator__icon">🛒</div>
            <div className="trust-indicator__title">Complete Grocery Range</div>
            <p className="trust-indicator__text">From staples to household items—everything you need under one roof.</p>
          </div>
          <div className="trust-indicator">
            <div className="trust-indicator__icon">💰</div>
            <div className="trust-indicator__title">Honest Prices, No Confusion</div>
            <p className="trust-indicator__text">Fair pricing on all grocery items. What you see is what you pay.</p>
          </div>
          <div className="trust-indicator">
            <div className="trust-indicator__icon">📲</div>
            <div className="trust-indicator__title">Simple WhatsApp Ordering</div>
            <p className="trust-indicator__text">No apps, no hassle. Just message us your list and we'll deliver.</p>
          </div>
        </div>
      </section>


      {/* 3. Featured Products Section */}
      <section className="section">
        <div className="container section__header">
          <div>
            <div className="section__eyebrow">Featured</div>
            <h2 className="section__title">Popular Grocery Items</h2>
          </div>
          <Link className="link-arrow" to="/products">
            View all products &rarr;
          </Link>
        </div>

        <div className="container">
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="product-card">
                <div className="product-card__image">
                  <img src={product.image} alt={product.name + " - grocery delivery"} />
                </div>
                <div className="product-card__title">{product.name}</div>
                <div className="product-card__meta">{product.shortDescription}</div>
                <div className="product-card__bottom">
                  <span className="product-card__price">Rs. {product.price.toLocaleString("en-IN")}</span>
                  <span className="product-card__link">View</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Conversion-Focused CTA Section */}
      <section className="conversion-cta">
        <div className="container conversion-cta__content">
          <div className="conversion-cta__text">
            <h2 className="conversion-cta__heading">Order Groceries the Easy Way</h2>
            <p className="conversion-cta__subtext">Skip apps and calls. Just message us on WhatsApp.</p>
          </div>
          <a
            className="btn btn--primary conversion-cta__btn"
            href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>

      {/* 5. WhatsApp Order CTA Section intentionally streamlined for performance */}
    </div>
  );
};

export default Home;
