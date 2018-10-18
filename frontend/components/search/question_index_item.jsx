import React from 'react';
import {withRouter} from 'react-router-dom';
import {timeSinceUpdate} from '../../util/calculation_utils';
import QuestionVotesNumberContainer from '../question_votes/question_votes_number_container';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const questionId = this.props.question.id;
    this.props.history.push(`/questions/${questionId}`);
  }
  render() {
    const { title, body, user, updated_at } = this.props.question;
    return (
      <div className="question-index-votes">
        <QuestionVotesNumberContainer questionId={this.props.question.id}/>
        <div className="question-index-item" onClick={this.handleClick}>
          <div className="index-item-title">
            {title || "No title!"}
          </div>
          <div className="index-item-footer">
            modified {timeSinceUpdate(updated_at)} hr:min:secs ago
            <div className="one-em-padding"></div>
            question by {user.username || "anon"}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(IndexItem);
