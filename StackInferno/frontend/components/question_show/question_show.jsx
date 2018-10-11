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
        <ul>
          <li>{this.props.question.title}</li>
          <li>{this.props.question.body}</li>
        </ul>
      </div>
    );
  }
}

export default QuestionShow;
