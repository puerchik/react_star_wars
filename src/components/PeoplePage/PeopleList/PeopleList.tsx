import { Link } from 'react-router-dom';
import { GUIDE_ROOT_IMG } from '../../../constatnts/api';
import { getPeopleId } from '../../../services/getPeopleData';
import { getUrlId } from '../../../utils/getId';
import s from './PeopleList.module.css';

type Props = {
  people: {
    name: string;
    url?: string;
    id?: string;
  }[];
};

const PeopleList = ({ people }: Props) => {
  return (
    <ul className={s.list__container}>
      {people.map(({ name, url, id }) => {
        let urlId;
        if (url) {
          urlId = getUrlId(url, 'https://swapi.dev/api/people/');
        }
        return (
          <li className={s.list__item} key={name}>
            <Link to={url ? `${urlId}` : `${`../people/${id}`}`}>
              <img
                className={s.person__photo}
                src={GUIDE_ROOT_IMG + (url ? getPeopleId(url) : id) + '.jpg'}
                alt={name}
              />
              <p>{name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PeopleList;
