export const selectQuestion = ({questions}, questionId) => {
  return questions[questionId] || { questionId: ["none found"] }
}


export const questionsArray = ({ questions }) => (
  Object.keys(questions).map(key=> questions[key])
);
