import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { currentUser } = useAuth();

  return <h1>Welcome {currentUser.userName}</h1>;
};

export default Header;
