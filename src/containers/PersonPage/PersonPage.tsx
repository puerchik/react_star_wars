import { useLoaderData, useParams } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import { PersonStateType, setPersonInfoAC } from '../../store/reducers/personReducer';
import { AppRootStateType } from '../../store/reducers';
import { addToFavoritesAC, removeFromFavoritesAC } from '../../store/reducers/favoriteReducer';

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
  const dispatch = useDispatch();
  const person = useSelector<AppRootStateType, PersonStateType>(state => state.person);
  const { id } = useParams();

  useEffect(() => {
    if (res) {
      dispatch(
        setPersonInfoAC(
          res.name,
          [
            { title: 'Height', data: res.height },
            { title: 'Mass', data: res.mass },
            { title: 'Hair color', data: res.hair_color },
            { title: 'Skin color', data: res.skin_color },
            { title: 'Eye color', data: res.eye_color },
            { title: 'Birth year', data: res.birth_year },
            { title: 'Gender', data: res.gender },
          ],
          films,
        ),
      );
      setError(false);
    } else {
      setError(true);
    }
  }, []);

  const addToFavorites = () => {
    dispatch(addToFavoritesAC(Number(id), res.name));
  };

  const removeFromFavorite = () => {
    dispatch(removeFromFavoritesAC(Number(id)));
  };

  return (
    <>
      <PersonLinkBack />
      <div className={s.wrapper}>
        <span className={s.person__name}>{person.personName}</span>
        <div className={s.container}>
          <PersonPhoto personName={person.personName} />
          <button onClick={addToFavorites}>Add to favorites</button>
          <button onClick={removeFromFavorite}>Remove from favorites</button>
          {person.personInfo && <PersonInfo personInfo={person.personInfo} />}
          <PersonFilms films={person.films} />
        </div>
      </div>
    </>
  );
};

export default WithErrorApi(PersonPage);
