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
  onSuccessfulRegistration = () => {
    const { history } = this.props;
    history.push('/');
  };

  // when a user clicks login the app takes the users login credentials and makes a api call
  // to check if credentials are valid if they're it will log the user in and push them to the dashboard
  // if the credentials are invalid then it will display an error to inform the user
  onLogin = ev => {
    ev.preventDefault();
    const { Username, Password } = ev.target;

    AuthService.postLogin(Username.value, Password.value)
      .then(res => {
        this.context.processLogin(res.authToken);
        this.onSuccessfulLogin();
      })
      .catch(err => this.context.setError(err));
  };

  render() {
    return (
      <div className='Login'>
        <p>{this.context.error ? this.context.error : ''}</p>
        <form onSubmit={this.onLogin}>
          <label for='Username'>Username</label>
          <input name='Username' type='text' required />

          <label for='Password'>Password</label>
          <input type='password' required name='Password' />

          <div>
            <button type='submit'>Login</button>
            <Link to='/Register' class='new'>
              New user?
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
