import React from 'react';
import Navbar from './components/Navbar.jsx'; // Added .jsx extension
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ paddingTop: '120px' }}>
        {/* Hero section coming next */}
      </main>
    </div>
  );
}

export default App;