import { useLocation } from 'react-router-dom';
import s from './PageNotFound.module.css';

const PageNotFound = () => {
  let location = useLocation();
  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.title}>404</h1>
        <p className={s.text}>Page not found</p>
        <p className={s.text}>No match for {location.pathname}</p>
      </div>
    </>
  );
};

export default PageNotFound;
