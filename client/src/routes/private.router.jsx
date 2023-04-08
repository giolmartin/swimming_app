import React from 'react';
import {Navigate } from 'react-router-dom';

import { useUserContext } from '../context/user.context';

const PrivateRoute = ({ path, element }) => {
  const { isAuthenticated } = useUserContext();

  if (isAuthenticated) {
    return element;
  } else {
    return <Navigate to='/admin/login' />;
  }
};

export default PrivateRoute;
