import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';

const Header = () => {
  const { currentUser } = useAuth();
  const { theme, setTheme } = useTheme();
  const { setLogout } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setLogout();
    navigate('/login');
  };

  return (
    <>
      <h1>Welcome {currentUser.userName}</h1>
      <h1>This is App Theme {theme}</h1>
      <button onClick={setTheme}>ToggleTheme</button>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Header;
