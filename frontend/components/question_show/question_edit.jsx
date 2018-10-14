import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';
import AsideNav from '../nav/aside_nav';
import EditQuestionFormContainer from '../question_form/edit_question_form_container';


class QuestionEdit extends React.Component{
  constructor(props){
    super(props);
    // console.log('q edit', this.props);
  }
  componentDidMount(){
    this.props.question || this.props.fetchQuestion(this.props.questionId);
  }
  componentWillReceiveProps(){
    this.props.question || this.props.fetchQuestion(this.props.questionId);
  }
  render() {
    // console.log('edit props', this.props);
    return(
        <EditQuestionFormContainer question={this.props.question}/>
    );
  }
}

export default QuestionEdit;
