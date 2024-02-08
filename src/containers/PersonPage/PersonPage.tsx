import { useLoaderData, useParams } from 'react-router-dom';
import s from './PersonPage.module.css';
import { ResultPeople, getApiResource } from '../../utils/network';
import { SWAPI_PEOPLE, SWAPI_ROOT } from '../../constatnts/api';
import WithErrorApi from '../../hoc-helpers/WithErrorApi';
import { useEffect } from 'react';
import { WithErrorApiProps } from '../PeoplePage/PeoplePage';

export const getPersonLoader = async ({ request }: { request: Request }) => {
  const movieHeroNumber = request.url.split('people/')[1];
  const res = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE + `${movieHeroNumber}/`);

  if (res) {
    return res;
  } else {
    return false;
  }
};

const PersonPage = ({ setError }: WithErrorApiProps) => {
  const res = useLoaderData() as ResultPeople;

  useEffect(() => {
    if (res) {
      setError(false);
    } else {
      setError(true);
    }
  }, [res]);

  return (
    <>
      <h1>{res.name}</h1>
    </>
  );
};

export default WithErrorApi(PersonPage);
