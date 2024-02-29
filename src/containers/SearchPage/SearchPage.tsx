import { ChangeEvent, useState } from 'react';
import { WithErrorApiProps } from '../PeoplePage/PeoplePage';
import { ResultPeopleName, getApiResource, Response } from '../../utils/network';
import WithErrorApi from '../../hoc-helpers/WithErrorApi';
import { SWAPI_PEOPLE_SEARCH } from '../../constatnts/api';
import s from './SearchPage.module.css';
import PeopleList from '../../components/PeoplePage/PeopleList';

const SearchPage = ({ setError }: WithErrorApiProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [peopleList, setPeopleList] = useState<ResultPeopleName[]>([]);

  const getResponse = async (param: string) => {
    const res: Response = await getApiResource(SWAPI_PEOPLE_SEARCH + param);
    if (res) {
      const people = res.results.map(el => {
        return {
          name: el.name,
          url: el.url,
        };
      });
      setPeopleList(people);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSearchPeople = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearchValue(value);
    if (value !== '') {
      getResponse(value);
    }
  };

  return (
    <>
      <h1 className={s.header__text}>Search</h1>
      <input
        onChange={handleSearchPeople}
        value={searchValue}
        type="text"
        placeholder="Input character's name"
      />
      {peopleList.length === 0 ? <h2>No results</h2> : <PeopleList people={peopleList} />}
    </>
  );
};

export default WithErrorApi(SearchPage);
