import { omit } from 'lodash';

const initialState: FavoriteStateType = {};

export const favoriteReducer = (state: FavoriteStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'ADD-TO-FAVORITES':
      return { ...state, [action.payload.id]: action.payload.name };
    case 'REMOVE-FROM-FAVORITES':
      return omit(state, [action.payload.id]);
    default:
      return state;
  }
};

// actions

export const addToFavoritesAC = (id: number, name: string) => {
  return {
    type: 'ADD-TO-FAVORITES',
    payload: {
      id,
      name,
    },
  } as const;
};

export const removeFromFavoritesAC = (id: number) => {
  return {
    type: 'REMOVE-FROM-FAVORITES',
    payload: {
      id,
    },
  } as const;
};

// types

export type FavoriteStateType = {
  [key: number]: string;
};
type AddToFavorites = ReturnType<typeof addToFavoritesAC>;
type RemoveFromFavorites = ReturnType<typeof removeFromFavoritesAC>;
type ActionsType = AddToFavorites | RemoveFromFavorites;
