import React, { useState } from 'react';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your query! We will get back to you soon.');
    setFormData({ name: '', email: '', query: '' });
    setIsOpen(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Contact Us</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions? Get in touch with our team for more information about our traceability solutions.
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-slate-800">Send us a message</h3>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="btn-primary text-white px-4 py-2 rounded-lg text-sm"
              >
                {isOpen ? 'Close Chat' : 'Open Chat'}
              </button>
            </div>
            
            {isOpen && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="query" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Query
                  </label>
                  <textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary text-white py-3 rounded-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            )}
            
            {!isOpen && (
              <div className="text-center py-8">
                <div className="w-16 h-16 primary-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-comments text-white text-2xl"></i>
                </div>
                <p className="text-slate-600">Click "Open Chat" to send us a message</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
