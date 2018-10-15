import React from 'react';
import {withRouter} from 'react-router-dom';

import AnswerShowContainer from '../answer_show/answer_show_container';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { body } = this.props.answer;
    return (
      <div className="answer-index-item">
        {body || ""}
      </div>
    );
  }
}
export default withRouter(IndexItem);
