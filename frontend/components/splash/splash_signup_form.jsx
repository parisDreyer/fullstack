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

  componentDidUpdate (prevProps) {
    if (prevProps.errors !== this.props.errors)
     while (this.props.errors.length > 0) {this.props.errors.pop();}
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.errors !== this.props.errors)
     while (this.props.errors.length > 0) {this.props.errors.pop();}
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

  render() {
    const errObjs = errorsToObjects(this.props.errors);
    return (
      <div className="splash-signup-container">
        {errObjs['general']}
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
