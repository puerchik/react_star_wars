import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavPage } from '../../utils/network';
import { AppRootStateType } from '../../store/reducers';
import { SWAPI_PEOPLE_QUERY, SWAPI_ROOT } from '../../constatnts/api';
import Favorite from '../Favorite';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import droid from './img/droid.png';
import lightsaber from './img/lightsaber.png';
import spaceStation from './img/spaceStation.png';
import s from './Header.module.css';

const Header = () => {
  const navigation = useSelector<AppRootStateType, NavPage>(state => state.navigation);
  const pageNumber =
    navigation.next === null
      ? '9'
      : String(Number(navigation.next?.split(SWAPI_ROOT + SWAPI_PEOPLE_QUERY)[1]) - 1);

  const theme = useContext(ThemeContext);
  const [logo, setLogo] = useState(droid);

  useEffect(() => {
    switch (theme.theme) {
      case 'neutral':
        setLogo(droid);
        break;
      case 'light':
        setLogo(lightsaber);
        break;
      case 'dark':
        setLogo(spaceStation);
        break;
      default:
        setLogo(droid);
        break;
    }
  }, [theme]);

  return (
    <header className={s.container}>
      <img className={s.logo} src={logo} alt="Star Wars" />
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
        <li>
          <NavLink to={'/search'}>Search</NavLink>
        </li>
        <li>
          <NavLink to={'/fail'}>Fail</NavLink>
        </li>
      </ul>
      <Favorite />
    </header>
  );
};

export default Header;
