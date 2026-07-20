import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, mode }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          <span className="logo-icon">◇</span>
          <h2>{mode === 'signup' ? 'Create your Linear account' : 'Welcome back to Linear'}</h2>
          <p className="modal-subtitle">
            {mode === 'signup' 
              ? 'Join thousands of high-performing teams.' 
              : 'Sign in to access your workspace.'}
          </p>
        </div>

        <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Work Email</label>
            <input type="email" placeholder="name@company.com" autoFocus />
          </div>

          {mode === 'signup' && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Dexter Kirk" />
            </div>
          )}

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="btn-primary modal-submit">
            {mode === 'signup' ? 'Get Started Free' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;