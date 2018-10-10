import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  // {this.renderErrors()} // this was below line 45
  render() {
    let signupInput = (<br />);
    if(this.props.formType === 'signup'){
      signupInput = (
        <div>
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
          </label>
          <br />
        </div>
      );
    }
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Stack Inferno!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          <div className="login-form">
            <br/>
            <label>Username:
              <br />
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            {signupInput}
            <label>Password:
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
