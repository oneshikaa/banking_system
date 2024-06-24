import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    navigate('/documents');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

return (
  <div className="min-h-screen flex flex-col">
    <header className="bg-blue-500">
    <div className="container mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">Easy Access Account</h1>
          <button
            onClick={handleLoginClick}
            className="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Login
          </button>
        </div>
    </header>

    <main className="flex-1 bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('path/to/your/image.jpg')` }}></div>
          <div className="relative p-8 bg-opacity-75 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold mb-4">Easy Access Account</h2>
            <p className="text-lg mb-4">An Easy Access Account from OceanSaving. Here you can keep your money grow. These are updated interest percents and can be withdrawn at any time.</p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="bg-white text-black rounded-lg p-4 shadow-md">
                <p className="text-2xl font-bold">Variable</p>
                <p className="text-4xl font-bold">4.97%</p>
              </div>
              <div className="bg-white text-black rounded-lg p-4 shadow-md">
                <p className="text-2xl font-bold">Fixed 1 Year</p>
                <p className="text-4xl font-bold">5.08%</p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
            <button
              onClick={handleApplyNowClick}
              className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-pink-700 transition duration-300">
              Apply now
            </button>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Account summary</h3>
          <p className="mb-8">The summary box contains the specific terms and conditions for this account and where applicable, these supersede our General Savings Conditions.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">You can deposit any amount between £1 and £1,000</h4>
              <p>FSCS is our backing up policy which secures your amount</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">You can add your savings at any time up to the £200 maximum</h4>
              <p>With our savings plan, you can grow your money with interest</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">You can withdraw your money without giving us notice</h4>
              <p>No penalties for early withdrawals, full flexibility</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">If your balance falls below £1,000 your interest rate will reduce to 0.5% AER / 0.5% Gross</h4>
              <p>Interest rate increases to 5.08% if your balance is above £1,000</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">A minimum £20 each from your Challenger Bank Account held with a previous bank</h4>
              <p>Reach your savings goal without continuously saving</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
);
};

export default HomePage;