import React from 'react';

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-100 text-center">
      <h3 className="text-3xl font-semibold mb-8">How It Works</h3>
      <div className="max-w-3xl mx-auto space-y-8">
        <p>1️⃣ Farmers input product data into the system, and it gets stored on IPFS & blockchain with QR code generation.</p>
        <p>2️⃣ Distributors and retailers update certifications, transfer records, and pricing—all immutably recorded.</p>
        <p>3️⃣ Smart contracts automatically enforce pricing and expiration rules.</p>
        <p>4️⃣ Consumers scan QR codes to view the full verified history of the product.</p>
      </div>
    </section>
  );
}

export default HowItWorksSection;
