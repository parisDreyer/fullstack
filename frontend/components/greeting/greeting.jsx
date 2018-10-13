import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout, demoLogin}) => {
  const sessionLinks = () => (
    <li className="login-signup">
      <button className="signup" onClick={demoLogin}>Demo Login</button>
      <Link to="/login" className="login">Login</Link>
      <Link to="/signup" className="signup">Sign up!</Link>
    </li>
  );

  const personalGreeting = () => (
    <li className="greeting">
      <h2>Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </li>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
