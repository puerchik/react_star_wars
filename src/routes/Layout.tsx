import { Link, NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';

type SetActiveType = {
  isActive: boolean;
};

const setActive = ({ isActive }: SetActiveType) => (isActive ? 'active-link' : '');

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/people" className={setActive}>
          People
        </NavLink>
      </header>
      <Outlet />
      <footer>FOOTER</footer>
    </>
  );
};

export default Layout;
