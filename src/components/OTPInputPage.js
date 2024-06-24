import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const OTPInputPage = () => {
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const method = query.get('method'); // 'email' or 'phone'

  const handleContactSubmit = (event) => {
    event.preventDefault();
    // Handle sending OTP logic here
    console.log(`${method}:`, contact);
    setStep(2);
  };

  const handleOTPSubmit = (event) => {
    event.preventDefault();
    // Handle OTP submission logic here
    console.log('OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {step === 1 ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Enter {method === 'email' ? 'Email' : 'Phone Number'}</h2>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">{method === 'email' ? 'Email' : 'Phone Number'}</label>
                <input
                  type={method === 'email' ? 'email' : 'tel'}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
              >
                Send OTP
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
            <form onSubmit={handleOTPSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default OTPInputPage;

