import { useState, type PropsWithChildren } from 'react';
import AuthContext from '../../context/AuthContext';

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState({
    userName: 'Jhon',
    role: 'TRADER',
  });

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
