import React from 'react';

import {connect} from 'react-redux';

import {
  fetchAnswerVotes,
  createAnswerVote,
  updateAnswerVote,
  deleteAnswerVote
} from '../../actions/answer_vote_actions';

const mapStateToProps = (state, { answerId }) => ({
  user: state.entities.users[state.session.id],
  answerId,
  answerVotes: state.entities.answerVotes[answerId]
});

const mapDispatchToProps = dispatch => ({
  fetchAnswerVotes: answerId => dispatch(fetchAnswerVotes(answerId)),
  castVote: answerVote => dispatch(createAnswerVote(answerVote)),
  updateVote: answerVote => dispatch(updateAnswerVote(answerVote)),
  removeVote: answerVote => dispatch(deleteAnswerVote(answerVote))
});



class AnswerVotes extends React.Component {

  constructor(props){
    super(props);
    if (!this.props.answerVotes) this.props.fetchAnswerVotes(this.props.answerId);
  }
  render(){
    return (
        <div className="votes">
          {this.props.answerVotes}
        </div>
    )
  }


}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerVotes);
