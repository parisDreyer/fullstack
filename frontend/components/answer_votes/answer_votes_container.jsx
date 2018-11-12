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
      answerVotes: stateVote,
      originalVotes: stateVote // used to simulate the current users vote delta to clamp in range of -1 and 1
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
      if(this.state.answerVotes < this.state.originalVotes + 1){
        this.props.castVote({
          vote: 1,
          userId: this.props.user.id,
          answerId: this.props.answerId
        }); this.addToAnswerVotes(1);
      }
    }else {
      this.setState({ sessionErrors: ["must be signed in to upvote"]});
      window.setTimeout(() => this.setState({['sessionErrors']:[]}), 4000);
    }
  }

  downvote(e){
    if(this.props.user){
      if(this.state.answerVotes > this.state.originalVotes - 1){
        this.props.castVote({
          vote: -1,
          userId: this.props.user.id,
          answerId: this.props.answerId
        }); this.addToAnswerVotes(-1);
      }
    }else {
      this.setState({ sessionErrors: ["must be signed in to downvote"]});
      window.setTimeout(() => this.setState({['sessionErrors']:[]}), 4000);
    }
  }
  render(){
    const errs = this.state.sessionErrors.map(e => e);
    const upArrow = {
      backgroundImage: 'url(' + window.images.upArrow + ')',
      backgroundSize: 'cover',
      height: '42px',
      width: '42px',
    };
    const downArrow = {
      backgroundImage: 'url(' + window.images.downArrow + ')',
      backgroundSize: 'cover',
      height: '42px',
      width: '42px',
    };
    return (
        <div className="votes">
          <div className="error-group">{errs}</div>
          <button style={upArrow} onClick={this.upvote} className="vote-item arrow-img"></button>
          <div className="vote-item">{this.state.answerVotes}</div>
          <button style={downArrow} onClick={this.downvote} className="vote-item arrow-img"></button>
        </div>
    )
  }


}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerVotes);
