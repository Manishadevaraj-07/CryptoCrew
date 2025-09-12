import React from 'react';

function Header() {
  return (
    <header className="bg-green-800 text-white p-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">AgriTrace</h1>
      <nav>
        <a href="#features" className="mr-4">Features</a>
        <a href="#how-it-works" className="mr-4">How It Works</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
