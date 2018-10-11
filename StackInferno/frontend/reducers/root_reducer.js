import {combineReducers} from 'redux';

import entities from './entities_reducer';
import ui from './ui_reducer';
import session from './session_reducer';
// import users from './users_reducer';
const rootReducer = combineReducers({
  entities,
  session,
  ui
  // users
});

export default rootReducer;
