import React from 'react';

const Portals = () => {
  const portals = [
    {
      icon: '🚜',
      title: 'Farmer Portal',
      color: 'green',
      features: [
        'Add product details & batch info',
        'Store data on IPFS & blockchain',
        'Generate QR codes',
        'Set farm gate prices'
      ],
      action: 'Access Farmer Portal',
      onClick: () => alert('Farmer Portal - Add product details, cultivation data, and generate QR codes for blockchain storage')
    },
    {
      icon: '🚛',
      title: 'Distributor Portal',
      color: 'blue',
      features: [
        'Add quality certifications',
        'Track transport conditions',
        'Update distribution prices',
        'Verify batch transfers'
      ],
      action: 'Access Distributor Portal',
      onClick: () => alert('Distributor Portal - Update certifications, track transfers, and manage distribution pricing')
    },
    {
      icon: '🏪',
      title: 'Retailer Portal',
      color: 'purple',
      features: [
        'Set final retail prices',
        'Manage storage conditions',
        'Set expiry dates',
        'Smart contract validation'
      ],
      action: 'Access Retailer Portal',
      onClick: () => alert('Retailer Portal - Set final prices, manage inventory, and prepare products for consumer sale')
    },
    {
      icon: '📱',
      title: 'Consumer Portal',
      color: 'orange',
      features: [
        'Scan QR codes instantly',
        'View complete product history',
        'Verify authenticity',
        'Check price transparency'
      ],
      action: 'Scan QR Code',
      onClick: () => alert('Consumer Portal - Scan QR codes to view complete product history and verify authenticity')
    }
  ];

  return (
    <section id="portals" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Access Your Portal</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each stakeholder in the supply chain has a dedicated portal with specific tools and capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portals.map((portal, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg card-hover"
            >
              <div className={`w-20 h-20 bg-${portal.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <span className="text-4xl">{portal.icon}</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">{portal.title}</h4>
              <div className="space-y-3 text-gray-600 mb-6">
                {portal.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <span className={`w-2 h-2 bg-${portal.color}-500 rounded-full mr-3`}></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={portal.onClick}
                className={`w-full bg-${portal.color}-600 text-white py-3 rounded-xl hover:bg-${portal.color}-700 transition-colors font-semibold`}
              >
                {portal.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portals;