import React from 'react';
import './Hero.css';

function Hero({ onOpenModal }) {
  return (
    <section className="hero-section section-container">
      <div className="hero-badge glass-panel" onClick={() => onOpenModal('signup')}>
        <span className="badge-tag">New</span>
        <span className="badge-text">Linear Mobile v2.0 is now available</span>
        <span className="badge-arrow">→</span>
      </div>

      <h1 className="hero-title">
        Linear is a better way <br />
        <span className="text-gradient">to build products</span>
      </h1>

      <p className="hero-description">
        Meet the new standard for modern software development. <br />
        Streamline issues, projects, and product roadmaps.
      </p>

      <div className="hero-cta-group">
        <button className="btn-hero-primary" onClick={() => onOpenModal('signup')}>
          Get started <span className="btn-arrow">→</span>
        </button>
        <button className="btn-hero-secondary glass-panel" onClick={() => onOpenModal('login')}>
          Introducing Linear Asks <span className="btn-sparkle">✦</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;