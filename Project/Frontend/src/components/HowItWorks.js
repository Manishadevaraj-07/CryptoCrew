// src/components/HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      title: "Register Product",
      description: "Farmers create detailed product profiles with unique batch identifiers",
      bgColor: "primary-bg"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      title: "Track Movement",
      description: "Monitor products as they move through distribution channels",
      bgColor: "primary-light"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      ),
      title: "Retail Integration",
      description: "Seamless integration with retail systems and inventory management",
      bgColor: "bg-slate-400"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Consumer Access",
      description: "Customers scan QR codes to view complete product journey",
      bgColor: "primary-dark"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Simple Tracking Process</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our streamlined system makes agricultural product tracking effortless and reliable
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 items-center">
          {steps.map((step, index) => (
            <div key={index} className={`text-center ${index < steps.length - 1 ? 'step-line' : ''} fade-in`}>
              <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;