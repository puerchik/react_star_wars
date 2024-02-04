import { useLocation } from 'react-router-dom';
import s from './PageNotFound.module.css';

const PageNotFound = () => {
  let location = useLocation();
  return (
    <>
      <div>
        <h1>404</h1>
        <p>Page not found</p>
        <p>No match for {location.pathname}</p>
      </div>
    </>
  );
};

export default PageNotFound;
