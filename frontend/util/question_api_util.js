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

export const updateQuestion = questionForm => (
  $.ajax({
    method: 'PATCH',
    url: `api/questions/${questionForm.id}`,
    data: questionForm
  })
);
