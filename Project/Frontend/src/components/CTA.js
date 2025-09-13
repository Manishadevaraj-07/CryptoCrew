import React from "react";
import "../App.css";


const CTA = () => {
  const scrollToPortals = () => {
    document.getElementById("portals").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-bg text-green-800 py-20 hero-pattern text-center">
      <h3 className="text-4xl font-bold mb-6 text-green-800">Ready to Transform Your Supply Chain?</h3>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-green-700">
        Join the revolution in agricultural transparency. Build trust, prevent fraud, and ensure fair pricing for everyone in the supply chain.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={scrollToPortals}
          className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all shadow-lg"
        >
          Get Started Now
        </button>
        <button
          onClick={() => alert("Contact our team for enterprise solutions and custom implementations")}
          className="border-2 border-green-800 text-green-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all"
        >
          Contact Sales
        </button>
      </div>
    </section>
  );
};

export default CTA;
