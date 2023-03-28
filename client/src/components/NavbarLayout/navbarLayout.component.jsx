import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminNavbar from '../Admin/AdminNavbar/adminNavbar.component';
import Navbar from '../Navbar/navbar.component';

const NavbarLayout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes('/admin/dashboard') ? (
        <AdminNavbar />
      ) : (
        <Navbar />
      )}
      {children}
    </>
  );
};
export default NavbarLayout;
