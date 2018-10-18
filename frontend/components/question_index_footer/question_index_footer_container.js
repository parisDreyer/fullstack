import { connect } from 'react-redux';

import {updateFilter} from '../../actions/filter_actions';
import { questionsArray} from '../../reducers/selectors';
  import QuestionIndexFooter from './question_index_footer';

const mapStateToProps = (state, {total}) => ({
  total,
  limit: state.ui.filters.limit,
  offset: state.ui.filters.offset,
  user: state.entities.users[state.session.id],
  searchShowPage: true
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndexFooter);
