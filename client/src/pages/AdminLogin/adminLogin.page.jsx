import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';

import {
  AdminLoginContainer,
  AdminLoginForm,
  AdminLoginTitle,
  Input,
  Button,
  GoogleLoginButton,
} from './adminLogin.styles';
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const unauthorized = params.get('error');

  const handleSubmit = (e) => {
  // e.preventDefault();
  //Logic to handle admin login (TODO: Replace with actual logic)
  // const isAuntehticated = true;

  // if (isAuntehticated) {
  //   navigate('/admin/dashboard');
  // } else {
  //   alert('Invalid Username or Password');
  // }
  };

  const handleGoogleLogin = async () => {
    window.location.href = '/auth/google';
  };

  return (
    <AdminLoginContainer>
      <AdminLoginForm onSubmit={handleSubmit}>
        <AdminLoginTitle>Admin Login</AdminLoginTitle>
        <Input
          type='text'
          id='username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder='Username or Email'
          //   required
        />
        <Input
          type='password'
          id='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='Password'
          //  required
        />
        <Button type='submit'>Log in</Button>
      </AdminLoginForm>
      <GoogleLoginButton onClick={handleGoogleLogin}>
        <img
          src='./google-logo.svg'
          alt='Google logo'
          style={{ marginRight: '8px', width: '20px', height: '20px' }}
        />
        Login with Google
      </GoogleLoginButton>
      {unauthorized === 'unauthorized' && (
        <p>
          You are not authorized to access this area. Please contact the
          administrator if you believe this is a mistake.
        </p>
      )}
    </AdminLoginContainer>
  );
};

export default AdminLogin;
