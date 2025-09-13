// components/Hero.js
import React from 'react';

const Hero = () => {
  const scrollToPortals = () => {
    document.getElementById('portals').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="gradient-bg text-green-800 py-20 hero-pattern">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-green-800">
          Complete Farm to Fork
          <span className="block text-green-700">Transparency</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-green-700">
          Revolutionary blockchain-based agricultural tracing system ensuring complete supply chain transparency, 
          preventing fraud, and building consumer trust through immutable records.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToPortals} 
            className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg"
          >
            Explore Portals
          </button>
          <button 
            onClick={scrollToFeatures} 
            className="border-2 border-green-800 text-green-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;