import { combineReducers } from 'redux';
import { peopleReducer } from './peopleReducer';
import { navigationReducer } from './navigationReducer';

export const rootReducer = combineReducers({
  people: peopleReducer,
  navigation: navigationReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
