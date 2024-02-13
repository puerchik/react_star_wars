import { FilmType } from '../../../utils/network';
import s from './PersonFilms.module.css';

const PersonFilms = ({ films }: { films: FilmType[] }) => {
  return (
    <ul>
      {films
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => (
          <li key={film.episode_id}>
            <span>Episode {film.episode_id}</span>
            <span>: </span>
            <span>{film.title}</span>
          </li>
        ))}
    </ul>
  );
};

export default PersonFilms;
