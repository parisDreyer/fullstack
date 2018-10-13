import React from 'react';
import { withRouter } from 'react-router-dom';
import errorsToObjects from '../../util/errors_to_objects';

class SplashSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  // errorObjects() {
  //   let username = [];
  //   let password = [];
  //   let email = [];
  //   let general = []
  //   for (let i = 0; i < this.props.errors.length; ++i) {
  //
  //     let err = this.props.errors[i];
  //
  //     switch (err.split(' ')[0].toLowerCase()) {
  //       case "username":
  //       username.push(this.errorWrap(err, i, 'username'));
  //       break;
  //       case "email":
  //       email.push(this.errorWrap(err, i, 'email'));
  //       break;
  //       case "password":
  //       password.push(this.errorWrap(err, i, 'password'));
  //       break;
  //       default:
  //       general.push(this.errorWrap(err, i, 'general'));
  //     } // end switch
  //
  //   } // end map
  //   return({
  //     username: this.arrContents(username),
  //     password: this.arrContents(password),
  //     email: this.arrContents(email),
  //     general: this.arrContents(general)
  //   });
  // } // end errorObjects
  //
  // arrContents(arr){
  //   return (
  //     <ul className=".error-group">
  //       {arr.map(el => el)}
  //     </ul>
  //   );
  // }
  //
  // errorWrap(error, idx, errType){
  //   return (
  //     <li key={`error-${idx}`} className={`${errType}-error`}>
  //       {error}
  //     </li>
  //   );
  // }

  // {this.renderErrors()}
  render() {
    const errObjs = errorsToObjects(this.props.errors);
    return (
      <div className="splash-signup-container">
        <form onSubmit={this.handleSubmit}>
          <br/>
          <div className="splash-login-form">
            <br/>
            <label className="splash-form-label">
              {errObjs['username']}
              <div className="splash-form-text">Username:</div>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="splash-login-input"
                />
            </label>
            <div>
              <label className="splash-form-label">
                {errObjs['email']}
                <div className="splash-form-text">Email:</div>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="splash-login-input"
                  />
              </label>
              <br />
            </div>
            <label className="splash-form-label">
              {errObjs['password']}
              <div className="splash-form-text">Password:</div>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="splash-login-input"
                />
            </label>
            <br/>
            <input className="splash-session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SplashSignupForm);
