// src/App.js
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import UserPortals from './components/UserPortals';
import Features from './components/Features';
import QRCodeDemo from './components/QRCodeDemo';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useAnimation } from './hooks/useAnimation';

function App() {
  useAnimation();
  
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <HowItWorks />
      <UserPortals />
      <Features />
      <QRCodeDemo />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;