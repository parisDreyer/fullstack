export const fetchQuestions = data => (
  $.ajax({
    method: 'GET',
    url: 'api/questions',
    data
  })
);

export const fetchQuestion = id => (
  $.ajax({
    method: 'GET',
    url: `api/questions/${id}`
  })
);

export const createQuestion = questionForm => (
  $.ajax({
    method: 'POST',
    url: 'api/questions',
    data: questionForm,
    contentType: false,
    processData: false
  })
);

export const updateQuestion = question => (
  $.ajax({
    url: `api/questions/${question.id}`,
    method: 'PATCH',
    data: {question}
  })
);
