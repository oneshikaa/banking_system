// EmailOTP.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, Toaster } from 'react-hot-toast';

const EmailOTP = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const validateEmail = (value) => {
    let r = /\S+@\S+\.\S+/;
    setEmailValid(r.test(value));
    setEmail(value);
  };

  const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  const handleSendOTP = () => {
    const OTP = generateOTP();
    setGeneratedOtp(OTP.toString());

    let templateParams = {
      from_name: "YourApp",
      to_name: email,
      message: `Your OTP is ${OTP}`,
    };

    emailjs.send('service_psc3ej9', 'template_bi2rrib', templateParams, 'HOfv8qrzYwLk_5e5N')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success("OTP sent successfully!");
        setShowOTP(true);
      }, (err) => {
        console.log('FAILED...', err);
        toast.error("Failed to send OTP. Please try again.");
      });
  };

  const handleVerifyOTP = () => {
    if (otp === generatedOtp) {
      toast.success("Email verified successfully!");
    } else {
      toast.error("Invalid OTP. Please try again.");
      setOtp('');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
        {!showOTP ? (
          <>
            <h1 className="text-center leading-normal text-black font-medium text-3xl mb-6">
              Enter Email Address
            </h1>
            <input
              type="email"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              placeholder="Email Address"
              className="border p-2 rounded"
            />
            <button
              onClick={handleSendOTP}
              disabled={!emailValid}
              className={`bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded ${
                !emailValid ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              <span>Send OTP</span>
            </button>
          </>
        ) : (
          <>
            <h1 className="text-center leading-normal text-black font-medium text-3xl mb-6">
              Enter OTP
            </h1>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="border p-2 rounded"
            />
            <button
              onClick={handleVerifyOTP}
              className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
            >
              <span>Verify OTP</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailOTP;
