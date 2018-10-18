import { connect } from 'react-redux';

import {updateFilter} from '../../actions/filter_actions';
import { questionsArray} from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  // questions: questionsArray(state.entities),
  limit: state.ui.filters.limit,
  offset: state.ui.filters.offset,
  text: '',
  user: state.entities.users[state.session.id],
  questions: questionsArray(state.entities.questions.questions || {}),
  total: state.entities.questions.total
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
