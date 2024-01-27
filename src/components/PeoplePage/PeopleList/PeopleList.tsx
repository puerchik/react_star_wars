import { GUIDE_ROOT_IMG } from '../../../constatnts/api';
import { getPeopleId } from '../../../services/getPeopleData';
import { ResultPeopleName } from '../../../utils/network';
import s from './PeopleList.module.css';

type Props = {
  people: ResultPeopleName[];
};

const PeopleList = ({ people }: Props) => {
  return (
    <ul className={s.list__container}>
      {people.map(({ name, url }) => (
        <li className={s.list__item} key={name}>
          <a href="#">
            <img
              className={s.person__photo}
              src={GUIDE_ROOT_IMG + getPeopleId(url) + '.jpg'}
              alt={name}
            />
            <p>{name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
