import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';

const HeaderComponent = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center text-xl font-bold text-red-600">
          <VscAccount className="mr-2 text-2xl" />
          PumpPro
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/profile" className="text-gray-700 hover:text-red-600">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/history" className="text-gray-700 hover:text-red-600">
              History
            </Link>
          </li>
          <li>
            <Link to="/exercises" className="text-gray-700 hover:text-red-600">
              Exercises
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
