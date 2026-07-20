import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How is Linear different from Jira or Trello?',
      answer: 'Linear is purpose-built for high-performing software teams. It emphasizes keyboard-first efficiency, real-time synchronization, sub-50ms interactions, and minimal administrative overhead.'
    },
    {
      question: 'Can I import data from my existing tool?',
      answer: 'Yes! Linear has built-in one-click importers for Jira, Asana, GitHub Issues, and Trello so you can migrate your entire team history without losing context.'
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'Yes, both Standard and Plus plans come with a 14-day free trial with full feature access. No credit card is required to start.'
    },
    {
      question: 'How does GitHub integration work?',
      answer: 'Linear automatically links pull requests to issues, transitions status based on PR activity (e.g., closing issues when PRs merge), and parses issue keys directly from branch names.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-container" id="faq">
      <div className="section-header">
        <span className="section-subtitle">QUESTIONS</span>
        <h2 className="section-title">Frequently asked questions</h2>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item glass-panel ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;