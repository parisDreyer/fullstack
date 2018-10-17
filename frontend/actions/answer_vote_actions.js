import * as APIUtil from '../util/answer_votes_api_util';

export const RECEIVE_ANSWER_VOTES = 'RECEIVE_ANSWER_VOTES';


export const receiveAnswerVotes = answerVotes => ({
  type: RECEIVE_ANSWER_VOTES,
  answerVotes
});

export const fetchAnswerVotes = (answerId) => dispatch => (
  APIUtil.fetchAnswerVotes(answerId).then(answerVotes => (
    dispatch(receiveAnswerVotes(answerVotes))
  ))
);

export const createAnswerVote = answerVote => dispatch => (
  APIUtil.createAnswerVote(answerVote).then(answerVotes => (
    dispatch(receiveAnswerVotes(answerVotes))
  ))
);

export const updateAnswerVote = (answerVote) => dispatch => (
  APIUtil.updateAnswerVote(answerVote)
  .then(answerVotes =>
    dispatch(receiveAnswerVotes(answerVotes))
  )
);

export const deleteAnswerVote = answerVote => dispatch => (
  APIUtil.deleteAnswerVote(answerVote).then((answerVotes) =>
    dispatch(receiveAnswerVotes(answerVotes))
  )
);
