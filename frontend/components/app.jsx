import React from 'react';
import {Provider} from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import SignupFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import JobsContainer from './jobs/jobs_container';
import HeaderContainer from './nav/header_container';
import SearchContainer from './search/search_container';
import SearchShowContainer from './search/search_show_container';
import QuestionShowContainer from './question_show/question_show_container';
import QuestionFormContainer from './question_form/question_form_container';
import QuestionEditContainer from './question_show/question_edit_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';




const App = () => (
  <div>
  <div className="full-package">
    <HeaderContainer inSearchQs={window.location.toString().includes('/questions/')}/>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/questions/new" component={QuestionFormContainer} />
      <ProtectedRoute path="/questions/:questionId/edit" component={QuestionEditContainer} />
      <Route path="/questions/:questionId" component={QuestionShowContainer} />
      <Route path="/jobs" component={JobsContainer} />
      <Route exact path="/" component={SearchContainer} />
      <Route path="/questions/?=" component={SearchShowContainer} />
      <Route exact path="/questions/" component={SearchShowContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
  <div className="site-footer-container">
    <div className="site-footer">
      <div className="space-li-header">
        <a className="home-link" href="/" className="grey-white">Home</a>
      </div>
      <ul>
        <li className="space-li">
          <Link to="/questions" className="grey-white">
            <div className="logo-container">
              <div className="logo">
                <img src={window.images.logo}
                  alt="site header logo is a drawing of the rings of hell
                  as described in Dante Alighieri's epic poem Inferno" />
              </div>
              stack <strong>inferno</strong>
            </div>
          </Link>
        </li>
        <li className="space-li">
          <Link to="/jobs" className="grey-white">
            <strong>Jobs</strong>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  </div>
);

export default App;
