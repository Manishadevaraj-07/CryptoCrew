// src/components/UserPortals.jsx
import React from 'react';

const UserPortals = () => {
  const portals = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
        </svg>
      ),
      title: "Farmer Portal",
      description: "Register crops, create batch IDs, and manage farm data with our comprehensive farmer dashboard",
      bgColor: "primary-bg"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
        </svg>
      ),
      title: "Distributor Hub",
      description: "Manage logistics, split batches, and track shipments through our distribution management system",
      bgColor: "primary-light"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      ),
      title: "Retail Dashboard",
      description: "Inventory management, QR code generation, and sales analytics for retail operations",
      bgColor: "bg-slate-400"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Consumer Scanner",
      description: "Scan product QR codes to access complete traceability information and product history",
      bgColor: "primary-dark"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold mb-4">
            ACCESS PORTALS
          </span>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Choose Your Dashboard</h2>
          <p className="text-xl text-slate-600">Tailored interfaces for every role in the supply chain</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portals.map((portal, index) => (
            <div key={index} className="card-hover bg-white rounded-2xl p-8 cursor-pointer border-2 border-slate-200 hover:border-slate-300">
              <div className="text-center">
                <div className={`w-16 h-16 ${portal.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  {portal.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{portal.title}</h3>
                <p className="text-slate-600 mb-8">{portal.description}</p>
                <button className="w-full primary-bg text-white py-3 rounded-xl font-semibold hover:bg-slate-700 transition-colors">
                  Enter {portal.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserPortals;