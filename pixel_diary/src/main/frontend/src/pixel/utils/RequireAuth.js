// export const isLogin = () => !!localStorage.getItem('Token');


import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isLogin =  !!localStorage.getItem('jwtToken');
  const location = useLocation();

  if (!isLogin) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;