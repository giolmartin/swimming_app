import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [token, setToken] = useState(null);

  const setLogIn = (token) => {
    if (token) {
      setToken(token);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    setLogIn(token);
  }, []);
  
  useEffect(() => {
    console.log(` Context isAuthenticated: ${isAuthenticated}`);
  }, [isAuthenticated]);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    setLogIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
