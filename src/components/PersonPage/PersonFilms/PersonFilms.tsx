import { FilmType } from '../../../utils/network';
import s from './PersonFilms.module.css';

const PersonFilms = ({ films }: { films: FilmType[] }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list__container}>
        {films
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(film => (
            <li className={s.list__item} key={film.episode_id}>
              <span className={s.item__episode}>Episode {film.episode_id}</span>
              <span className={s.item__colon}>: </span>
              <span className={s.item__title}>{film.title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PersonFilms;
