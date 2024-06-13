import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            PumpPro
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                <VscAccount style={{ marginRight: '5px' }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/history" className="nav-link">
                History
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/exercises" className="nav-link">
                Exercises
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
