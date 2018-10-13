import { LOCATION_CHANGE } from 'react-router-redux';
import merge from 'lodash/merge';

const redirectErrorsReducer = (state = {}, action) => {
  console.log("redirect errors state", state);
  switch(action.type) {
    case LOCATION_CHANGE:
      let newState = state;
      delete newState['errors'];
      newState['errors'] = [];
      return newState;
    default:
      return state;
  }
}


export default redirectErrorsReducer;
