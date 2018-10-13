import {connect} from 'react-redux';

import {logout, login} from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({session, entities: {users}}) => {
  // debugger;
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(login({ username: 'user', password: 'starwars'}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
