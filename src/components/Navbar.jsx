import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNav = (action) => {
    setMobileMenuOpen(false);
    if (action === 'login' || action === 'signup') {
      onOpenModal(action);
    }
  };

  return (
    <header className="navbar-header glass-panel">
      <div className="navbar-container section-container">
        <div className="navbar-logo">
          <span className="logo-icon">◇</span>
          <span className="logo-text">Linear</span>
        </div>

        {/* Desktop Links */}
        <nav className="navbar-links desktop-only">
          <a href="#features">Features</a>
          <a href="#tab-section">Workflows</a>
          <a href="#pricing">Pricing</a>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions desktop-only">
          <button className="btn-secondary" onClick={() => onOpenModal('login')}>Log in</button>
          <button className="btn-primary" onClick={() => onOpenModal('signup')}>Sign up</button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="mobile-hamburger" 
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel">
          <nav className="mobile-nav-links">
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#tab-section" onClick={() => setMobileMenuOpen(false)}>Workflows</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          </nav>
          <div className="mobile-nav-actions">
            <button className="btn-secondary" onClick={() => handleMobileNav('login')}>Log in</button>
            <button className="btn-primary" onClick={() => handleMobileNav('signup')}>Sign up</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;