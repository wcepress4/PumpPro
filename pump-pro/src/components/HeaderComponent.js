import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';

const HeaderComponent = ({ isLoggedIn }) => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Brand Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold text-red-600">
            PumpPro
          </Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Pump</button>
        </div>
        
        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input 
            type="text" 
            placeholder="Search..." 
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded">Search</button>
        </div>
        
        {/* Navigation Links */}
        <ul className="flex items-center space-x-4">
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
        
        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Link to="/profile" className="text-gray-700 hover:text-red-600">
              <VscAccount className="text-2xl" />
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-red-600">
                Log In
              </Link>
              <Link to="/signup" className="text-gray-700 hover:text-red-600">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
