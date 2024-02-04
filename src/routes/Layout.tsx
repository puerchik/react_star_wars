import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
