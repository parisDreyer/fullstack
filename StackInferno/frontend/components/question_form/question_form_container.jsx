import {connect} from 'react-redux';

import {createQuestion} from '../../actions/question_actions';
import QuestionForm from './question_form';

const mapStateToProps = (state) => ({
  userId: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  createQuestion: question => dispatch(createQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
