export const selectQuestion = ({questions}, questionId) => {
  return questions[questionId] || { questionId: ["none found"] }
}


export const questionsArray = (questions) => (
  Object.keys(questions).map(key=> questions[key])
);


// meh

export const selectAnswer = ({answers}, answerId) => {
  return answers[answerId] || { answerId: ["none found"] }
}


export const answersArray = ({ answers }) => (
  Object.keys(answers).map(key=> answers[key])
);
