import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const EmailOTPPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [step, setStep] = useState(1);
  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    emailjs.init('HOfv8qrzYwLk_5e5N');
  }, []);

  const validateEmail = (email) => {
    let r = /\S+@\S+\.\S+/;
    return r.test(email);
  };

  const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const sendOTP = () => {
    if (validateEmail(email)) {
      const otp = generateOTP();
      setGeneratedOtp(otp);

      const templateParams = {
        from_name: 'Bank official',
        OTP: otp,
        message: "Please don't share this otp with anyone",
        reply_to: email,
      };

      emailjs.send('service_psc3ej9', 'template_bi2rrib', templateParams)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStep(2);
        }, (err) => {
          console.log('FAILED...', err);
        });
    } else {
      alert('Invalid email address');
    }
  };

  const verifyOTP = () => {
    if (otp === generatedOtp) {
      setEmailVerified(true);
      setStep(3);
    } else {
      alert('Wrong OTP');
      setOtp('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {step === 1 && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Enter email address</h1>
          <div className="form-group mb-6">
            <input
              type="email"
              value={email}
              placeholder="Email Address"
              onChange={handleEmailChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {emailVerified && <span className="text-green-500 mt-2 block">✅ Verified</span>}
          </div>
          <button
            onClick={sendOTP}
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
          >
            Send OTP
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <p className="text-center mb-6">Enter the 4-digit OTP sent to your email</p>
          <div className="otp-group mb-6">
            <input
              type="text"
              value={otp}
              maxLength="4"
              onChange={handleOtpChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-center"
            />
          </div>
          <p className="text-center mb-6">
            Not your email or didn't receive the OTP? 
            <a href="#" onClick={() => setStep(1)} className="text-pink-500"> Try again</a>
          </p>
          <button
            onClick={verifyOTP}
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-500 transition duration-300"
          >
            Verify OTP
          </button>
        </div>
      )}
      {step === 3 && (
        <div className="w-full h-full flex items-center justify-center">
          <iframe
            src="http://localhost:3000"
            className="w-full h-full border-0"
            title="Next Step"
          />
        </div>
      )}
    </div>
  );
};

export default EmailOTPPage;
