import React from 'react';

function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-white text-center">
      <h3 className="text-3xl font-semibold mb-8">Key Features</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h4 className="font-bold text-xl">📄 Immutable Records</h4>
          <p>All transactions and batch details are stored on the blockchain and IPFS for tamper-proof transparency.</p>
        </div>
        <div>
          <h4 className="font-bold text-xl">🤝 Smart Contracts</h4>
          <p>Automated contract validation ensures fixed pricing, expiry handling, and rules enforcement without manual intervention.</p>
        </div>
        <div>
          <h4 className="font-bold text-xl">🚀 Web Dashboards</h4>
          <p>Dedicated portals for farmers, distributors, and retailers to manage data securely and track every transaction in real-time.</p>
        </div>
        <div>
          <h4 className="font-bold text-xl">📱 QR Code Access</h4>
          <p>Consumers can scan QR codes to instantly view full product history and verify authenticity of each batch.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
