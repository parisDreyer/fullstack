import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';
import AsideNav from '../nav/aside_nav';
import NewAnswerFormContainer from '../answer_form/new_answer_form_container';
import AnswerIndex from '../answer_index/answer_index';
import QuestionVotesContainer from '../question_votes/question_votes_container';
import {timeSinceUpdate} from '../../util/calculation_utils';


class QuestionShow extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      buttonErrors: []
    }
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }
  componentDidMount(){
    this.props.fetchQuestion(this.props.questionId);
    this.props.fetchAnswers({question_id: this.props.questionId});
  }

  deleteQuestion(){
    if(this.props.user && this.props.question.user_id === this.props.user.id)
    {
      this.props.deleteQuestion(this.props.questionId);
      this.props.history.push('/');
    } else {
      this.setState({ ['buttonErrors']: ['cannot delete other users\' questions' ]})
    }
  }

  questionFooter(){
    return(
      <div className="question-body-footer">
        <Link to={`/questions/${this.props.questionId}/edit`}>edit</Link>
        <div className="one-em-padding"></div>
        <div>
          <div className="error-group">{this.state.buttonErrors.map(e => `${e} `)}</div>
          <button onClick={this.deleteQuestion} className="footer-button">
            delete
          </button>
        </div>
        <div className="one-em-padding"></div>
        posted {timeSinceUpdate(this.props.question.created_at)} hr:min:secs ago
        <div className="one-em-padding"></div>
        on {this.props.question.created_at}
        <div className="one-em-padding"></div>
        by { this.props.question.user ? this.props.question.user.username : '__'}
    </div>
    );
  }

  questionBody(){
    return(
      <div className="question-body">
        <div className="float-display">
          <QuestionVotesContainer questionId={this.props.questionId} />
          <div>
            {this.props.question.body}
            <br />
            <br />
            {this.questionFooter()}
          </div>
      </div>
    </div>
  );
  }

  questionHeader(){
    return(
      <div className="header-section">
        <div className="question-index-header">
          <h1 className="question-title">{this.props.question.title}</h1>
          <Link to="/questions/new" className="link-button constrain-button-size">Ask Question</Link>
        </div>
      </div>
    );
  }
  render() {
    return(
      <div className="content">
        <AsideNav links={1}/>
        <div className="single-question-show">
          {this.questionHeader()}
          {this.questionBody()}
          <AnswerIndex answers={this.props.answers}/>
          <NewAnswerFormContainer questionId={this.props.questionId} />
        </div>
      </div>
    );
  }
}

export default QuestionShow;
