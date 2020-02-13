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

  onSuccessfulRegistration = () => {
    const { history } = this.props;
    history.push('/Login');
  };

  onLogin = ev => {
    ev.preventDefault();
    const { FirstName, LastName, Email, Username, Password } = ev.target;
    const newUser = {
      FirstName: FirstName.value,
      LastName: LastName.value,
      Email: Email.value,
      Username: Username.value,
      Password: Password.value
    };
    AuthService.postUser(newUser)
      .then(this.onSuccessfulRegistration())
      .catch(err => this.context.setError(err));
  };

  render() {
    return (
      <div className='Register'>
        <p>{this.context.error ? this.context.error : ''}</p>
        <form onSubmit={this.onLogin}>
          <label for='FirstName'>First Name</label>
          <input type='text' required name='FirstName' />

          <label for='LastName'>Last Name</label>
          <input type='text' required name='LastName' />

          <label for='Email'>Email</label>
          <input type='email' required name='Email' />

          <label for='Username'>Username</label>
          <input type='text' required name='Username' />

          <label for='Password'>Password</label>
          <input type='password' required name='Password' />

          <div>
            <button type='submit' className='Reg_button'>Create Account</button>
            <Link to='/Login' className='existing'>Already a user?</Link>
          </div>
        </form>
      </div>
    );
  }
}
