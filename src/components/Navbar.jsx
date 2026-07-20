import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar-header glass-panel">
      <div className="navbar-container section-container">
        <div className="navbar-logo">
          <span className="logo-icon">◇</span>
          <span className="logo-text">Linear</span>
        </div>

        <nav className="navbar-links">
          <a href="#features">Features</a>
          <a href="#method">Method</a>
          <a href="#customers">Customers</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="navbar-actions">
          <button className="btn-secondary">Log in</button>
          <button className="btn-primary">Sign up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;