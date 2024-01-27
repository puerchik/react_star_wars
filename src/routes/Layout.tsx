import { Link, NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';

type SetActiveType = {
  isActive: boolean;
};

const setActive = ({ isActive }: SetActiveType) => {
  return { color: isActive ? 'var(--color-yellow)' : 'var(--color-white)' };
};

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" style={setActive}>
          Home
        </NavLink>
        <NavLink to="/people" style={setActive}>
          People
        </NavLink>
      </header>
      <Outlet />
      <footer>FOOTER</footer>
    </>
  );
};

export default Layout;
