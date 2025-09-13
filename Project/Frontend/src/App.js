import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Portals from './components/Portals';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gray-50">
      <Header />
      <Hero />
      <Statistics />
      <Portals />
      <Features />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;