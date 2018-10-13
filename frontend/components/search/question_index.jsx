import React from 'react';
import QuestionIndexItem from './question_index_item';
// import { Link } from 'react-router-dom';

const QuestionIndex = ({ questions }) => (
  <div>
    {questions.map(question => (
      <QuestionIndexItem
        question={question}
        key={question.id}
      />
    ))}
  </div>
);
export default QuestionIndex;





// <div className="question-index-header">
//   <h1>Top Questions</h1>
//   <Link to="/questions/new" className="link-button">Ask Question</Link>
//
//
// </div>
