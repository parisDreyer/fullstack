import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';
import AsideNav from '../nav/aside_nav';
import NewAnswerFormContainer from '../answer_form/new_answer_form_container';

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
  render() {
    return(
      <div className="content">
        <AsideNav links={1}/>
        <div className="single-question-show">
          <div className="header-section">
            <div className="question-index-header">
              <h1 className="question-title">{this.props.question.title}</h1>
              <Link to="/questions/new" className="link-button">Ask Question</Link>
            </div>
          </div>
          <div className="question-body">
            {this.props.question.body}
            <br />
            <br />
            <div className="question-body-footer">
              <Link to={`/questions/${this.props.questionId}/edit`}>edit</Link>
              <div>
                <div className="error-group">{this.state.buttonErrors.map(e => `${e} `)}</div>
                <button onClick={this.deleteQuestion} className="footer-button">
                  delete
                </button>
              </div>
            </div>
          </div>
          <NewAnswerFormContainer questionId={this.props.questionId} />
        </div>
      </div>
    );
  }
}

export default QuestionShow;
