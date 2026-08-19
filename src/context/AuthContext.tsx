import { createContext } from 'react';

const AuthContext = createContext({
  currentUser: {
    userName: '',
    role: '',
  },
  isAuthenticated: false,
  // login: async (): Promise<boolean> => false,
  setLogin: (): boolean => false,
  setLogout: () => {},
});

export default AuthContext;
