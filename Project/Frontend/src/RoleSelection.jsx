import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <section className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-green-800 mb-6">
          Choose your role
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/signup/farmer")}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Farmer
          </button>

          <button
            onClick={() => navigate("/signup/distributor")}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Distributor
          </button>

          <button
            onClick={() => navigate("/signup/retailer")}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Retailer
          </button>
        </div>
      </section>
    </main>
  );
}