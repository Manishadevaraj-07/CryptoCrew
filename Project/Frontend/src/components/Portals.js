import React from "react";
import "../App.css";


const portalsData = [
  {
    icon: "🚜",
    title: "Farmer Portal",
    items: ["Add product details & batch info","Store data on IPFS & blockchain","Generate QR codes","Set farm gate prices"],
    btn: "Access Farmer Portal"
  },
  {
    icon: "🚛",
    title: "Distributor Portal",
    items: ["Add quality certifications","Track transport conditions","Update distribution prices","Verify batch transfers"],
    btn: "Access Distributor Portal"
  },
  {
    icon: "🏪",
    title: "Retailer Portal",
    items: ["Set final retail prices","Manage storage conditions","Set expiry dates","Smart contract validation"],
    btn: "Access Retailer Portal"
  },
  {
    icon: "📱",
    title: "Consumer Portal",
    items: ["Scan QR codes instantly","View complete product history","Verify authenticity","Check price transparency"],
    btn: "Scan QR Code"
  }
];

const Portals = () => {
  return (
    <section id="portals" className="portals">
      <div className="container">
        <h3>Access Your Portal</h3>
        <p>Each stakeholder in the supply chain has a dedicated portal with specific tools and capabilities</p>
        <div className="portals-grid">
          {portalsData.map((p, idx) => (
            <div className="portal card" key={idx} onClick={() => alert(`${p.title}`)}>
              <div className="portal-icon">{p.icon}</div>
              <h4>{p.title}</h4>
              <ul>
                {p.items.map((i, iidx) => <li key={iidx}>{i}</li>)}
              </ul>
              <button>{p.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portals;
