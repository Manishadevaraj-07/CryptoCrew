import React from "react";

const Features = () => {
  const featuresData = [
    {
      icon: "⛓",
      title: "Blockchain Security",
      desc: "Immutable records stored on blockchain ensure data cannot be tampered with or manipulated by any party.",
      color: "green",
    },
    {
      icon: "📦",
      title: "IPFS Storage",
      desc: "Decentralized storage ensures product data is always accessible and cannot be lost or corrupted.",
      color: "blue",
    },
    {
      icon: "🤖",
      title: "Smart Contracts",
      desc: "Automated validation of contracts, expiry dates, and price manipulation prevention through code.",
      color: "purple",
    },
    {
      icon: "📊",
      title: "Price Transparency",
      desc: "Complete price history from farm to retail, preventing exploitation and ensuring fair pricing.",
      color: "orange",
    },
    {
      icon: "🛡",
      title: "Fraud Prevention",
      desc: "Immutable tracking prevents counterfeit products and ensures authenticity throughout the supply chain.",
      color: "red",
    },
    {
      icon: "⚡",
      title: "Real-time Updates",
      desc: "Instant updates across the entire supply chain as products move from farm to consumer.",
      color: "indigo",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Revolutionary Features
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on cutting-edge blockchain technology to ensure maximum transparency and trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <div
                className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
