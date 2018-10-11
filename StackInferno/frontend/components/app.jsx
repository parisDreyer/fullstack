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
    <div className="nav-bar">
    <ul className="header-nav">
      <li className="header-link">
        <Link to="/">
          <div className="logo-container">
            <div className="logo">
            </div>stack <strong>inferno</strong>
          </div>
        </Link>
      </li>
      <GreetingContainer />
    </ul>
    </div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;





// <div className="background-image"></div>
