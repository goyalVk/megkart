import { WHATSAPP_PHONE_NUMBER } from '../config';

/**
 * Opens WhatsApp with a prefilled order message
 * @param {string} productName - Name of the product
 * @param {number} price - Price of the product
 */
export const openWhatsAppOrder = (productName, price) => {
  const phoneNumber = WHATSAPP_PHONE_NUMBER;
  
  // Create order message
  const message = `Hi, I would like to order:\n\nProduct: ${productName}\nPrice: ₹${price}\n\nPlease confirm availability.`;
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp URL with prefilled text
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank');
};
