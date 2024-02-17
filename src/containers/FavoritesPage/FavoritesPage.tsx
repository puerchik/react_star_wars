import { useSelector } from 'react-redux';
import s from './FavoritesPage.module.css';
import { AppRootStateType } from '../../store/reducers';
import { FavoriteStateType } from '../../store/reducers/favoriteReducer';
import { toPairs } from 'lodash';
import { Link } from 'react-router-dom';
import { GUIDE_ROOT_IMG } from '../../constatnts/api';
import PeopleList from '../../components/PeoplePage/PeopleList';

const FavoritesPage = () => {
  const favorites = useSelector<AppRootStateType, FavoriteStateType>(state => state.favorites);
  const favoritesPeople = toPairs(favorites).map(el => ({ name: el[1], id: el[0] }));

  return (
    <>
      <PeopleList people={favoritesPeople} />
    </>
  );
};

export default FavoritesPage;
