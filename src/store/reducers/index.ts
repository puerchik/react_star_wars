import { combineReducers } from 'redux';
import { peopleReducer } from './peopleReducer';
import { navigationReducer } from './navigationReducer';
import { personReducer } from './personReducer';

export const rootReducer = combineReducers({
  people: peopleReducer,
  navigation: navigationReducer,
  person: personReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
