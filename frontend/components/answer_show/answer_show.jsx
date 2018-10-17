import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';
import EditAnswerFormContainer from '../answer_form/edit_answer_form_container';
import AnswerVotesContainer from '../answer_votes/answer_votes_container';
import {timeSinceUpdate} from '../../util/calculation_utils';

class AnswerShow extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      deleteButtonErrors: [],
      editButtonErrors: [],
      renderEdit: false
    }
    this.removeAnswer = this.removeAnswer.bind(this);
    this.editAnswer = this.editAnswer.bind(this);
    this.resetRenderEditState = this.resetRenderEditState.bind(this);
  }
  componentDidMount(){
    this.props.fetchAnswer(this.props.answerId);
  }

  removeAnswer(e){
    e.preventDefault();
    if(this.props.user && this.props.answer.user_id === this.props.user.id)
    {
      this.props.deleteAnswer(this.props.answerId);
    } else {
      this.setState({ ['deleteButtonErrors']: ['cannot delete other users\' answers' ]})
    }
  }

  editAnswer(e){
    e.preventDefault();
    if(this.props.user){
      this.setState({['renderEdit']: true});
    } else {
      this.setState({ ['editButtonErrors']: ['must be logged in to edit answers' ]})
    }
  }
  resetRenderEditState(){
    this.setState({['renderEdit']: false})
  }
  render() {
    const editForm = this.state.renderEdit ?
    <EditAnswerFormContainer
      user={this.props.user}
      answer={this.props.answer}
      resetRenderEditState={this.resetRenderEditState}
      /> : <div></div>

    return(
      <div>
        <div className="question-body">

          {editForm}
          {this.props.answer.body}

          <br />
          <br />
          <div className="question-body-footer">
              <AnswerVotesContainer answerId={this.props.answer.id}/>
              <div className="right-error-group">{this.state.editButtonErrors.map(e => `${e} `)}</div>
              <button onClick={(e) => this.editAnswer(e)} className="footer-button">
                improve this answer
              </button>
              <div className="error-group">{this.state.deleteButtonErrors.map(e => `${e} `)}</div>
              <button onClick={(e)=>this.removeAnswer(e)} className="footer-button">
                delete
              </button>
              posted {timeSinceUpdate(this.props.answer.created_at)} hr:min:secs ago
              on {this.props.answer.created_at} --
              by { this.props.answer.user ? this.props.answer.user.username : '__'}
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerShow;
