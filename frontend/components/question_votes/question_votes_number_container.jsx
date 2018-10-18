import React from 'react';

import {connect} from 'react-redux';

import {
  fetchQuestionVotes
} from '../../actions/question_vote_actions';

const mapStateToProps = ({session, entities}, { questionId, numAnswers }) => ({
  user: session.id ? entities.users[session.id] : null,
  questionId,
  questionVotes: entities.questionVotes[questionId],
  numAnswers
});

const mapDispatchToProps = dispatch => ({
  fetchQuestionVotes: questionId => dispatch(fetchQuestionVotes(questionId))
});



class QuestionVotesNumberContainer extends React.Component {

  constructor(props){
    super(props);
    if (!this.props.questionVotes) this.props.fetchQuestionVotes(this.props.questionId);
  }

  render(){
    return (
      <div className="question-votes">
        <div className="center-flex-col">
          <div className="medium-vote-item">{this.props.questionVotes}</div>
          <div className="little-vote-item">votes</div>
        </div>
        <div className="one-em-padding"></div>
        <div className="center-flex-col">
          <div className="medium-vote-item">{this.props.numAnswers}</div>
          <div className="little-vote-item">answers</div>
        </div>
      </div>
    )
  }


}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionVotesNumberContainer);
