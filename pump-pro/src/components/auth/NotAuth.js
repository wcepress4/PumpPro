// NotAuth.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotAuth = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div>
      <h2>Access Denied</h2>
      <p>You are not authorized to view this page.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default NotAuth;
