import React from "react";
import "./App.css";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">🌱</div>
          <div>
            <h1>AgriTrace</h1>
            <p>Blockchain-Powered Supply Chain</p>
          </div>
        </div>
        <div className="status">
          <div className="blockchain-status">
            <div className="pulse"></div>
            <span>Blockchain Active</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
