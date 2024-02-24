import { combineReducers } from 'redux';
import { peopleReducer } from './peopleReducer';
import { navigationReducer } from './navigationReducer';
import { personReducer } from './personReducer';
import { favoriteReducer } from './favoriteReducer';
import { localStorageReducer } from './localStorageReducer';

export const rootReducer = combineReducers({
  people: peopleReducer,
  navigation: navigationReducer,
  person: personReducer,
  favorites: favoriteReducer,
  localStorage: localStorageReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
