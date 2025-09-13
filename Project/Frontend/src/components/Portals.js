import React from 'react';

export default function Portals() {
    return (
        <section id="portals" className="py-20 bg-gray-50 text-center">
            <h3 className="text-4xl font-bold mb-6">Access Your Portal</h3>
            <p className="text-xl max-w-3xl mx-auto mb-12">Each stakeholder has a dedicated portal for managing the supply chain.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {['Farmer', 'Distributor', 'Retailer', 'Consumer'].map((portal) => (
                    <div key={portal} className="bg-white p-8 rounded-2xl shadow-lg card-hover cursor-pointer">
                        <h4 className="text-xl font-bold">{portal} Portal</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
