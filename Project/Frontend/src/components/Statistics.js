import React from 'react';

export default function Statistics({ stats }) {
  return (
    <section className="statistics-section">
      <h2>Key Statistics</h2>
      <div className="stats-container">
        {stats.length === 0 ? (
          <p>Loading statistics...</p>
        ) : (
          stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
