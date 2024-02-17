import { useSelector } from 'react-redux';
import s from './FavoritesPage.module.css';
import { AppRootStateType } from '../../store/reducers';
import { FavoriteStateType } from '../../store/reducers/favoriteReducer';
import { toPairs } from 'lodash';
import { Link } from 'react-router-dom';
import { GUIDE_ROOT_IMG } from '../../constatnts/api';

const FavoritesPage = () => {
  const favorites = useSelector<AppRootStateType, FavoriteStateType>(state => state.favorites);

  return (
    <ul className={s.list__container}>
      {toPairs(favorites).map(el => {
        return (
          <li className={s.list__item} key={el[0]}>
            <Link to={`../people/${el[0]}`}>
              <img className={s.person__photo} src={GUIDE_ROOT_IMG + el[0] + '.jpg'} alt={el[1]} />
              <p>{el[1]}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FavoritesPage;
