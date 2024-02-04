import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.container}>
      <ul className={s.list__container}>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/people'}>People</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
