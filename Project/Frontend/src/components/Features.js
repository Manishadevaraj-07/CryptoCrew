import React from "react";

const featuresData = [
  { icon: "⛓", title: "Blockchain Security" },
  { icon: "📦", title: "IPFS Storage" },
  { icon: "🤖", title: "Smart Contracts" },
  { icon: "📊", title: "Price Transparency" },
  { icon: "🛡", title: "Fraud Prevention" },
  { icon: "⚡", title: "Real-time Updates" }
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h3>Revolutionary Features</h3>
        <p>Built on cutting-edge blockchain technology to ensure maximum transparency and trust</p>
        <div className="features-grid">
          {featuresData.map((f, idx) => (
            <div className="feature card" key={idx}>
              <span className="feature-icon">{f.icon}</span> {f.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
