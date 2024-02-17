import { combineReducers } from 'redux';
import { peopleReducer } from './peopleReducer';
import { navigationReducer } from './navigationReducer';
import { personReducer } from './personReducer';
import { favoriteReducer } from './favoriteReducer';

export const rootReducer = combineReducers({
  people: peopleReducer,
  navigation: navigationReducer,
  person: personReducer,
  favorite: favoriteReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
