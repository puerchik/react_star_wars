import { useLoaderData, useParams } from 'react-router-dom';
import s from './PersonPage.module.css';
import { ResultPeople, getApiResource } from '../../utils/network';
import { SWAPI_PEOPLE, SWAPI_ROOT } from '../../constatnts/api';

export const getPersonLoader = async ({ request }: { request: Request }) => {
  const movieHeroNumber = request.url.split('people/')[1];
  const res = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE + `${movieHeroNumber}/`);

  return res;
};

const PersonPage = () => {
  const res = useLoaderData() as ResultPeople;

  return (
    <>
      <h1>{res.name}</h1>
    </>
  );
};

export default PersonPage;
