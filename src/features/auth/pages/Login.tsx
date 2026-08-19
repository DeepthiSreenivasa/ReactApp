import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const { setLogin } = useAuth();

  const checkLogin = (event: React.SubmitEvent) => {
    console.log(userName, password);
    event.preventDefault();
    const allowLogin = setLogin(userName, password);

    if (!allowLogin) {
      setLoginError(true);
      return;
    }
    setLoginError(false);
    navigate('/dashboard');
  };

  return (
    <>
      <form onSubmit={checkLogin}>
        <input
          type="text"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Login</button>

        {loginError && <div>Invalid UserName or Password</div>}
      </form>
    </>
  );
};

export default Login;
