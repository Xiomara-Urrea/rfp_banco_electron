import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './user.reducer';
import { client } from './client.reducer';

const rootReducer = combineReducers({
  authentication,
  client,
  users
});

export default rootReducer;