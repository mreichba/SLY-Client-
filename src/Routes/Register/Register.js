import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Context from '../../Components/Context/Context';
import AuthService from '../../Helpers/AuthService';

export default class Register extends React.Component {
  static contextType = Context;
  static defaultProps = {
    history: {
      push: () => { }
    }
  };

  // if the user's account creation inputs are vaild and the account is created without error
  // the app will push the user to the login route so the user can login to their new account
  onSuccessfulRegistration = () => {
    const { history } = this.props;
    history.push('/Login');
  };

  // when a user clicks create the app takes the user's inputed values and makes api call to check
  // if the values are valid if so then the api will create the account in the database and then
  // the app will push the user to the login route if the values are invalid then the app will display
  // which of the inputed values were invalid to help the user
  onLogin = ev => {
    ev.preventDefault();
    const { FirstName, LastName, Email, Username, Password } = ev.target;
    const newUser = {
      first_name: FirstName.value,
      last_name: LastName.value,
      email: Email.value,
      username: Username.value,
      password: Password.value
    };
    AuthService.postUser(newUser).then(this.onSuccessfulRegistration());
  };

  render() {
    return (
      <div className='Register'>
        <h1 className='reg-header'>Register</h1>
        <p>{this.context.error ? this.context.error : ''}</p>
        <form onSubmit={this.onLogin}>
          <label htmlFor='FirstName'>First Name</label>
          <input type='text' required name='FirstName' />

          <label htmlFor='LastName'>Last Name</label>
          <input type='text' required name='LastName' />

          <label htmlFor='Email'>Email</label>
          <input type='email' required name='Email' />

          <label htmlFor='Username'>Username</label>
          <input type='text' required name='Username' />

          <label htmlFor='Password'>Password</label>
          <input type='password' required name='Password' />

          <div>
            <button type='submit' className='Reg_button'>
              Create Account
            </button>
            <Link to='/Login' className='existing'>
              Already a user?
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
