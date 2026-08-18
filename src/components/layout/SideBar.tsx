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
    <div className="sidebar-list">
      {sideBarItems.map((item) => (
        <div key={item.id} className="sidebar-item">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
