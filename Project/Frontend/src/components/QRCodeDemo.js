// src/components/QRCodeDemo.jsx
import React from 'react';

const QRCodeDemo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Instant Product Information</h2>
              <p className="text-lg text-slate-600 mb-8">
                Consumers can scan any product QR code to instantly access complete traceability information:
              </p>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 primary-bg rounded-full mr-4"></div>
                  Complete supply chain journey and timeline
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 primary-bg rounded-full mr-4"></div>
                  Farmer details and farm location information
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 primary-bg rounded-full mr-4"></div>
                  Batch ID and sub-batch tracking details
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 primary-bg rounded-full mr-4"></div>
                  Quality certifications and safety standards
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 primary-bg rounded-full mr-4"></div>
                  Pricing transparency at each stage
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
                <div className="w-48 h-48 bg-slate-100 border-2 border-slate-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-32 h-32 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zm-8 4h2v2H7v-2zm8 0h2v2h-2v-2zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
                  </svg>
                </div>
                <p className="text-sm text-slate-600 font-medium">Sample QR Code</p>
                <p className="text-xs text-slate-500 mt-1">Batch ID: AGR-2024-001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeDemo;