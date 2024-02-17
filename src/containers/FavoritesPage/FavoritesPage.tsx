import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../store/reducers';
import { FavoriteStateType } from '../../store/reducers/favoriteReducer';
import { toPairs } from 'lodash';
import PeopleList from '../../components/PeoplePage/PeopleList';
import s from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const favorites = useSelector<AppRootStateType, FavoriteStateType>(state => state.favorites);
  const favoritesPeople = toPairs(favorites).map(el => ({ name: el[1], id: el[0] }));

  return (
    <>
      <h1 className="header__text">Favorites</h1>
      {favoritesPeople.length ? (
        <PeopleList people={favoritesPeople} />
      ) : (
        <h2 className={s.comment}>No data.</h2>
      )}
    </>
  );
};

export default FavoritesPage;
