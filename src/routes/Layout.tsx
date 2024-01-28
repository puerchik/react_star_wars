import { Link, NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';
import CustomLink from '../components/CustomLink';

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
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/people">People</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
      </header>
      <Outlet />
      <footer>FOOTER</footer>
    </>
  );
};

export default Layout;
