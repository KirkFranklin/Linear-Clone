import React, { useState } from 'react';
import './Pricing.css';

function Pricing({ onOpenModal }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Free',
      description: 'For small teams getting started with issue tracking.',
      monthlyPrice: 0,
      annualPrice: 0,
      badge: null,
      features: [
        'Unlimited members',
        'Up to 250 active issues',
        'Standard integrations',
        'Community support'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'btn-plan-secondary'
    },
    {
      name: 'Standard',
      description: 'For growing teams that need power tools and automation.',
      monthlyPrice: 10,
      annualPrice: 8,
      badge: 'Most Popular',
      features: [
        'Unlimited active issues',
        'Admin roles & permissions',
        'Advanced GitHub & GitLab integration',
        'Priority support'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'btn-plan-primary'
    },
    {
      name: 'Plus',
      description: 'For scaling organizations requiring enterprise control.',
      monthlyPrice: 16,
      annualPrice: 14,
      badge: null,
      features: [
        'SAML / Single Sign-On (SSO)',
        'Advanced security & controls',
        'SLA & dedicated account manager',
        'Custom data retention'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'btn-plan-secondary'
    }
  ];

  return (
    <section className="pricing-section section-container" id="pricing">
      <div className="section-header">
        <span className="section-subtitle">PRICING</span>
        <h2 className="section-title">Simple, transparent plans</h2>
      </div>

      {/* Toggle Billing State */}
      <div className="billing-toggle-wrapper">
        <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Billed Monthly</span>
        <button 
          className="billing-toggle-switch" 
          onClick={() => setIsAnnual(!isAnnual)}
          aria-label="Toggle Billing Period"
        >
          <div className={`switch-handle ${isAnnual ? 'annual' : ''}`}></div>
        </button>
        <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>
          Billed Yearly <span className="discount-tag">Save 20%</span>
        </span>
      </div>

      {/* Pricing Cards Grid */}
      <div className="pricing-grid">
        {plans.map((plan, index) => {
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

          return (
            <div 
              key={index} 
              className={`pricing-card glass-panel ${plan.badge ? 'featured' : ''}`}
            >
              {plan.badge && <span className="featured-badge">{plan.badge}</span>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-desc">{plan.description}</p>

              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{price}</span>
                <span className="period">/ user / mo</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feat, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span> {feat}
                  </li>
                ))}
              </ul>

              <button 
                className={`plan-btn ${plan.buttonStyle}`}
                onClick={() => onOpenModal('signup')}
              >
                {plan.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Pricing;