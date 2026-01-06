import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ productName }) {
  const breadcrumbStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
    fontSize: '14px',
    color: '#666'
  };

  const linkStyle = {
    color: '#0066cc',
    textDecoration: 'none',
    cursor: 'pointer'
  };

  const linkHoverStyle = {
    ...linkStyle,
    textDecoration: 'underline'
  };

  const separatorStyle = {
    color: '#999'
  };

  return (
    <div style={breadcrumbStyle}>
      <Link 
        to="/" 
        style={linkStyle}
        onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
      >
        Home
      </Link>
      <span style={separatorStyle}>&gt;</span>
      <Link 
        to="/products" 
        style={linkStyle}
        onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
      >
        Products
      </Link>
      <span style={separatorStyle}>&gt;</span>
      <span style={{ color: '#333' }}>{productName}</span>
    </div>
  );
}
