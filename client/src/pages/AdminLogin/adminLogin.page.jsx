import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';

import {
  AdminLoginContainer,
  AdminLoginForm,
  AdminLoginTitle,
  Input,
  Button,
} from './adminLogin.styles';
const AdminLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to handle admin login goes here
  };

  return (
    <AdminLoginContainer>
      <AdminLoginForm onSubmit={handleSubmit}>
        <AdminLoginTitle>Admin Login</AdminLoginTitle>
        <Input type='email' placeholder='Email' required />
        <Input type='password' placeholder='Password' required />
        <Button type='submit'>Log in</Button>
      </AdminLoginForm>
    </AdminLoginContainer>
  );
};

export default AdminLogin;
