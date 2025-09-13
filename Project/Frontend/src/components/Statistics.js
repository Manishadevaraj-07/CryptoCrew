// components/Statistics.js
import React from 'react';

const Statistics = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Supply Chain Visibility</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">0%</div>
            <div className="text-gray-600">Data Manipulation Risk</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Real-time Tracking</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-orange-600 mb-2">∞</div>
            <div className="text-gray-600">Immutable Records</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;