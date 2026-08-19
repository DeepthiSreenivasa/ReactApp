import { useState, type PropsWithChildren } from 'react';
import AuthContext from '../../context/AuthContext';

const MOCK_USER = {
  userName: 'Jhon',
  role: 'TRADER',
  email: 'Jhon@xyz.com',
  password: 'TRADER',
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState({
    userName: '',
    role: '',
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userName: string, password: string): boolean => {
    if (userName === MOCK_USER.email && password === MOCK_USER.password) {
      setCurrentUser({
        userName: MOCK_USER.userName,
        role: MOCK_USER.role,
      });

      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser({
      userName: '',
      role: '',
    });

    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        isAuthenticated: isAuthenticated,
        setLogin: login,
        setLogout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
