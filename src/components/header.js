import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 py-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white flex items-center justify-center">
          <FaDollarSign className="text-green-500 mr-2" />
          PropInvesto.com
        </h1>
      </div>
    </header>
  );
};

export default Header;
