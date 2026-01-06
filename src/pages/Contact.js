import React from "react";
import { WHATSAPP_PHONE_NUMBER } from "../config";
import SEOHead from "../components/SEOHead";
import "../styles/global.css";

function Contact() {
  const handleWhatsAppContact = () => {
    const message =
      "Hi Megkart 👋\nMujhe grocery order ya kisi product ke baare mein madad chahiye.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container" style={{ padding: "40px 20px" }}>
      <SEOHead
        title="Megkart – Contact"
        description="WhatsApp par simple grocery ordering. Kisi product, quantity ya order process ke baare mein poochna ho toh yahan se contact karein."
      />
      <div
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Page Heading */}
        <h1
          style={{
            fontSize: "34px",
            marginBottom: "20px",
            color: "#222",
          }}
        >
          Contact Megkart
        </h1>

        {/* Intro Text */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Agar aapko kisi grocery item, quantity, availability
          ya order process ke baare mein poochna ho,
          toh bina jhijhak humse contact kijiye.  
          Hum yahan aapki madad ke liye hain.
        </p>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppContact}
          style={{
            backgroundColor: "#2f2f2f",
            color: "white",
            border: "none",
            padding: "15px 42px",
            fontSize: "17px",
            fontWeight: "600",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: "35px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "22px" }}>📱</span>
          WhatsApp Par Message Karein
        </button>

        {/* Email Section */}
        <div
          style={{
            backgroundColor: "#f6f6f6",
            padding: "28px",
            borderRadius: "8px",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              marginBottom: "12px",
              color: "#222",
            }}
          >
            Email Support
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#555",
              marginBottom: "10px",
            }}
          >
            Agar WhatsApp available na ho,
            toh aap hume email bhi kar sakte hain.
          </p>

          <a
            href="mailto:middlewaresoftech@gmail.com"
            style={{
              fontSize: "17px",
              color: "#C85C2E",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            middlewaresoftech@gmail.com
          </a>
        </div>

        {/* Business Hours */}
        <div
          style={{
            fontSize: "14px",
            color: "#666",
            lineHeight: "1.6",
          }}
        >
          

          <p>
            Hum koshish karte hain ki business hours ke andar  
            2–3 ghante ke andar reply de sakein.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
