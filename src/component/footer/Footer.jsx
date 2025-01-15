import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container bg-color">
      {/* Newsletter Section */}
      <div className="about flex space">
        <h2>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="email-input">
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
          />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>

      {/* Footer Details Section */}
      <div className="about-details flex bg-color">
        {/* Company Info */}
        <div className="shop-co">
          {/* SVG Logo */}
          <svg
            width="166"
            height="26"
            viewBox="0 0 166 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1273 25.7806C4.04242 25.7527..."
              fill="black"
            />
          </svg>
          <p>
            We have clothes that suit your style and which you’re proud to wear.
            From women to men.
          </p>

          {/* Social Media Icons */}
          <div className="actives">
            <svg
              width="148"
              height="28"
              viewBox="0 0 148 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="white" />
              <circle cx="14" cy="14" r="13.5" stroke="black" strokeOpacity="0.2" />
              <path
                d="M20.2071 10.9831C19.7881 11.1693..."
                fill="black"
              />
            </svg>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-contain">
          <p className="footer-heading" style={{ color: "black" }}>COMPANY</p>
          <p>About</p>
          <p>Features</p>
          <p>Work</p>
          <p>Career</p>
        </div>

        <div className="footer-contain">
          <p className="footer-heading" style={{ color: "black" }}>HELP</p>
          <p>Customer Support</p>
          <p>Delivery Details</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div className="footer-contain">
          <p className="footer-heading" style={{ color: "black" }}>FAQ</p>
          <p>Account</p>
          <p>Manage Deliveries</p>
          <p>Orders</p>
          <p>Payments</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copy-right">
        <p>© 2025 Ajay Lokhande. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
