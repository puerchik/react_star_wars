import { useLoaderData } from 'react-router-dom';
import s from './PersonPage.module.css';
import { FilmType, ResultPeople, getApiFilms, getApiPeople } from '../../utils/network';
import { SWAPI_PEOPLE, SWAPI_ROOT } from '../../constatnts/api';
import WithErrorApi from '../../hoc-helpers/WithErrorApi';
import { useEffect, useState } from 'react';
import { WithErrorApiProps } from '../PeoplePage/PeoplePage';
import PersonInfo from '../../components/PersonPage/PersonInfo';
import PersonPhoto from '../../components/PersonPage/PersonPhoto';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack';
import PersonFilms from '../../components/PersonPage/PersonFilms';

export type PersonInfoType = { title: string; data: string };
export type ResponsePeopleFilms = { res: ResultPeople; films: FilmType[] };

export const getPersonLoader = async ({ request }: { request: Request }) => {
  const movieHeroNumber = request.url.split('people/')[1];
  const res: ResultPeople = await getApiPeople(SWAPI_ROOT + SWAPI_PEOPLE + `${movieHeroNumber}/`);
  const films = await Promise.all(res.films.map(film => getApiFilms(film)));

  if (res) {
    return { res, films };
  } else {
    return false;
  }
};

const PersonPage = ({ setError }: WithErrorApiProps) => {
  const { res, films } = useLoaderData() as ResponsePeopleFilms;
  const [personInfo, setPersonInfo] = useState<PersonInfoType[] | null>(null);
  const [personName, setPersonName] = useState<string | null>(null);

  useEffect(() => {
    if (res) {
      setPersonInfo([
        { title: 'Height', data: res.height },
        { title: 'Mass', data: res.mass },
        { title: 'Hair color', data: res.hair_color },
        { title: 'Skin color', data: res.skin_color },
        { title: 'Eye color', data: res.eye_color },
        { title: 'Birth year', data: res.birth_year },
        { title: 'Gender', data: res.gender },
      ]);
      setPersonName(res.name);
      setError(false);
    } else {
      setError(true);
    }
  }, [res]);

  return (
    <>
      <PersonLinkBack />
      <div className={s.wrapper}>
        <span className={s.person__name}>{personName}</span>
        <div className={s.container}>
          <PersonPhoto personName={personName} />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          <PersonFilms films={films} />
        </div>
      </div>
    </>
  );
};

export default WithErrorApi(PersonPage);
