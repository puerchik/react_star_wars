import { SWAPI_PEOPLE_QUERY, SWAPI_ROOT } from '../../constatnts/api';
import { NavPage } from '../../utils/network';

const initialState: NavPage = {
  next: SWAPI_ROOT + SWAPI_PEOPLE_QUERY + '2',
  previous: null,
};

export const navigationReducer = (state: NavPage = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SET-NAV-PAGE':
      return { ...state, next: action.payload.next, previous: action.payload.previous };
    default:
      return state;
  }
};

// actions

export const setNavPageAC = (next: string | null, previous: string | null) => {
  return {
    type: 'SET-NAV-PAGE',
    payload: {
      next,
      previous,
    },
  } as const;
};

// types
export type SetNavPageType = ReturnType<typeof setNavPageAC>;

type ActionsType = SetNavPageType;
