import PeopleList from '../../components/PeoplePage/PeopleList';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Response, ResultPeopleName, getApiResource } from '../../utils/network';
import { SWAPI_PEOPLE_QUERY } from '../../constatnts/api';
import { WithErrorApi } from '../../hoc-helpers/WithErrorApi';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation';
import { useDispatch } from 'react-redux';

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
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const page = searchParams.get('page');

  const res = useLoaderData() as { res: Response; peopleList: ResultPeopleName[] };
  const dispatch = useDispatch();

  useEffect(() => {
    if (res) {
      setPrevPage(res.res.previous);
      setNextPage(res.res.next);
      setError(false);
    } else {
      setError(true);
    }
  }, [res]);

  return (
    <>
      <PeopleNavigation prevPage={prevPage} nextPage={nextPage} page={Number(page)} />
      {res.peopleList && <PeopleList people={res.peopleList} />}
    </>
  );
};

export default WithErrorApi(PeoplePage);
