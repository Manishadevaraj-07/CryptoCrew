import React from "react";
import "../App.css";

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero">
      <div className="container hero-content">
        <h2>Complete Farm to Fork <span>Transparency</span></h2>
        <p>Revolutionary blockchain-based agricultural tracing system ensuring complete supply chain transparency, 
        preventing fraud, and building consumer trust through immutable records.</p>
        <div className="hero-buttons">
          <button onClick={() => scrollToSection('portals')}>Explore Portals</button>
          <button onClick={() => scrollToSection('features')}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
