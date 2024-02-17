import { Link } from 'react-router-dom';
import favoritesImg from './img/favorites-star.svg';
import s from './Favorite.module.css';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../store/reducers';
import { FavoriteStateType } from '../../store/reducers/favoriteReducer';

const Favorite = () => {
  const favorites = useSelector<AppRootStateType, FavoriteStateType>(state => state.favorites);
  const counter = Object.keys(favorites).length;

  return (
    <div className={s.container}>
      <Link to={'/favorites'}>
        <span className={s.counter}>{counter}</span>
        <img className={s.icon} src={favoritesImg} alt="Favorites" />
      </Link>
    </div>
  );
};

export default Favorite;
