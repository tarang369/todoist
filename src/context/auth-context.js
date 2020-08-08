import React, { createContext, useContext } from 'react';

import { useUser } from '../hooks';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const { currentUser, setCurrentUser } = useUser();
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useUserValue = () => useContext(AuthContext);
