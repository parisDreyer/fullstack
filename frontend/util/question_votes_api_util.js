export const fetchQuestionVotes = questionId => (
  $.ajax({
    method: 'GET',
    url: 'api/question_votes',
    data: {question_vote: { question_id: questionId}}
  })
);


export const createQuestionVote = questionVote => (
  $.ajax({
    method: 'POST',
    url: 'api/question_votes',
    data: { question_vote: {
        user_id: questionVote.userId,
        question_id: questionVote.questionId,
        vote: questionVote.vote
      }
    },

  })
);
