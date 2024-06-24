import logo from './logo.svg';
import './App.css';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import OTPChoicePage from './components/OTPChoicePage';
import OTPInputPage from './components/OTPInputPage';
import DocumentsPage from './components/DocumentsPage';
import MobileOTP from './components/MobileOTP';
import EmailOTP from './components/EmailOTP';
import PhoneOTPPage from './components/PhoneOTPPage';
import EmailOTPPage from './components/EmailOTPPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp-choice" element={<OTPChoicePage />} />
        <Route path="/otp-input" element={<OTPInputPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        {/* <Route path="/otp-input" element={<MobileOTP />} /> */}
        <Route path="/phone-otp" element={<PhoneOTPPage />} />
        <Route path="/email-otp" element={<EmailOTPPage />} />
        {/* <Route path="/documents" element={<EmailOTP />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;



