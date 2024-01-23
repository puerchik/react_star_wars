import { SWAPI_ROOT, SWAPI_PEOPLE } from "./../constatnts/api";

export const getId = (url: string, category: string) =>
    url.replace(SWAPI_ROOT + category, "");
export const getPeopleId = (url: string) => getId(url, SWAPI_PEOPLE).replace(/\//g, "");
