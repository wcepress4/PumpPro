import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import AuthService from '../../services/AuthService';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isLoggedIn = AuthService.isLoggedIn();
  const isAdmin = AuthService.isAdmin();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    AuthService.logoutUser();
    navigate('/welcome');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

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
            placeholder="Search..."
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
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown} 
                className="flex items-center space-x-2"
              >
                <VscAccount className="text-2xl text-gray-700 hover:text-red-600" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link 
                    to="/settings" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Settings
                  </Link>
                  {isAdmin && (
                    <Link 
                      to="/admin/users" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button 
                    onClick={() => {
                      setDropdownOpen(false);
                      handleLogout();
                    }} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
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

export default Header;
