import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WorkflowsTab from './components/WorkflowsTab.jsx';
import FeaturesGrid from './components/FeaturesGrid.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import Board from './pages/Board.jsx';
import './App.css';

function LandingPage({ onOpenModal }) {
  const navigate = useNavigate();

  return (
    <>
      <Navbar onOpenModal={onOpenModal} />
      <main style={{ paddingTop: '140px' }}>
        <Hero onOpenModal={onOpenModal} />
        
        {/* Quick Launch Banner */}
        <section className="section-container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <button 
            className="btn-hero-primary" 
            onClick={() => navigate('/app')}
            style={{ margin: '0 auto' }}
          >
            Launch Live Workspace App →
          </button>
        </section>

        <WorkflowsTab />
        <FeaturesGrid />
        <Pricing onOpenModal={onOpenModal} />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('signup');

  const handleOpenModal = (mode) => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage onOpenModal={handleOpenModal} />} />
        <Route path="/app" element={<Board />} />
      </Routes>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        mode={modalMode} 
      />
    </div>
  );
}

export default App;