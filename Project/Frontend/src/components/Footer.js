import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>AgriTrace</h4>
            <p>Revolutionizing agricultural supply chain transparency through blockchain technology.</p>
          </div>
          <div>
            <h5>Platform</h5>
            <ul>
              <li>Farmer Portal</li>
              <li>Distributor Portal</li>
              <li>Retailer Portal</li>
              <li>Consumer App</li>
            </ul>
          </div>
          <div>
            <h5>Technology</h5>
            <ul>
              <li>Blockchain</li>
              <li>IPFS Storage</li>
              <li>Smart Contracts</li>
              <li>QR Codes</li>
            </ul>
          </div>
          <div>
            <h5>Support</h5>
            <ul>
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Help Center</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <p className="copyright">&copy; 2025 AgriTrace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
