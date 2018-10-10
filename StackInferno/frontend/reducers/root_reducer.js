import {combineReducers} from 'redux';

//import entities from './entities_reducer';
import session from './session_reducer';
import users from './users_reducer';
const rootReducer = combineReducers({
  session,
  users
});

export default rootReducer;
