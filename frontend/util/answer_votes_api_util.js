export const fetchAnswerVotes = answerId => (
  $.ajax({
    method: 'GET',
    url: 'api/answer_votes',
    data: {answer_vote: { answer_id: answerId}}
  })
);


export const createAnswerVote = answerVote => (
  $.ajax({
    method: 'POST',
    url: 'api/answer_votes',
    data: { answer_vote: {
        user_id: answerVote.userId,
        answer_id: answerVote.answerId,
        vote: answerVote.vote
      }
    },

  })
);
