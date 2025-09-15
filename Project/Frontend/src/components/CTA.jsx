import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="py-12 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Contact Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l4-4m0 8l-4-4m8-4v8" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-slate-800 mb-2">Email</h3>
            <p className="text-slate-600">agritrace@gmail.com</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m0 16v-6m4 6v-4m-8 4v-6m0-4h.01M6 12h.01M18 8v6M12 12h.01" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-slate-800 mb-2">Phone</h3>
            <p className="text-slate-600">9876543210</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg text-slate-800 mb-2">Hours</h3>
            <p className="text-slate-600">Mon-Fri: 9AM–5PM</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
