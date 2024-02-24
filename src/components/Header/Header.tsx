import Favorite from '../Favorite';
import { NavLink } from 'react-router-dom';
import { SWAPI_PEOPLE_QUERY } from '../../constatnts/api';
import { useDispatch, useSelector } from 'react-redux';
import { setPageAC } from '../../store/reducers/localStorageReducer';
import { AppRootStateType } from '../../store/reducers';
import { getLoacalStorage } from '../../utils/localStorage';
import s from './Header.module.css';

const Header = () => {
  const pageNumber = useSelector<AppRootStateType, string>(state => state.localStorage.page);
  const dispatch = useDispatch();

  // const setPageHandler = () => {
  //   let pageNumberFromLocalStorage;

  //   if (Object.keys(getLoacalStorage('navigation')).length !== 0) {
  //     pageNumberFromLocalStorage = String(
  //       getLoacalStorage('navigation') === null
  //         ? 9
  //         : getLoacalStorage('navigation').split('page=')[1] - 1,
  //     );
  //   } else {
  //     pageNumberFromLocalStorage = '1';
  //   }
  //   dispatch(setPageAC(pageNumberFromLocalStorage));
  // };
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
