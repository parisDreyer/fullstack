import React from 'react';
import {withRouter} from 'react-router-dom';
import {millisecsToTime} from '../../util/calculation_utils';

// import QuestionShowContainer from '../question_show/question_show_container';

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
      <div className="question-index-item"
        onClick={this.handleClick}>
        <div className="index-item-title">
          {title || "No title!"}
        </div>
        <div className="index-item-footer">
          modified {
            millisecsToTime(Date.now() - Date.parse(updated_at))
          } ago -- question by {user.username || "anon"}
        </div>
      </div>
    );
  }
}
export default withRouter(IndexItem);
