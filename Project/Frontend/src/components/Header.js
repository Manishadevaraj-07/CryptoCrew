import React from "react";

const Header = () => {
  return (
    <header className="gradient-bg text-green-800 shadow-2xl hero-pattern">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-3xl">🌱</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-green-800">AgriTrace</h1>
            <p className="text-green-700 text-sm">Blockchain-Powered Supply Chain</p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-green-300 rounded-full blockchain-pulse"></div>
            <span className="text-sm text-green-800">Blockchain Active</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
