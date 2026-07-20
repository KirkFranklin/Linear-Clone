import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeaturesGrid from './components/FeaturesGrid.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ paddingTop: '140px' }}>
        <Hero />
        <FeaturesGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;