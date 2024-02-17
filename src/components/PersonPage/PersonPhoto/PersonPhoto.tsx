import { useParams } from 'react-router-dom';
import { GUIDE_ROOT_IMG } from '../../../constatnts/api';
import s from './PersonPhoto.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/reducers';
import {
  FavoriteStateType,
  addToFavoritesAC,
  removeFromFavoritesAC,
} from '../../../store/reducers/favoriteReducer';

const PersonPhoto = ({ personName }: { personName: string | null }) => {
  const favorite = useSelector<AppRootStateType, FavoriteStateType>(state => state.favorite);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(favorite);

  const addToFavorites = () => {
    dispatch(addToFavoritesAC(Number(id), personName ? personName : 'personName'));
  };

  const removeFromFavorite = () => {
    dispatch(removeFromFavoritesAC(Number(id)));
  };

  return (
    <div className={s.container}>
      <img className={s.photo} src={GUIDE_ROOT_IMG + id + '.jpg'} alt={personName || 'person'} />
      {favorite[Number(id)] ? (
        <button onClick={removeFromFavorite}>Remove from favorites</button>
      ) : (
        <button onClick={addToFavorites}>Add to favorites</button>
      )}
    </div>
  );
};

export default PersonPhoto;
