import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutApp from './LayoutApp';
import Login from './Login';
import Signup from './SignUp';
import RoleSelection from './RoleSelection';


export default function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutApp/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       
       <Route path="/role" element={<RoleSelection />} />

        <Route path="/signup/farmer" element={<Signup role="farmer" />} />
        <Route path="/signup/distributor" element={<Signup role="distributor" />} />
        <Route path="/signup/retailer" element={<Signup role="retailer" />} />

      </Routes>
    </Router>
  );
}
