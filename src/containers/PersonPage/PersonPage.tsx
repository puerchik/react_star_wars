import { useLoaderData, useParams } from 'react-router-dom';
import s from './PersonPage.module.css';
import { ResultPeople, getApiResource } from '../../utils/network';
import { GUIDE_ROOT_IMG, SWAPI_PEOPLE, SWAPI_ROOT } from '../../constatnts/api';
import WithErrorApi from '../../hoc-helpers/WithErrorApi';
import { useEffect, useState } from 'react';
import { WithErrorApiProps } from '../PeoplePage/PeoplePage';

type PersonInfo = { title: string; data: string };

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
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState<PersonInfo[] | null>(null);
  const [personName, setPersonName] = useState<string | null>(null);

  useEffect(() => {
    if (res) {
      setPersonInfo([
        { title: 'height', data: res.height },
        { title: 'mass', data: res.mass },
        { title: 'hair_color', data: res.hair_color },
        { title: 'skin_color', data: res.skin_color },
        { title: 'eye_color', data: res.eye_color },
        { title: 'birth_year', data: res.birth_year },
        { title: 'gender', data: res.gender },
      ]);
      setPersonName(res.name);
      setError(false);
    } else {
      setError(true);
    }
  }, [res]);

  return (
    <>
      <h1>{personName}</h1>
      {personInfo && (
        <ul>
          {personInfo.map(
            ({ title, data }) =>
              data && (
                <li key={title}>
                  <span>
                    {title}: {data}
                  </span>
                </li>
              ),
          )}
        </ul>
      )}
      <img src={GUIDE_ROOT_IMG + id + '.jpg'} alt={personName || 'person'} />
    </>
  );
};

export default WithErrorApi(PersonPage);
