import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const PublicRoute = ({ children }) => {
  const isLoggedIn = AuthService.isLoggedIn();
  
  return !isLoggedIn ? children : <Navigate to="/" />;
};

export default PublicRoute;
