import React from 'react';
import './FeaturesGrid.css';

function FeaturesGrid() {
  const features = [
    {
      icon: '⚡',
      title: 'Built for speed',
      description: 'Synchronized real-time updates and sub-50ms interactions keep your team moving fast.'
    },
    {
      icon: '🎯',
      title: 'Task Focus',
      description: 'Filter down noise with customizable views, keyboard shortcuts, and clear priorities.'
    },
    {
      icon: '🔄',
      title: 'Git Workflows',
      description: 'Automate issue status based on GitHub pull requests, commits, and branch names.'
    }
  ];

  return (
    <section className="features-section section-container" id="features">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card glass-panel">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesGrid;