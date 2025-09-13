import React from 'react';

function Statistics({ stats }) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
                {stats.length === 0 ? (
                    <p>Loading statistics...</p>
                ) : (
                    stats.map((stat, i) => (
                        <div key={i} className="p-6 bg-gray-50 rounded-xl shadow-lg">
                            <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}

export default Statistics;
