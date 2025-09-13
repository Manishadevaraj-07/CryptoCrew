import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portals from "./components/Portals";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Hero />
      <Portals />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
