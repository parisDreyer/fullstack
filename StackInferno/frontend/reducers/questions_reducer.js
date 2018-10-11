import merge from 'lodash/merge';

import {
  RECEIVE_QUESTION,
  RECEIVE_QUESTIONS
} from '../actions/question_actions';

const questionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      const newQuestion = { [action.question.id]: action.question}
      return merge({}, state, newQuestion);
    default:
      return state;
  }
}

export default questionReducer;
