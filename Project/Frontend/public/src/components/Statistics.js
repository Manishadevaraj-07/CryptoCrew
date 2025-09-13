import React from 'react';

function Statistics({ stats }) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-4xl font-bold mb-8">Key Statistics</h3>
                <div className="grid md:grid-cols-4 gap-8">
                    {stats.length === 0 ? (
                        <p>Loading statistics...</p>
                    ) : (
                        stats.map((stat, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-lg">
                                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default Statistics;
