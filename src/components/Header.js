import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
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
  );
};

export default Header;
