import React from 'react';
import {withRouter} from 'react-router-dom';

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
    const { title, body } = this.props.question;
    return (
      <div className="question-index-item"
        onClick={this.handleClick}>
        <div className="index-item-title">
          {title || "No title!"}
        </div>
      </div>
    );
  }
}
export default withRouter(IndexItem);
