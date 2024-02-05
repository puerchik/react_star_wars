import axios, { AxiosError } from 'axios';
import { SWAPI_ROOT } from '../constatnts/api';

const instance = axios.create({
  baseURL: SWAPI_ROOT,
});

export const getApiResource = async (endpoint: string) => {
  try {
    const res = await instance.get<Response>(endpoint);

    if (res.status !== 200) {
      console.log('Could not fetch. ', res.status);
      return false;
    }
    return res.data;
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      console.log('Could not fetch. ', e.response?.status);
      return false;
    }
  }
};

// types

export type Response = {
  count: number;
  next: null | string;
  previous: null | string;
  results: ResultPeople[];
};

type ResultPeople = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type ResultPeopleName = Pick<ResultPeople, 'name' | 'url'>;
