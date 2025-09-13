import React from 'react';

export default function Features() {
    return (
        <section id="features" className="py-20 bg-white text-center">
            <h3 className="text-4xl font-bold mb-6">Revolutionary Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {['Blockchain Security', 'IPFS Storage', 'Smart Contracts'].map((feature) => (
                    <div key={feature} className="bg-gray-50 p-8 rounded-2xl shadow-lg card-hover">
                        <h4 className="text-xl font-bold mb-4">{feature}</h4>
                        <p className="text-gray-600">Explanation about {feature} functionality in the system.</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
