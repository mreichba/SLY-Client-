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

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  // when a user successfully logs in the app will push them to the app's dashboard
  onSuccessfulLogin = () => {
    const { history } = this.props;
    history.push('/Dashboard');
  };

  // when a user clicks login the app takes the users login credentials and makes a api call
  // to check if credentials are valid if they're it will log the user in and push them to the dashboard
  // if the credentials are invalid then it will display an error to inform the user
  onLogin = ev => {
    ev.preventDefault();
    const { username, password } = ev.target;

    AuthService.postLogin({
      username: username.value.toLowerCase(),
      password: password.value
    })
      .then(res => {
        this.context.processLogin(res.authToken);
        this.onSuccessfulLogin();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className='Login'>
        <h1 className='login-header'>Login</h1>
        <p className='error'>{this.state.error ? <h5>{this.state.error}</h5> : ''}</p>
        <form onSubmit={this.onLogin}>
          <label htmlFor='Username' className='loginLabel'>Username</label>
          <input className='loginInput' name='username' type='text' required />

          <label htmlFor='Password' className='loginLabel'>Password</label>
          <input
            type='password'
            name='password'
            required
            className='loginInput'
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
