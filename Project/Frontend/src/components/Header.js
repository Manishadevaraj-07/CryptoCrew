import React from 'react';

export default function Header() {
  return (
    <header className="header-section">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🌱</span>
          <h1>AgriTrace</h1>
        </div>
        <div className="status">
          <span className="status-dot"></span>
          <span>Blockchain Active</span>
        </div>
      </div>
    </header>
  );
}
