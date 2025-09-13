import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-green-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="text-xl font-bold text-green-400">AgriTrace</h4>
            </div>
            <p className="text-green-300">
              Revolutionizing agricultural supply chain transparency through blockchain technology.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-green-400">Platform</h5>
            <ul className="space-y-2 text-green-300">
              <li><a href="#" className="hover:text-green-200 transition-colors">Farmer Portal</a></li>
              <li><a href="#" className="hover:text-green-200 transition-colors">Distributor Portal</a></li>
              <li><a href="#" className="hover:text-green-200 transition-colors">Retailer Portal</a></li>
              <li><a href="#" className="hover:text-green-200 transition-colors">Consumer App</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-green-400">Technology</h5>
            <ul className="space-y-2 text-green-300">
              <li><a href="#" className="hover:text-green-200 transition-colors">Blockchain</a></li>
              <li><a href="#" className="hover:text-green-200 transition-colors">IPFS Storage</a></li>
              <li><a href="#" className="hover:text-green-200 transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="hover:text-green-200 transition-colors">QR Codes</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-green-400">Support</h5>
            <ul className="space-y-2 text-green-300">
              <li><a href="#" className="hover:text-green-200 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-green-200 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-green-200 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-green-200 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-green-300">
          <p>&copy; 2024 AgriTrace. All rights reserved. Built with blockchain technology for maximum transparency.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
