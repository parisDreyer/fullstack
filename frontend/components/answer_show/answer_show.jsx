import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';
import EditAnswerFormContainer from '../answer_form/edit_answer_form_container';

class AnswerShow extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      buttonErrors: [],
      renderEdit: false
    }
    this.removeAnswer = this.removeAnswer.bind(this);
    this.editAnswer = this.editAnswer.bind(this);
  }
  componentDidMount(){
    this.props.fetchAnswer(this.props.answerId);
  }

  removeAnswer(e){
    e.preventDefault();
    if(this.props.user && this.props.answer.user_id === this.props.user.id)
    {
      this.props.deleteAnswer(this.props.answerId);
      // this.props.history.push(`questions/${this.props.answer.question_id}`);
      // this.props.history.push('/');
    } else {
      this.setState({ ['buttonErrors']: ['cannot delete other users\' answers' ]})
    }
  }

  editAnswer(e){
    e.preventDefault();
    if(this.props.user){
      this.setState({['renderEdit']: true});
    } else {
      this.setState({ ['buttonErrors']: ['must be logged in to edit answers' ]})
    }
  }
  render() {
    const editForm = this.state.renderEdit ?
    <EditAnswerFormContainer user={this.props.user} answer={this.props.answer}/> : <div></div>

    return(
      <div>
        <div className="question-body">

          {editForm}
          {this.props.answer.body}

          <br />
          <br />
          <div className="question-body-footer">

            <div>
              <div className="error-group">{this.state.buttonErrors.map(e => `${e} `)}</div>
              <button onClick={(e) => this.editAnswer(e)} className="footer-button">
                edit
              </button>
              <button onClick={(e)=>this.removeAnswer(e)} className="footer-button">
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerShow;
