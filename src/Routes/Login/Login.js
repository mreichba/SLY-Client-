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
      push: () => { }
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
        <h1>Login</h1>
        <p>{this.context.error ? this.context.error : ''}</p>
        <form onSubmit={this.onLogin}>
          <label htmlFor='Username'>Username</label>
          <input className='Username' type='text' required />

          <label htmlFor='Password'>Password</label>
          <input type='password' required className='Password' />

          <div>
            <button type='submit' className='Login_button'>Login</button>
            <Link to='/Register' className='new'>New user?</Link>

          </div>
        </form>
      </div>
    );
  }
}
