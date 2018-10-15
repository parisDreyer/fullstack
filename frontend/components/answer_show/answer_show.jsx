import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';

class AnswerShow extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      buttonErrors: []
    }
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }
  componentDidMount(){
    this.props.fetchAnswer(this.props.answerId);
  }

  deleteAnswer(){
    if(this.props.user && this.props.answer.user_id === this.props.user.id)
    {
      this.props.deleteAnswer(this.props.answerId);
      this.props.history.push('/');
    } else {
      this.setState({ ['buttonErrors']: ['cannot delete other users\' answers' ]})
    }
  }
  render() {
    return(
      <div>
        <div className="single-question-show">
          <div className="question-body">
            {this.props.answer.body}
            <br />
            <br />
            <div className="question-body-footer">

              <div>
                <div className="error-group">{this.state.buttonErrors.map(e => `${e} `)}</div>
                <button onClick={this.deleteAnswer} className="footer-button">
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerShow;
