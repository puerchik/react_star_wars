import Favorite from '../Favorite';
import { NavLink } from 'react-router-dom';
import { SWAPI_PEOPLE_QUERY, SWAPI_ROOT } from '../../constatnts/api';
import s from './Header.module.css';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../store/reducers';
import { NavPage } from '../../utils/network';

const Header = () => {
  const navigation = useSelector<AppRootStateType, NavPage>(state => state.navigation);
  const pageNumber =
    navigation.next === null
      ? '9'
      : String(Number(navigation.next?.split(SWAPI_ROOT + SWAPI_PEOPLE_QUERY)[1]) - 1);

  return (
    <header className={s.container}>
      <ul className={s.list__container}>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`/${SWAPI_PEOPLE_QUERY}${pageNumber}`}>People</NavLink>
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
