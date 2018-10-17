import merge from 'lodash/merge';

import {
  RECEIVE_ANSWER_VOTES
} from '../actions/answer_vote_actions';

const answerVotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWER_VOTES:
      let newState = merge({}, state)
      newState[action.answerVotes.answerId] = action.answerVotes.votes
      return newState;
    default:
      return state;
  }
}

export default answerVotesReducer;
