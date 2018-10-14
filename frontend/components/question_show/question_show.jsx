import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';
import AsideNav from '../nav/aside_nav';

class QuestionShow extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      title: '',
      body: ''
    }
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }
  componentDidMount(){
    this.props.fetchQuestion(this.props.questionId);
  }

  deleteQuestion(){
    this.props.deleteQuestion(this.props.questionId);
    this.setState({ ['title']: 'deleted', ['body']: 'deleted'});
    this.props.history.push('/');
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
              <button onClick={this.deleteQuestion} className="footer-button">
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionShow;
