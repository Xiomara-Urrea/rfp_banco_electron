import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './user.reducer';
import { account } from './account.reducer';

const rootReducer = combineReducers({
  authentication,
  account,
  users
});

export default rootReducer;