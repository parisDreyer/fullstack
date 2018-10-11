import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';


class QuestionShow extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      title: '',
      body: ''
    }
  }
  componentDidMount(){
    this.props.fetchQuestion(this.props.questionId);
  }
  render() {
    return(
      <div className="single-question-show">
        <div className="question-title">{this.props.question.title}</div>
        <div className="question-body">{this.props.question.body}</div>
      </div>
    );
  }
}

export default QuestionShow;
