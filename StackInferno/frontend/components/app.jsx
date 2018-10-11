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
import SplashSignupContainer from './splash/splash_container';

import QuestionShowContainer from './question_show/question_show_container';
import QuestionFormContainer from './question_form/question_form_container';
import {AuthRoute, ProtectedRoute } from '../util/route_util';

function renderHeader(){
  return (
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
  );
}

function renderSplash(){
  if(window.location.toString().match(/\/#\/.*$/)[0] === "/#/")
  return (<div className="old-hero">
  <div className="splash-explanation-text">
    <h3>Learn, Share, Build</h3>
    <p>
      Each month, over 50 million denizens come to Stack Inferno to learn, share
      their knowledge, and maunder through eternity. Join the world’s largest denizen
      community.
    </p>
  </div>
  <div className="old-hero-background"></div>
  <SplashSignupContainer />
</div>);
}

const App = () => (
  <div>
    { renderHeader() } { renderSplash() } <br/><br/><br/><br/>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/questions/new" component={QuestionFormContainer} />
      <Route path="/questions/:questionId" component={QuestionShowContainer} />
    </Switch>
  </div>
);

export default App;


// <div className="background-image"></div>
