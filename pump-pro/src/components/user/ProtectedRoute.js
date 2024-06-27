// ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';

const ProtectedRoute = ({ children, roles }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuthorization = async () => {
      const isLoggedIn = AuthService.isLoggedIn();
      const currentUser = AuthService.getCurrentUser();
      
      if (!isLoggedIn) {
        setIsAuthorized(false);
      } else if (roles && roles.length > 0 && !roles.includes(currentUser.role)) {
        setIsAuthorized(false);
      } else {
        setIsAuthorized(true);
      }
      setLoading(false);
    };

    checkAuthorization();
  }, [roles]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
