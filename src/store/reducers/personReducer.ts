import { PersonInfoType } from '../../containers/PersonPage/PersonPage';
import { FilmType } from '../../utils/network';

const initialState: PersonStateType = {
  personName: null,
  personInfo: null,
  films: null,
};

export const personReducer = (state: PersonStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SET-PERSON':
      return {
        ...state,
        personName: action.payload.personName,
        personInfo: action.payload.personInfo,
        films: action.payload.films,
      };
    default:
      return state;
  }
};

// actions

export const setPersonInfoAC = (
  personName: string,
  personInfo: PersonInfoType[],
  films: FilmType[],
) => {
  return {
    type: 'SET-PERSON',
    payload: {
      personName,
      personInfo,
      films,
    },
  } as const;
};

// types

export type PersonStateType = {
  personName: string | null;
  personInfo: PersonInfoType[] | null;
  films: FilmType[] | null;
};

type SetPersonInfo = ReturnType<typeof setPersonInfoAC>;

type ActionsType = SetPersonInfo;
