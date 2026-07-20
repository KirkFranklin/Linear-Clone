import React from 'react';
import './Navbar.css';

function Navbar({ onOpenModal }) {
  return (
    <header className="navbar-header glass-panel">
      <div className="navbar-container section-container">
        <div className="navbar-logo">
          <span className="logo-icon">◇</span>
          <span className="logo-text">Linear</span>
        </div>

        <nav className="navbar-links">
          <a href="#features">Features</a>
          <a href="#tab-section">Workflows</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="navbar-actions">
          <button className="btn-secondary" onClick={() => onOpenModal('login')}>Log in</button>
          <button className="btn-primary" onClick={() => onOpenModal('signup')}>Sign up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;