import React from 'react';

import {connect} from 'react-redux';

import {
  fetchQuestionVotes,
  createQuestionVote
} from '../../actions/question_vote_actions';

const mapStateToProps = ({session, entities}, { questionId }) => ({
  user: session.id ? entities.users[session.id] : null,
  questionId,
  questionVotes: entities.questionVotes[questionId]
});

const mapDispatchToProps = dispatch => ({
  fetchQuestionVotes: questionId => dispatch(fetchQuestionVotes(questionId)),
  castVote: questionVote => dispatch(createQuestionVote(questionVote))
});



class QuestionVotes extends React.Component {

  constructor(props){
    super(props);
    if (!this.props.questionVotes) this.props.fetchQuestionVotes(this.props.questionId);
    let stateVote = this.props.questionVotes ? this.props.questionVotes : 0;
    this.state = {
      sessionErrors: [],
      questionVotes: stateVote,
      originalVotes: stateVote
    }
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestionVotes(this.props.questionId);
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.questionVotes != this.state.questionVotes){
      this.setState({questionVotes: nextProps.questionVotes});
    }
  }

  addToQuestionVotes(num){
    let newVoteCount = this.state.questionVotes + num;
    this.setState({questionVotes: newVoteCount})
  }


  upvote(e){
    if(this.props.user){
        if(this.state.questionVotes < this.originalVotes + 1){
        this.props.castVote({
          vote: 1,
          userId: this.props.user.id,
          questionId: this.props.questionId
        }); this.addToQuestionVotes(1);
      }
    }else {
      this.setState({ sessionErrors: ["must be signed in to upvote"]})
    }
  }

  downvote(e){
    if(this.props.user){
      if (this.state.questionVotes > this.originalVotes - 1) {
        this.props.castVote({
          vote: -1,
          userId: this.props.user.id,
          questionId: this.props.questionId
        }); this.addToQuestionVotes(-1);
      }
    }else {
      this.setState({ sessionErrors: ["must be signed in to downvote"]})
    }
  }
  render(){
    const errs = this.state.sessionErrors.map(e => e);
    return (
        <div className="question-votes">
          <div className="error-group">{errs}</div>
          <button onClick={this.upvote} className="vote-item">
          <img src={window.images.upArrow} alt="up vote button" className="arrow-img" />
          </button>
          <div className="vote-item">{this.state.questionVotes}</div>
          <button onClick={this.downvote} className="vote-item">
            <img src={window.images.downArrow} alt="down vote button" className="arrow-img" />
          </button>
        </div>
    )
  }


}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionVotes);
