import axios from 'axios';
import { SWAPI_ROOT } from '../constatnts/api';
import { checkResultCatch, checkResultTry } from './checkResult';

export const instance = axios.create({
  baseURL: SWAPI_ROOT,
});

export const getApiResource = async (endpoint: string) => {
  try {
    const res = await instance.get<Response>(endpoint);

    return checkResultTry(res);
  } catch (e: unknown) {
    return checkResultCatch(e);
  }
};

export const getApiPeople = async (endpoint: string) => {
  try {
    const res = await instance.get<ResultPeople>(endpoint);

    return checkResultTry(res);
  } catch (e: unknown) {
    return checkResultCatch(e);
  }
};

export const getApiFilms = async (endpoint: string) => {
  try {
    const res = await instance.get<FilmType[]>(endpoint);

    return checkResultTry(res);
  } catch (e: unknown) {
    return checkResultCatch(e);
  }
};

// types

export type Response = {
  count: number;
  next: null | string;
  previous: null | string;
  results: ResultPeople[];
};

export type ResultPeople = {
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

export type FilmType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export type ResultPerson = Omit<
  ResultPeople,
  'homeworld' | 'species' | 'vehicles' | 'starships' | 'created' | 'edited' | 'url'
>;

export type ResultPeopleName = Pick<ResultPeople, 'name' | 'url'>;

export type NavPage = Pick<Response, 'next' | 'previous'>;
