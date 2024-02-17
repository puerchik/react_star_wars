import { useParams } from 'react-router-dom';
import { GUIDE_ROOT_IMG } from '../../../constatnts/api';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/reducers';
import {
  FavoriteStateType,
  addToFavoritesAC,
  removeFromFavoritesAC,
} from '../../../store/reducers/favoriteReducer';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';
import s from './PersonPhoto.module.css';

const PersonPhoto = ({ personName }: { personName: string | null }) => {
  const favorite = useSelector<AppRootStateType, FavoriteStateType>(state => state.favorites);
  const dispatch = useDispatch();
  const { id } = useParams();

  const dispatchFavoritesPeople = () => {
    if (favorite[Number(id)]) {
      dispatch(removeFromFavoritesAC(Number(id)));
    } else {
      dispatch(addToFavoritesAC(Number(id), personName ? personName : 'personName'));
    }
  };

  return (
    <>
      <div className={s.container}>
        <img className={s.photo} src={GUIDE_ROOT_IMG + id + '.jpg'} alt={personName || 'person'} />
        <img
          src={favorite[Number(id)] ? iconFavoriteFill : iconFavorite}
          className={s.favorite}
          onClick={dispatchFavoritesPeople}
          alt="Add to favorites"
        />
      </div>
    </>
  );
};

export default PersonPhoto;
