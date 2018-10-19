import { connect } from 'react-redux';

import {updateFilter} from '../../actions/filter_actions';
import { questionsArray} from '../../reducers/selectors';
import SearchShow from './search_show';

const mapStateToProps = (state) => ({
  // questions: questionsArray(state.entities),
  questions: questionsArray(state.entities.questions.questions || []),
  total: state.entities.questions.total,
  limit: state.ui.filters.limit,
  offset: state.ui.filters.offset,
  text: window.location.toString().replace(/^[^?=]*/,'').slice(2),
  user: state.entities.users[state.session.id],
  searchShowPage: true
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchShow);
