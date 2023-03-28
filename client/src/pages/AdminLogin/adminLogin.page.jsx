import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const { setLogIn, setIsAuthenticated } = useUserContext();
  const navigate = useNavigate();

  //   const handleGoogleLogin = async () => {
  //     try {
  //       const response = await fetch('/auth/google'); // Or any other method to authenticate with Google
  //       if (response.ok) {
  //         setIsAuthenticated(true);
  //         // Redirect to the dashboard
  //       } else {
  //         // Handle login error
  //       }
  //     } catch (error) {
  //       console.error('Error during login:', error);
  //     }
  //   };

  //   const handleGoogleLogin = () => {
  //     window.location.href = '/auth/google';
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Logic to handle admin login (TODO: Replace with actual logic)
    const isAuntehticated = true;

    if (isAuntehticated) {
      setIsAuthenticated(true);
      navigate('/admin/dashboard');
    } else {
      alert('Invalid Username or Password');
    }
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
      {/* <GoogleLoginButton onClick={handleGoogleLogin}>
        Login with Google
      </GoogleLoginButton> */}
    </AdminLoginContainer>
  );
};

export default AdminLogin;
