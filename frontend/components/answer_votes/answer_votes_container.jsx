import React from 'react';

import {connect} from 'react-redux';

import {
  fetchAnswerVotes,
  createAnswerVote
} from '../../actions/answer_vote_actions';

const mapStateToProps = ({session, entities}, { answerId }) => ({
  user: session.id ? entities.users[session.id] : null,
  answerId,
  answerVotes: entities.answerVotes[answerId]
});

const mapDispatchToProps = dispatch => ({
  fetchAnswerVotes: answerId => dispatch(fetchAnswerVotes(answerId)),
  castVote: answerVote => dispatch(createAnswerVote(answerVote))
});



class AnswerVotes extends React.Component {

  constructor(props){
    super(props);
    if (!this.props.answerVotes) this.props.fetchAnswerVotes(this.props.answerId);
    let stateVote = this.props.answerVotes ? this.props.answerVotes : 0;
    this.state = {
      sessionErrors: [],
      answerVotes: stateVote
    }
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.answerVotes != this.state.answerVotes){
      this.setState({answerVotes: nextProps.answerVotes});
    }
  }

  addToAnswerVotes(num){
    let newVoteCount = this.state.answerVotes + num;
    this.setState({answerVotes: newVoteCount})
  }

  upvote(e){
    if(this.props.user){
      this.props.castVote({
        vote: 1,
        userId: this.props.user.id,
        answerId: this.props.answerId
      }); this.addToAnswerVotes(1);
    }else {
      this.setState({ sessionErrors: ["must be signed in to upvote"]})
    }
  }

  downvote(e){
    if(this.props.user){
      this.props.castVote({
        vote: -1,
        userId: this.props.user.id,
        answerId: this.props.answerId
      }); this.addToAnswerVotes(-1);
    }else {
      this.setState({ sessionErrors: ["must be signed in to downvote"]})
    }
  }
  render(){
    const errs = this.state.sessionErrors.map(e => e);
    return (
        <div className="votes">
          <div className="error-group">{errs}</div>
          <button onClick={this.upvote} className="vote-item">^</button>
          <div className="vote-item">{this.state.answerVotes}</div>
          <button onClick={this.downvote} className="vote-item">V</button>
        </div>
    )
  }


}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerVotes);
