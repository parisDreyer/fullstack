import { connect } from 'react-redux';

import {updateFilter} from '../../actions/filter_actions';
import { asArray} from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  questions: asArray(state.entities),
  limit: state.ui.filters.limit,
  user: state.entities.users[state.session.id]
  //NOTE add a filter in for searching by question title text
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
