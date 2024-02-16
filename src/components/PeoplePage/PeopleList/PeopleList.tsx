import { Link } from 'react-router-dom';
import { GUIDE_ROOT_IMG, SWAPI_PEOPLE, SWAPI_ROOT } from '../../../constatnts/api';
import { getPeopleId } from '../../../services/getPeopleData';
import { ResultPeopleName } from '../../../utils/network';
import s from './PeopleList.module.css';
import { getUrlId } from '../../../utils/getId';

type Props = {
  people: ResultPeopleName[];
};

const PeopleList = ({ people }: Props) => {
  return (
    <ul className={s.list__container}>
      {people.map(({ name, url }) => {
        const id = getUrlId(url, 'https://swapi.dev/api/people/');

        return (
          <li className={s.list__item} key={name}>
            <Link to={`${id}`}>
              <img
                className={s.person__photo}
                src={GUIDE_ROOT_IMG + getPeopleId(url) + '.jpg'}
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
