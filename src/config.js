/**
 * Application Configuration
 */

export const WHATSAPP_PHONE_NUMBER = '918076170877'; // Format: 91XXXXXXXXXX

/**
 * Local SEO Configuration
 * Customize city and local keywords for better search visibility
 */
export const SEO_CONFIG = {
  city: 'Your City', // Change to your city name (e.g., 'Mumbai', 'Delhi', 'Bangalore')
  keywords: {
    primary: 'Online grocery store near me',
    secondary: [
      'Daily grocery delivery',
      'Fresh vegetables near me',
      'Fresh produce delivery',
      'Same-day grocery delivery',
      'Local grocery store',
      'Affordable groceries nearby'
    ]
  },
  titles: {
    home: `Fresh Grocery Delivery Near You | Online Store | {{city}}`,
    products: `Buy Fresh Vegetables & Groceries Online | {{city}} Delivery`,
  },
  descriptions: {
    home: `Get fresh groceries delivered to your door in {{city}}. Order vegetables, fruits, dairy & essentials online. Same-day delivery, affordable prices, trusted quality.`,
    products: `Shop fresh vegetables, fruits, and daily essentials online in {{city}}. Fast delivery, quality guaranteed. Order groceries near you now.`,
  }
};

/**
 * Replace {{city}} placeholder with actual city name
 */
export const getSEOTitle = (template) => 
  template.replace('{{city}}', SEO_CONFIG.city);

export const getSEODescription = (template) => 
  template.replace('{{city}}', SEO_CONFIG.city);
