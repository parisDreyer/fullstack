import React from 'react';
import {Provider} from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import {AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <ul className="header-nav">
      <li className="header-link">
        <Link to="/">stack <strong>inferno</strong></Link>
      </li>
      <GreetingContainer />
    </ul>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
