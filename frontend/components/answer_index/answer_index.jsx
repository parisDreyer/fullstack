import React from 'react';
import AnswerIndexItem from './answer_index_item';

const AnswerIndex = ({ answers }) => (
  <div>
    {answers.map(answer => (
      <AnswerIndexItem
        answer={answer}
        key={answer.id}
      />
    ))}
  </div>
);
export default AnswerIndex;
