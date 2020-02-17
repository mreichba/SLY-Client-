import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import AuthService from '../../Helpers/AuthService';
import Context from '../../Components/Context/Context';
import './Login.css';

export default class Login extends React.Component {
  static contextType = Context;
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  // when a user successfully logs in the app will push them to the app's dashboard
  onSuccessfulLogin = () => {
    const { history } = this.props;
    history.push('/');
  };

  // when a user clicks login the app takes the users login credentials and makes a api call
  // to check if credentials are valid if they're it will log the user in and push them to the dashboard
  // if the credentials are invalid then it will display an error to inform the user
  onLogin = ev => {
    ev.preventDefault();
    const { username, password } = ev.target;
    console.log('user: ' + username.value, 'pass: ' + password.value);

    AuthService.postLogin({
      username: username.value,
      password: password.value
    }).then(res => {
      console.log('respone:' + res);
      this.context.processLogin(res.authToken);
      this.onSuccessfulLogin();
    });
  };

  render() {
    return (
      <div className='Login'>
        <p>{this.context.error ? this.context.error : ''}</p>
        <form onSubmit={this.onLogin}>
          <label htmlFor='Username'>Username</label>
          <input className='Username' name='username' type='text' required />

          <label htmlFor='Password'>Password</label>
          <input
            type='password'
            name='password'
            required
            className='Password'
          />

          <div>
            <button type='submit' className='Login_button'>
              Login
            </button>
            <Link to='/Register' className='new'>
              New user?
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
