import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WorkflowsTab from './components/WorkflowsTab.jsx';
import FeaturesGrid from './components/FeaturesGrid.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('signup');

  const handleOpenModal = (mode) => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <div className="app">
      <Navbar onOpenModal={handleOpenModal} />
      <main style={{ paddingTop: '140px' }}>
        <Hero onOpenModal={handleOpenModal} />
        <WorkflowsTab />
        <FeaturesGrid />
        <Pricing onOpenModal={handleOpenModal} />
      </main>
      <Footer />
      
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        mode={modalMode} 
      />
    </div>
  );
}

export default App;