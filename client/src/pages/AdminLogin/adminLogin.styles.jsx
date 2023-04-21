import styled from 'styled-components';

export const AdminLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const AdminLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const AdminLoginTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  cursor: pointer;
`;

export const GoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3367d6;
  }
`;


