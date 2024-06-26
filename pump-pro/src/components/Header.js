import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';

const HeaderComponent = ({ isLoggedIn }) => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Brand Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-4xl font-bold text-red-600 ml-5 hover:text-red-300">
            PumpPro
          </Link>
        </div>

        <Link to="/pump-workout">
          <button className="bg-red-500 text-white px-4 py-2 w-18 rounded-2xl">
            Pump
          </button>
        </Link>
        
        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input 
            type="text" 
            placeholder="Search..." rch
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button className="bg-red-500 text-white px-4 py-1.5 w-18 rounded">Search</button>
        </div>
        
        
        {/* User Actions */}
        <div className="flex items-center space-x-4">
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/exercises" className="text-gray-700 hover:text-red-600">
              Exercises
            </Link>
          </li>
          <li>
            <Link to="/pump-plans" className="text-gray-700 hover:text-red-600">
              PumpPlans
            </Link>
          </li>
          <li>
            <Link to="/pump-panel" className="text-gray-700 hover:text-red-600">
              PumpPanel
            </Link>
          </li>
          <li>
            <Link to="/pump-pedia" className="text-gray-700 hover:text-red-600">
              PumpPedia
            </Link>
          </li>
        </ul>
          {isLoggedIn ? (
            <Link to="/profile" className="text-gray-700 hover:text-red-600">
              <VscAccount className="text-2xl" />
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-red-500 text-white px-3 py-1.5 w-18 rounded">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-red-500 text-white px-3 py-1.5 w-18 rounded">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
