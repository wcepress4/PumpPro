// NotAuth.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotAuth = () => {
  return (
    <div>
      <h2>Access Denied</h2>
      <p>You are not authorized to view this page.</p>
      <Link to="/home">Go to Home</Link>
    </div>
  );
};

export default NotAuth;
