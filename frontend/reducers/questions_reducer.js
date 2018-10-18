import merge from 'lodash/merge';

import {
  RECEIVE_QUESTION,
  RECEIVE_QUESTIONS,
  REMOVE_QUESTION
} from '../actions/question_actions';

const questionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;//{ ['questions']: action.questions.questions, ['total']: action.questions.total };
    case RECEIVE_QUESTION:
      const newQuestion = { [action.question.id]: action.question }
      return merge({}, state, newQuestion);
    case REMOVE_QUESTION:
      let newState = merge({}, state);
      delete newState[action.questionId];
      return newState;
    default:
      return state;
  }
}

export default questionReducer;
