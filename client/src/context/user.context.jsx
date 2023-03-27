import { createContext, useContext, useState } from 'react';

const UserContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const client = {
    name: 'admin',
    password: 'admin',
  };

  const setLogIn = (name, pas) => {
    if (name === client.name && pas === client.password) setIsLoggedIn(true);
  };

  const value = {
    isLoggedIn,
    setLogIn,
    setIsLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
