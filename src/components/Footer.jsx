import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section section-container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="navbar-logo">
            <span className="logo-icon">◇</span>
            <span className="logo-text">Linear</span>
          </div>
          <p className="footer-tagline">Designed for modern software teams.</p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#method">Method</a>
            <a href="#integrations">Integrations</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About us</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
            <a href="#customers">Customers</a>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#docs">Community</a>
            <a href="#contact">Contact</a>
            <a href="#dpa">DPA</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Linear Systems, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;