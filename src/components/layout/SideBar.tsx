import { NavLink } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  const sideBarItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      id: 'markets',
      label: 'Markets',
      path: '/markets',
    },
    {
      id: 'watchlist',
      label: 'Watchlist',
      path: '/watchlist',
    },
  ];

  return (
    <>
      {sideBarItems.map((item) => (
        <div key={item.id}>
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? 'active' : '')} //--> You need not create a state ,rather re use this
          >
            {item.label}
          </NavLink>
        </div>
      ))}
    </>
  );
};

export default SideBar;
