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

      {/* Sections with IDs for scrolling */}
      <section id="home">
        <Hero />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="user-portals">
        <UserPortals />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="qr-code-demo">
        <QRCodeDemo />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
