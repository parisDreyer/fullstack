import React from 'react';
import IndexItem from './question_index_item';
// import { Link } from 'react-router-dom';

const QuestionIndex = ({ questions }) => (
  <div>
    {questions.map(question => (
      <IndexItem
        question={question}
        key={question.id}
      />
    ))}
  </div>
);
export default QuestionIndex;
