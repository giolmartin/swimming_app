import { createContext, useContext, useState } from 'react';

const UserContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const client = {
    name: 'admin',
    password: 'admin',
  };

  const setLogIn = (name, pas) => {
    if (name === client.name && pas === client.password)
      setIsAuthenticated(true);
  };

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    setLogIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
