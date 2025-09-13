import React from 'react';

export default function HeroSection() {
    return (
        <section className="gradient-bg text-green-800 py-20 hero-pattern text-center">
            <h2 className="text-5xl font-bold mb-6">Complete Farm to Fork Transparency</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Revolutionary blockchain-based agricultural tracing system ensuring transparency, preventing fraud, and building trust.</p>
            <div className="flex justify-center gap-4">
                <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg">Explore Portals</button>
                <button className="border-2 border-green-800 text-green-800 px-8 py-4 rounded-xl font-semibold">Learn More</button>
            </div>
        </section>
    );
}
