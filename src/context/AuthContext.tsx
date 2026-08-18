import { createContext } from 'react';

const AuthContext = createContext({
  currentUser: {
    userName: '',
    role: '',
  },
  isAuthenticated: false,
  //setCurrentUserDetails: () => {},
});

export default AuthContext;
