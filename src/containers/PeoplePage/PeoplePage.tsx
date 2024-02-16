import PeopleList from '../../components/PeoplePage/PeopleList';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NavPage, Response, ResultPeopleName, getApiResource } from '../../utils/network';
import { SWAPI_PEOPLE_QUERY } from '../../constatnts/api';
import { WithErrorApi } from '../../hoc-helpers/WithErrorApi';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { SetNavPageType, setNavPageAC } from '../../store/reducers/navigationReducer';
import { AppRootStateType } from '../../store/reducers';
import { setPeopleAC } from '../../store/reducers/peopleReducer';

export type WithErrorApiProps = {
  setError: Dispatch<SetStateAction<boolean>>;
};

export const getResourceLoader = async ({ request }: { request: Request }) => {
  const pageNumber = request.url.split('page=')[1];
  const res: Response = await getApiResource(SWAPI_PEOPLE_QUERY + pageNumber);

  if (res) {
    const peopleList = res.results.map(({ name, url }) => {
      return {
        name,
        url,
      };
    });
    return { res, peopleList };
  } else {
    return false;
  }
};

const PeoplePage = ({ setError }: WithErrorApiProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  const res = useLoaderData() as { res: Response; peopleList: ResultPeopleName[] };
  const nav = useSelector<AppRootStateType, NavPage>(state => state.navigation);
  const people = useSelector<AppRootStateType, ResultPeopleName[]>(state => state.people);
  const dispatch = useDispatch();

  useEffect(() => {
    if (res) {
      dispatch(setNavPageAC(res.res.next, res.res.previous));
      dispatch(setPeopleAC(res.peopleList));
      setError(false);
    } else {
      setError(true);
    }
  }, [res]);

  return (
    <>
      <PeopleNavigation prevPage={nav.previous} nextPage={nav.next} page={Number(page)} />
      {res.peopleList && <PeopleList people={people} />}
    </>
  );
};

export default WithErrorApi(PeoplePage);
