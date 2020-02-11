import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import AuthService from '../../Helpers/AuthService';
import Context from '../../Components/Context/Context';

export default class Login extends React.Component {
  static contextType = Context;
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  onSuccessfulRegistration = () => {
    const { history } = this.props;
    history.push('/');
  };

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
            <Link to='/Register'>New user?</Link>
          </div>
        </form>
      </div>
    );
  }
}
