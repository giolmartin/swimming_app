import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useUserContext } from '../context/user.context';

const PrivateRoute = ({ path, element }) => {
  const { isAuthenticated } = useUserContext();

  if (isAuthenticated === null) {
    return null; // or a loading component
  }
  console.log('is Authenticated', isAuthenticated);
  if (isAuthenticated) {
    return <>{element}</>;
  } else {
    return <Navigate to='/admin/login' />;
  }
};

export default PrivateRoute;
