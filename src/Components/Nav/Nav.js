import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Helpers/TokenService';
import Context from '../Context/Context';
import './Nav.css';
import Logo from '../../Media/sly-logo.PNG';

class Nav extends Component {
  static contextType = Context;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  //activates mobile menu
  burgerClick = () => {
    let links = document.getElementById('links');
    if (links.className === 'links') {
      links.className += ' null';
    } else {
      links.className = 'links';
    }
  };

  renderLogoutLink() {
    return (
      <div className='logoutBar'>
        {/* <span className='userHeader'>{this.context.user.name}</span> */}
        <nav>
          <img src={Logo} alt='sly logo' className='navLogo' />
          <div
            role='navigation'
            className='burgerIcon'
            id='burger'
            onClick={this.burgerClick}
          >
            {' '}
            &#9776;{' '}
          </div>
          <ul
            aria-live='polite'
            className='links null'
            id='links'
            onClick={this.burgerClick}
          >
            <li>
              <Link
                className='logout'
                onClick={this.handleLogoutClick}
                to='/Login'
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <img src={Logo} alt='sly logo' className='navLogo' />
        <div
          role='navigation'
          className='burgerIcon'
          id='burger'
          onClick={this.burgerClick}
        >
          {' '}
          &#9776;{' '}
        </div>
        <ul
          aria-live='polite'
          className='links null'
          id='links'
          onClick={this.burgerClick}
        >
          <li>
            <Link to='/Login'>Login</Link>
          </li>{' '}
          <li>
            <Link to='/Register'>Sign-Up</Link>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    return (
      <div>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </div>
    );
  }
}

export default Nav;
