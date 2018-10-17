import * as APIUtil from '../util/question_votes_api_util';

export const RECEIVE_QUESTION_VOTES = 'RECEIVE_QUESTION_VOTES';


export const receiveQuestionVotes = questionVotes => ({
  type: RECEIVE_QUESTION_VOTES,
  questionVotes
});

export const fetchQuestionVotes = (questionId) => dispatch => (
  APIUtil.fetchQuestionVotes(questionId).then(questionVotes => (
    dispatch(receiveQuestionVotes(questionVotes))
  ))
);

export const createQuestionVote = questionVote => dispatch => (
  APIUtil.createQuestionVote(questionVote).then(questionVotes => (
    dispatch(receiveQuestionVotes(questionVotes))
  ))
);
