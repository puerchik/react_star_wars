import { Link } from 'react-router-dom';
import s from './PeopleNavigation.module.css';
import { SWAPI_QUERY } from '../../../constatnts/api';

type Props = {
  prevPage: string | null;
  nextPage: string | null;
  page: number;
};

const PeopleNavigation = ({ prevPage, nextPage, page }: Props) => {
  return (
    <div className={s.wrapper}>
      <Link to={SWAPI_QUERY + (page - 1).toString()}>
        <button disabled={!prevPage}>Prev</button>
      </Link>
      <Link to={SWAPI_QUERY + (page + 1).toString()}>
        <button disabled={!nextPage}>Next</button>
      </Link>
    </div>
  );
};

export default PeopleNavigation;
