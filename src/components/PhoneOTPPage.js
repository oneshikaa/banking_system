import { BsFillShieldLockFill } from 'react-icons/bs';
import { CgSpinner } from 'react-icons/cg';
import OtpInput from 'otp-input-react';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { auth } from './firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';

const PhoneOTPPage = () => {
  const [otp, setOtp] = useState('');
  const [ph, setPh] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);

  const handlePhoneInputChange = (value) => {
    if (value.length === 12) {
      setPhoneNumberValid(true);
    } else {
      setPhoneNumberValid(false);
    }
    setPh(value);
  };

//   function onCaptchVerify() {
//     return new Promise((resolve, reject) => {
//       if (!window.recaptchaVerifier) {
//         window.recaptchaVerifier = new RecaptchaVerifier(
//           'recaptcha-container',
//           {
//             size: 'invisible',
//             callback: () => {
//               resolve();
//             },
//             'expired-callback': () => {
//               reject(new Error('Recaptcha expired. Please try again.'));
//             },
//           },
//           auth
//         );
//         window.recaptchaVerifier.render().then(resolve).catch(reject);
//       } else {
//         resolve();
//       }
//     });
//   }

  function onCaptchVerify() {
    return new Promise((resolve, reject) => {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: () => {
              resolve();
            },
            "expired-callback": () => {
              reject(new Error("Recaptcha expired. Please try again."));
            },
          },
          auth
        );
        window.recaptchaVerifier.render().then(resolve).catch(reject);
      } else {
        resolve();
      }
    });
  }

  async function onSignup() {
    try {
      setLoading(true);
      await onCaptchVerify();

      const appVerifier = window.recaptchaVerifier;

      const formatPh = '+' + ph;
      const confirmationResult = await signInWithPhoneNumber(auth, formatPh, appVerifier);
      window.confirmationResult = confirmationResult;
      setLoading(false);
      setShowOTP(true);
      toast.success('OTP sent successfully!');
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error('Failed to send OTP. Please try again.');
    }
  }

  async function onOTPVerify() {
    setLoading(true);
    try {
      const result = await window.confirmationResult.confirm(otp);
      setUser(result.user);
      setLoading(false);
      toast.success('Signup successful!');
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error('Wrong OTP. Please try again.');
      setOtp('');
    }
  }

  return (
    <section className="flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
              <h2 className="text-center font-medium text-2xl">Mobile Number</h2>
              <input
                type="text"
                value={`+${ph}`}
                readOnly
                className="text-center border-none bg-transparent"
              />
            </div>
            <div className="w-80 flex flex-col gap-4 rounded-lg p-4 text-black">
              <h2 className="text-center font-medium text-10l">✅ Verified</h2>
              <a
                href="http://localhost:4000/nextstep"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded mt-4"
              >
                Proceed to Next Step
              </a>
            </div>
          </div>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            {showOTP ? (
              <>
                <div className="bg-white text-pink-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-black text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container"
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-pink-500 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <h1 className="text-center leading-normal text-black font-medium text-3xl mb-6">
                  Enter Phone number
                </h1>
                <PhoneInput
                  country={'in'}
                  value={ph}
                  onChange={handlePhoneInputChange}
                  disableDropdown={true}
                />
                <button
                  onClick={onSignup}
                  disabled={!phoneNumberValid}
                  className={`bg-pink-500 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded ${
                    !phoneNumberValid ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send otp</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PhoneOTPPage;
