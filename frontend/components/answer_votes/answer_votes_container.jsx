import React from 'react';

import {connect} from 'react-redux';

import {
  fetchAnswerVotes,
  createAnswerVote,
  updateAnswerVote,
  deleteAnswerVote
} from '../../actions/answer_vote_actions';

const mapStateToProps = ({session, entities}, { answerId }) => ({
  user: session.id ? entities.users[session.id] : null,
  answerId,
  answerVotes: entities.answerVotes[answerId]
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
    this.state = {
      sessionErrors: []
    }
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }


  upvote(e){
    if(this.props.user){
      this.props.castVote({
        vote: 1,
        userId: this.props.user.id,
        answerId: this.props.answerId
      });
    }else {
      this.setState({ sessionErrors: ["must be signed in to upvote"]})
    }
  }

  downvote(e){
    if(this.props.user){
      this.props.castVote({
        vote: 1,
        userId: this.props.user.id,
        answerId: this.props.answerId
      });
    }else {
      this.setState({ sessionErrors: ["must be signed in to downvote"]})
    }
  }
  render(){
    const errs = this.state.sessionErrors.map(e => e);
    return (
        <div className="votes">
          <div className="error-group">{errs}</div>
          <button onClick={this.upvote}>^</button>
          {this.props.answerVotes}
          <button onClick={this.downvote}>V</button>
        </div>
    )
  }


}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerVotes);
