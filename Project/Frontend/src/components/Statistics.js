import React from "react";

const stats = [
  { number: "100%", label: "Supply Chain Visibility" },
  { number: "0%", label: "Data Manipulation Risk" },
  { number: "24/7", label: "Real-time Tracking" },
  { number: "∞", label: "Immutable Records" }
];

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="container stats-grid">
        {stats.map((s, idx) => (
          <div className="stat" key={idx}>
            <div className="number">{s.number}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
