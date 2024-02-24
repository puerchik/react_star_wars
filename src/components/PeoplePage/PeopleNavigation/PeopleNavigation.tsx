import { Link } from 'react-router-dom';
import s from './PeopleNavigation.module.css';
import { SWAPI_QUERY } from '../../../constatnts/api';
import { getLoacalStorage, setLoacalStorage } from '../../../utils/localStorage';
import { useDispatch } from 'react-redux';
import { setPageAC } from '../../../store/reducers/localStorageReducer';

type Props = {
  prevPage: string | null;
  nextPage: string | null;
  page: number;
};

const PeopleNavigation = ({ prevPage, nextPage, page }: Props) => {
  const dispatch = useDispatch();

  const setPageHandler = () => {
    let pageNumberFromLocalStorage;

    if (Object.keys(getLoacalStorage('navigation')).length !== 0) {
      pageNumberFromLocalStorage = String(
        getLoacalStorage('navigation') === null
          ? 9
          : getLoacalStorage('navigation').split('page=')[1],
      );
    } else {
      pageNumberFromLocalStorage = '1';
    }
    dispatch(setPageAC(pageNumberFromLocalStorage));
  };

  return (
    <div className={s.wrapper}>
      <Link to={SWAPI_QUERY + (page - 1).toString()}>
        <button onClick={setPageHandler} disabled={!prevPage}>
          Prev
        </button>
      </Link>
      <Link to={SWAPI_QUERY + (page + 1).toString()}>
        <button onClick={setPageHandler} disabled={!nextPage}>
          Next
        </button>
      </Link>
    </div>
  );
};

export default PeopleNavigation;
