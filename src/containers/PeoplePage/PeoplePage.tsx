import PeopleList from '../../components/PeoplePage/PeopleList';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Response, ResultPeopleName, getApiResource } from '../../utils/network';
import { SWAPI_PEOPLE_QUERY } from '../../constatnts/api';
import { WithErrorApi } from '../../hoc-helpers/WithErrorApi';
import { Params, useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation';
import { error } from 'console';

export type PeoplePageProps = {
  setError: Dispatch<SetStateAction<boolean>>;
};

export const getResourceLoader = async ({ request }: { request: Request }) => {
  const res = await getApiResource(SWAPI_PEOPLE_QUERY + request.url.slice(-1));
  if (res) {
    const peopleList = res.results.map(({ name, url }) => {
      return {
        name,
        url,
      };
    });
    return { res, peopleList };
  } else {
    return {
      error: true,
    };
  }

  return res;
};

const PeoplePage = ({ setError }: PeoplePageProps) => {
  const [people, setPeople] = useState<null | ResultPeopleName[]>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const page = searchParams.get('page');

  const res = useLoaderData() as { res: Response; peopleList: ResultPeopleName };
  console.log(res);

  // if (res) {
  //   const peopleList = res.results.map(({ name, url }) => {
  //     return {
  //       name,
  //       url,
  //     };
  //   });
  //   setPeople(peopleList);
  //   setPrevPage(res.previous);
  //   setNextPage(res.next);
  //   setError(false);
  // } else {
  //   setError(true);
  // }

  return (
    <>
      <PeopleNavigation prevPage={prevPage} nextPage={nextPage} page={Number(page)} />
      {people && <PeopleList people={people} />}
    </>
  );
};

export default WithErrorApi(PeoplePage);
