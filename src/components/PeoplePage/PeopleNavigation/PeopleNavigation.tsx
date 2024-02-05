import { Link } from 'react-router-dom';
import s from './PeopleNavigation.module.css';
import { SWAPI_QUERY } from '../../../constatnts/api';

type Props = {
  page: number;
};

const PeopleNavigation = ({ page }: Props) => {
  return (
    <div className={s.wrapper}>
      <Link to={SWAPI_QUERY + (page - 1).toString()}>Prev</Link>
      <Link to={SWAPI_QUERY + (page + 1).toString()}>Next</Link>
    </div>
  );
};

export default PeopleNavigation;
