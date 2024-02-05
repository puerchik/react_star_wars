import PeopleList from '../../components/PeoplePage/PeopleList';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ResultPeopleName, getApiResource } from '../../utils/network';
import { SWAPI_PEOPLE_QUERY } from '../../constatnts/api';
import { WithErrorApi } from '../../hoc-helpers/WithErrorApi';
import { useSearchParams } from 'react-router-dom';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation';

export type PeoplePageProps = {
  setError: Dispatch<SetStateAction<boolean>>;
};

const PeoplePage = ({ setError }: PeoplePageProps) => {
  const [people, setPeople] = useState<null | ResultPeopleName[]>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  console.log(page);

  const getResource = async (url: string) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        return {
          name,
          url,
        };
      });
      setPeople(peopleList);
      setError(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    getResource(SWAPI_PEOPLE_QUERY + page);
  }, [page]);

  return (
    <>
      <PeopleNavigation page={Number(page)} />
      {people && <PeopleList people={people} />}
    </>
  );
};

export default WithErrorApi(PeoplePage);
