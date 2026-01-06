import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import "../styles/global.css";

function About() {
  return (
    <div className="container" style={{ padding: "40px 20px" }}>
      <SEOHead
        title="Megkart – About"
        description="Megkart ek simple aur reliable grocery platform hai jahan aap apni daily grocery needs asaani se WhatsApp par order kar sakte hain."
      />
      <div style={{ maxWidth: "850px", margin: "0 auto" }}>
        
        {/* Page Heading */}
        <h1
          style={{
            fontSize: "34px",
            marginBottom: "24px",
            color: "#222",
            textAlign: "center",
          }}
        >
          About Megkart
        </h1>

        {/* Intro */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "20px",
          }}
        >
          <strong>Megkart</strong> ek simple aur reliable grocery platform hai,
          jahan aap apni daily grocery needs bina kisi confusion ke order
          kar sakte hain.  
          Hum sirf grocery aur household essentials par focus karte hain —
          jo aap roz use karte ho.
        </p>

        {/* Story */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "20px",
          }}
        >
          Megkart shuru karne ka ek hi goal tha —  
          grocery shopping ko asaan banana.  
          Na unnecessary apps, na complicated process —  
          bas products dekhiye aur WhatsApp par order kijiye.
        </p>

        {/* Trust */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Hum koi bada corporate brand nahi hain.  
          Hum ek honest, customer-first grocery business hain,
          jahan har order important hota hai aur har customer valuable.
        </p>

        {/* Why Megkart */}
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "16px",
            color: "#222",
          }}
        >
          Why Megkart?
        </h2>

        <ul
          style={{
            marginLeft: "20px",
            marginBottom: "30px",
            color: "#444",
            lineHeight: "1.7",
          }}
        >
          <li style={{ marginBottom: "10px" }}>
            ✓ Complete daily grocery & household essentials
          </li>
          <li style={{ marginBottom: "10px" }}>
            ✓ Simple aur transparent pricing
          </li>
          <li style={{ marginBottom: "10px" }}>
            ✓ WhatsApp se easy ordering
          </li>
          <li style={{ marginBottom: "10px" }}>
            ✓ No confusion, no over-promises
          </li>
          <li style={{ marginBottom: "10px" }}>
            ✓ Customer satisfaction sabse pehle
          </li>
        </ul>

        {/* Internal Links Section */}
        <div
          style={{
            backgroundColor: "#f6f6f6",
            padding: "24px",
            borderRadius: "8px",
            marginBottom: "40px",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "#555",
              marginBottom: "12px",
            }}
          >
            Agar aap Megkart ke products dekhna chahte hain
            ya order process samajhna chahte hain, toh yahan se shuru kijiye:
          </p>

          <p style={{ fontSize: "15px" }}>
            👉{" "}
            <Link to="/products" style={{ color: "#C85C2E", fontWeight: "600" }}>
              See all products
            </Link>
          </p>
          <p style={{ fontSize: "15px" }}>
            👉{" "}
            <Link to="/" style={{ color: "#C85C2E", fontWeight: "600" }}>
              Go to Home Page
            </Link>
          </p>
          <p style={{ fontSize: "15px" }}>
            👉{" "}
            <Link to="/contact" style={{ color: "#C85C2E", fontWeight: "600" }}>
              Contact Us (WhatsApp)
            </Link>
          </p>
        </div>

        {/* Closing Note */}
        <p
          style={{
            fontSize: "18px",
            textAlign: "center",
            color: "#C85C2E",
            fontWeight: "600",
          }}
        >
          Megkart choose karne ke liye thank you 🙏  
          Hum aapki daily grocery ko simple, reliable
          aur tension-free banane ke liye yahan hain.
        </p>

      </div>
    </div>
  );
}

export default About;
