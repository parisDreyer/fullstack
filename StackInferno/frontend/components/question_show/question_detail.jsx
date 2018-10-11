import React from 'react';
import {Link} from 'react-router';
//:id, :title, :category_id,
// :body, :user_id, :created_at, :updated_at, :user
const QuestionDetail = ({ question }) => {
  return (
    <div>
      <ul>
        <li>{question.title}</li>
        <li>{question.body}</li>
        <li>{question.user.username}</li>
      </ul>
    </div>
  )
}
