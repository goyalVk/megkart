import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { openWhatsAppOrder } from '../utils/whatsapp';
import Breadcrumb from '../components/Breadcrumb';
import SEOHead from '../components/SEOHead';
import '../styles/global.css';

export default function ProductDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  
  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id));

  // If product not found, show error message
  if (!product) {
    return (
      <div className="container" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <p>Sorry, we couldn't find the product you're looking for.</p>
      </div>
    );
  }

  const handleOrderWhatsApp = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    openWhatsAppOrder(product.name, product.price);
    
    // Reset loading state after 2 seconds
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <SEOHead
          title={`${product.name} – Megkart`}
          description={`Order ${product.name} via WhatsApp. Trusted grocery, fair pricing, quick assistance.`}
        />
        <Breadcrumb productName={product.name} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
          
          {/* Product Image */}
          <div style={{ textAlign: 'center' }}>
            <img 
              src={product.image} 
              alt={product.name}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>

          {/* Product Information */}
          <div>
            <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>{product.name}</h1>
            
            <div style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: '#FF6B35', 
              marginBottom: '20px' 
            }}>
              ₹{product.price.toLocaleString('en-IN')}
            </div>

            <div style={{ 
              fontSize: '16px', 
              color: '#666', 
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              <p><strong>Description:</strong></p>
              <p>{product.description}</p>
            </div>

            <button
              onClick={handleOrderWhatsApp}
              disabled={isLoading}
              style={{
                backgroundColor: isLoading ? '#1EA952' : '#25D366',
                color: 'white',
                border: 'none',
                padding: '15px 40px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '5px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                width: '100%',
                transition: 'background-color 0.3s',
                opacity: isLoading ? 0.8 : 1
              }}
              onMouseEnter={(e) => !isLoading && (e.target.style.backgroundColor = '#1EA952')}
              onMouseLeave={(e) => !isLoading && (e.target.style.backgroundColor = '#25D366')}
            >
              {isLoading ? 'Opening WhatsApp...' : 'Order on WhatsApp'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
