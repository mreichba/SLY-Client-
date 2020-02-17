import React from 'react';
import { Link } from 'react-router-dom';
import './Slide-Menu.css';
import Context from '../Context/Context';
import TokenService from '../../Helpers/TokenService';

export default class SlideMenu extends React.Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: {} }
  };

  render() {
    return (
      <div
        className={`mobileMenu ${this.props.open ? 'is-open' : 'is-closed'}`}
      >
        <div className={this.props.open}>
          <button className='Close-Menu' onClick={this.props.slideToggle}>
            <i className='fas fa-times'></i>
          </button>
          <div id='Inner-Container'>
            <div id='Account-Options'>
              {TokenService.hasAuthToken() ? (
                <div className='Header__logged-in'>
                  <div className='dropdown'>
                    <button className='dropbtn'>hi</button>
                    <div className='dropdown-content'></div>
                  </div>
                </div>
              ) : (
                <div className='Header__logged-out'>
                  <Link className='mobile-Login' to='/login'>
                    Log in
                  </Link>
                  <Link className='mobile-Register' to='/register'>
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
