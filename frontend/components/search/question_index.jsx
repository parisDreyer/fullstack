import React from 'react';
import IndexItem from './question_index_item';

const QuestionIndex = ({ questions  }) => (
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
