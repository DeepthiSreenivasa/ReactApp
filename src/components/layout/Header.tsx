import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';

const Header = () => {
  const { currentUser, setLogout } = useAuth();
  const { theme, setTheme } = useTheme();

  const logout = () => {
    setLogout();
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
