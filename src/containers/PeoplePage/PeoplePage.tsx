import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ResultPeopleName, getApiResource } from '../../utils/network';
import { SWAPI_PEOPLE } from '../../constatnts/api';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { WithErrorApi } from '../../hoc-helpers/WithErrorApi';

export type PeoplePageProps = {
  setError: Dispatch<SetStateAction<boolean>>;
};

const PeoplePage = ({ setError }: PeoplePageProps) => {
  const [people, setPeople] = useState<null | ResultPeopleName[]>(null);

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
    getResource(SWAPI_PEOPLE);
  }, []);

  return <>{people && <PeopleList people={people} />}</>;
};

export default WithErrorApi(PeoplePage);
