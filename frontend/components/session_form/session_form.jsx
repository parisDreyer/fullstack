import React from 'react';
import { withRouter } from 'react-router-dom';
import AsideNav from '../nav/aside_nav';
import errorsToObjects from '../../util/errors_to_objects';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
    let signupInput = (<br />);
    if(this.props.formType === 'signup'){
      signupInput = (
        <div>
          <label>
            Email:
            <br />
            {errObjs['email']}
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
      <div className="content">
        <AsideNav links={1}/>
      <div className="login-form-container">
        <div className="explanation-text">
          Stack Inferno is trying to be a part of the StackExchange a network of 174 <a href="https://stackexchange.com/sites">communities</a>.
        </div>
        {errObjs['general']}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          <div className="login-form">
            <br/>
            <label>Username:
              <br />
              {errObjs['username']}
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            </label>
            {signupInput}
            <label>Password:
              <br />
              {errObjs['password']}
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
    </div>
    );
  }
}

export default withRouter(SessionForm);
