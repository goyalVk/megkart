/**
 * SEOHead Component
 * Dynamically updates page title and meta tags for better SEO
 * Usage: <SEOHead title="..." description="..." />
 */

import { useEffect } from 'react';

const SEOHead = ({ 
  title = 'Fresh Grocery Delivery Near You | Online Store',
  description = 'Get fresh groceries delivered to your door. Order vegetables, fruits, dairy & essentials online.',
  keywords = ''
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update Open Graph tags for social sharing
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
  }, [title, description, keywords]);

  return null; // This component doesn't render anything visible
};

export default SEOHead;
