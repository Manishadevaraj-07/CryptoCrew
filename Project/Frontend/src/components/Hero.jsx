// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative py-24 bg-white subtle-pattern">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">
            🌾 Agricultural Technology Platform
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight">
          Complete Farm to Fork
          <span className="block primary-text">Traceability System</span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Track every step of your agricultural products with our comprehensive traceability platform. 
          Ensure transparency, quality, and trust throughout the entire supply chain.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="primary-bg text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-slate-700 transition-all transform hover:scale-105">
            Start Tracking Now
          </button>
          
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold primary-text mb-2">15K+</div>
            <div className="text-slate-600">Active Farms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold primary-text mb-2">2M+</div>
            <div className="text-slate-600">Products Tracked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold primary-text mb-2">99.8%</div>
            <div className="text-slate-600">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold primary-text mb-2">24/7</div>
            <div className="text-slate-600">Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;