import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "🚜 Farm Registration",
      desc: "Farmers add product details, cultivation dates, and batch information. Data is securely stored on IPFS and linked to blockchain with QR code generation.",
      color: "green",
      num: 1,
    },
    {
      title: "🚛 Distribution Tracking",
      desc: "Distributors update batch details with certifications, transport conditions, and pricing. Every transaction is recorded immutably on the blockchain.",
      color: "blue",
      num: 2,
    },
    {
      title: "🏪 Retail Finalization",
      desc: "Retailers set final prices and storage conditions. Smart contracts validate all conditions and prevent price manipulation through automated enforcement.",
      color: "purple",
      num: 3,
    },
    {
      title: "📱 Consumer Verification",
      desc: "Consumers scan QR codes to instantly access complete product history, from origin to current location, ensuring full transparency and trust.",
      color: "orange",
      num: 4,
    },
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
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center space-x-6">
              <div
                className={`w-16 h-16 bg-${step.color}-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0`}
              >
                {step.num}
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
