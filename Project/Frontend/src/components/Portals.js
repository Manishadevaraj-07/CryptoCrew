import React from "react";

const Portals = () => {
  const portalData = [
    {
      title: "Farmer Portal",
      color: "green",
      icon: "🚜",
      points: [
        "Add product details & batch info",
        "Store data on IPFS & blockchain",
        "Generate QR codes",
        "Set farm gate prices",
      ],
      btnText: "Access Farmer Portal",
    },
    {
      title: "Distributor Portal",
      color: "blue",
      icon: "🚛",
      points: [
        "Add quality certifications",
        "Track transport conditions",
        "Update distribution prices",
        "Verify batch transfers",
      ],
      btnText: "Access Distributor Portal",
    },
    {
      title: "Retailer Portal",
      color: "purple",
      icon: "🏪",
      points: [
        "Set final retail prices",
        "Manage storage conditions",
        "Set expiry dates",
        "Smart contract validation",
      ],
      btnText: "Access Retailer Portal",
    },
    {
      title: "Consumer Portal",
      color: "orange",
      icon: "📱",
      points: [
        "Scan QR codes instantly",
        "View complete product history",
        "Verify authenticity",
        "Check price transparency",
      ],
      btnText: "Scan QR Code",
    },
  ];

  return (
    <section id="portals" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Access Your Portal
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each stakeholder in the supply chain has a dedicated portal with
            specific tools and capabilities
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portalData.map((portal) => (
            <div
              key={portal.title}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover cursor-pointer"
              onClick={() => alert(`${portal.title} - ${portal.points.join(", ")}`)}
            >
              <div
                className={`w-20 h-20 bg-${portal.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <span className="text-4xl">{portal.icon}</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {portal.title}
              </h4>
              <div className="space-y-3 text-gray-600 mb-6">
                {portal.points.map((p, idx) => (
                  <div key={idx} className="flex items-center">
                    <span
                      className={`w-2 h-2 bg-${portal.color}-500 rounded-full mr-3`}
                    ></span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <button
                className={`w-full bg-${portal.color}-600 text-white py-3 rounded-xl hover:bg-${portal.color}-700 transition-colors font-semibold`}
              >
                {portal.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portals;
