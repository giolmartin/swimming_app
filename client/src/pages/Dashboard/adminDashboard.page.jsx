import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';
import { AdminDashboardContainer } from './adminDashboard.styles';
const AdminDashboard = () => {
  const { isLoggedIn } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/admin-login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <AdminDashboardContainer>
      <h1>Admin Dashboard</h1>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
