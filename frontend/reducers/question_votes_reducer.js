import merge from 'lodash/merge';

import {
  RECEIVE_QUESTION_VOTES
} from '../actions/question_vote_actions';

const questionVotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTION_VOTES:
      let newState = merge({}, state)
      newState[action.questionVotes.questionId] = action.questionVotes.votes
      return newState;
    default:
      return state;
  }
}

export default questionVotesReducer;
