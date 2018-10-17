export const fetchAnswerVotes = answerId => (
  $.ajax({
    method: 'GET',
    url: 'api/answer_votes',
    data: {answer_vote: { answer_id: answerId}}
  })
);


export const createAnswerVote = answerForm => (
  $.ajax({
    method: 'POST',
    url: 'api/answer_votes',
    data: answerForm,
    contentType: false,
    processData: false
  })
);

export const updateAnswerVote = answerVote => (
  $.ajax({
    url: `api/answer_votes/${answerVote.userId}`, // vote for a user --because not storing the answervoteid on frontend
    method: 'PATCH',
    data: {answerVote}
  })
);

export const deleteAnswerVote = answerVote => (
  $.ajax({
    url: `api/answer_votes/${answerVote.userId}`,
    method: 'DELETE',
    data: {answerVote}
  })
);
