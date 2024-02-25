import Favorite from '../Favorite';
import { NavLink } from 'react-router-dom';
import { SWAPI_PEOPLE_QUERY } from '../../constatnts/api';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.container}>
      <ul className={s.list__container}>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`/${SWAPI_PEOPLE_QUERY}${1}`}>People</NavLink>
        </li>
        <li>
          <NavLink to={'/not-found'}>Not Found</NavLink>
        </li>
      </ul>
      <Favorite />
    </header>
  );
};

export default Header;
