import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminNavbarContainer, NavbarItem } from './adminNavbar.styles';

const AdminNavbar = () => {
  return (
    <div>
      <AdminNavbarContainer>
        <NavbarItem to='/admin/dashboard'>Dashboard</NavbarItem>
        <NavbarItem to='/admin/dashboard/posts'>Posts</NavbarItem>
        <NavbarItem to='/admin/dashboard/categories'>Categories</NavbarItem>
        <NavbarItem to='/admin/dashboard/users'>Users</NavbarItem>
        <NavbarItem to='/admin/dashboard/settings'>Settings</NavbarItem>
      </AdminNavbarContainer>
      <Outlet />
    </div>
  );
};

export default AdminNavbar;
