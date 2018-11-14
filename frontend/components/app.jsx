import React from 'react';
import {Provider} from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import footer from './site_footer';


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
    <HeaderContainer inSearchQs={window.location.toString().includes('/questions/?=')}/>
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
    {footer()}
  </div>
);
// window.location.toString().includes("/questions/");
export default App;
