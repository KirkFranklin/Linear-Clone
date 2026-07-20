import React, { useState } from 'react';
import './WorkflowsTab.css';

function WorkflowsTab() {
  const [activeTab, setActiveTab] = useState('issues');

  const tabContent = {
    issues: {
      title: 'Issue tracking built for speed',
      description: 'Manage tasks effortlessly with filters, keyboard shortcuts, and automated status updates.',
      tag: '01. ISSUES',
      stats: 'Sub-50ms render time'
    },
    cycles: {
      title: 'Momentum through Cycles',
      description: 'Run automated sprint cycles that keep your team aligned without administrative overhead.',
      tag: '02. CYCLES',
      stats: 'Automated roll-overs'
    },
    roadmaps: {
      title: 'Strategic product roadmaps',
      description: 'Connect high-level company goals directly to daily engineering execution and pull requests.',
      tag: '03. ROADMAPS',
      stats: 'Real-time progress tracking'
    }
  };

  const active = tabContent[activeTab];

  return (
    <section className="workflows-section section-container" id="tab-section">
      <div className="section-header">
        <span className="section-subtitle">WORKFLOWS</span>
        <h2 className="section-title">Designed for modern software teams</h2>
      </div>

      {/* Tab Navigation */}
      <div className="tab-buttons-container glass-panel">
        <button 
          className={`tab-btn ${activeTab === 'issues' ? 'active' : ''}`}
          onClick={() => setActiveTab('issues')}
        >
          Issues
        </button>
        <button 
          className={`tab-btn ${activeTab === 'cycles' ? 'active' : ''}`}
          onClick={() => setActiveTab('cycles')}
        >
          Cycles
        </button>
        <button 
          className={`tab-btn ${activeTab === 'roadmaps' ? 'active' : ''}`}
          onClick={() => setActiveTab('roadmaps')}
        >
          Roadmaps
        </button>
      </div>

      {/* Dynamic Tab Card */}
      <div className="tab-card glass-panel">
        <div className="tab-card-header">
          <span className="tab-tag">{active.tag}</span>
          <span className="tab-stats">{active.stats}</span>
        </div>
        <h3 className="tab-card-title">{active.title}</h3>
        <p className="tab-card-desc">{active.description}</p>
        
        {/* Mock UI Terminal / Preview */}
        <div className="mock-preview">
          <div className="preview-dot-group">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <p className="preview-code">
            <code>linear {activeTab} --status active --priority urgent</code>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkflowsTab;