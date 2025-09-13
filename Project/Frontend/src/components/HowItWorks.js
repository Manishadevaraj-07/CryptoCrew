// components/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: '🚜 Farm Registration',
      description: 'Farmers add product details, cultivation dates, and batch information. Data is securely stored on IPFS and linked to blockchain with QR code generation.',
      color: 'green'
    },
    {
      number: 2,
      title: '🚛 Distribution Tracking',
      description: 'Distributors update batch details with certifications, transport conditions, and pricing. Every transaction is recorded immutably on the blockchain.',
      color: 'blue'
    },
    {
      number: 3,
      title: '🏪 Retail Finalization',
      description: 'Retailers set final prices and storage conditions. Smart contracts validate all conditions and prevent price manipulation through automated enforcement.',
      color: 'purple'
    },
    {
      number: 4,
      title: '📱 Consumer Verification',
      description: 'Consumers scan QR codes to instantly access complete product history, from origin to current location, ensuring full transparency and trust.',
      color: 'orange'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">How AgriTrace Works</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, secure, and transparent process from farm to fork
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className={`w-16 h-16 bg-${step.color}-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0`}>
                  {step.number}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;