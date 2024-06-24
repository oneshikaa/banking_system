import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPChoicePage = () => {
  const [otpMethod, setOtpMethod] = useState('');
  const navigate = useNavigate();

  // const handleContinue = () => {
  //   if (otpMethod) {
  //     navigate(`/otp-input?method=${otpMethod}`);
  //   } else {
  //     alert('Please select a method to receive the OTP');
  //   }

  const handleContinue = () => {
    if (otpMethod === 'email') {
      navigate('/email-otp');
    } else if (otpMethod === 'phone') {
      navigate('/phone-otp');
    } else {
      alert('Please select a method to receive the OTP');
    }
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">One-time password</h2>
        <p className="text-center mb-6">Please select how you'd like to receive your verification code.</p>
        <div className="mb-4">
          <label className="block bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer">
            <input
              type="radio"
              name="otpMethod"
              value="email"
              checked={otpMethod === 'email'}
              onChange={() => setOtpMethod('email')}
              className="mr-2"
            />
            Send a code by email
          </label>
          <label className="block bg-white p-4 rounded-lg shadow-md cursor-pointer">
            <input
              type="radio"
              name="otpMethod"
              value="phone"
              checked={otpMethod === 'phone'}
              onChange={() => setOtpMethod('phone')}
              className="mr-2"
            />
            Send a code by mobile phone number
          </label>
        </div>
        <button
          onClick={handleContinue}
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OTPChoicePage;
