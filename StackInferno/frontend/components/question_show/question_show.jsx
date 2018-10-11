import React from 'react';
import {Link} from 'react-router-dom';

import QuestionDetail from './question_detail';
import { ProtectedRoute} from '../../util/route_util';


const QuestionShow = ({ question, questionId, fetchQuestion }) => {
  const questions = {
    [questionId]: question
  }

  return(
    <div className="single-question-show">

      <QuestionDetail question={question} />
    </div>
  );
}
