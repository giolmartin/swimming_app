import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';
import AdminContent from '../../components/Admin/AdminContent/adminContent.component';
import AdminNavbar from '../../components/Admin/AdminNavbar/adminNavbar.component';
const AdminDashboard = () => {
  const { isAuthenticated } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  return <AdminContent />;
};

export default AdminDashboard;
