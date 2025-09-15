import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSignIn = () => {
    navigate('/Login');
  };
  const handlesignup = () => {
    navigate('/role');
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 primary-bg rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">AgriTrace</h1>
              <p className="text-xs text-slate-500 -mt-1">Farm Tracking</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={handleNavClick('home')} className="text-slate-600 hover:text-slate-800 font-medium transition-colors cursor-pointer">Home</button>
            <button onClick={handleNavClick('solutions')} className="text-slate-600 hover:text-slate-800 font-medium transition-colors cursor-pointer">Solutions</button>
            <button onClick={handleNavClick('about')} className="text-slate-600 hover:text-slate-800 font-medium transition-colors cursor-pointer">About</button>
            <button onClick={handleNavClick('contact')} className="text-slate-600 hover:text-slate-800 font-medium transition-colors cursor-pointer">Contact</button>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={handleSignIn} className="text-slate-600 hover:text-slate-800 font-medium transition-colors">
              Sign In
            </button>
            <button onClick={handlesignup} className="primary-bg text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
