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

export default function LayoutApp({ setShowAuth }) {
  useAnimation();

  return (
    <div className="App">
      <Navigation setShowAuth={setShowAuth} />

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
