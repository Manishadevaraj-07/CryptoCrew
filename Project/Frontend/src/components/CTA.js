// src/components/CTA.jsx
import React from 'react';

const CTA = () => {
  return (
    <section className="py-24 primary-bg">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Ready to Start Tracking?</h2>
        <p className="text-xl text-slate-200 mb-12 leading-relaxed">
          Join thousands of farmers and businesses who trust AgriTrace for complete supply chain transparency
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-slate-700 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-700 transition-all transform hover:scale-105">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;