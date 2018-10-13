export const selectQuestion = ({questions}, questionId) => {
  return questions[questionId] || { questionId: ["none found"] }
}


export const asArray = ({ questions }) => (
  Object.keys(questions).map(key=> questions[key])
);
