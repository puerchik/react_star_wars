import { ResultPeopleName } from '../../utils/network';

const initialState: ResultPeopleName[] = [
  {
    name: '',
    url: '',
  },
];

export const peopleReducer = (state: ResultPeopleName[] = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'SET-PEOPLE':
      return [...action.payload.peopleList];
    default:
      return state;
  }
};

// actions

export const setPeopleAC = (peopleList: ResultPeopleName[]) => {
  return {
    type: 'SET-PEOPLE',
    payload: {
      peopleList,
    },
  } as const;
};

// types
type SetPeopleType = ReturnType<typeof setPeopleAC>;

type ActionsType = SetPeopleType;
