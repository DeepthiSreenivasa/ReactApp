import useAuth from '../../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouters = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet></Outlet>;
};

export default ProtectedRouters;
