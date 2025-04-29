import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='Landing'>
        <h1 className='landing_h1'><span className='accent'>S</span>omeone <span className='accent'>L</span>ike <span className='accent'>Y</span>ou</h1>
        <div className='landingContainer'>
          <p className='mission'>
            Hello and welcome to "Someone Like You"! The app that brings people together through their similarities and differences. Here's how it works: once you sign up for an account, you answer some brief questions about yourself and based off the answers you gave, you are given a comparison rating that shows how similarly or differently you answered compared to everyone else in the world that uses this app. The first set of questions are simple and you'll see results right away, but as you progress the questions and scenarios become more and more intricate and outlandish. What path will you choose?
        </p>
        </div>
        <p className='mission'>
          <h2>**Demo Credentials**</h2>
          Simply create an account to demo, you do not need to use a real email (Ex: john.smith@test.com)
        </p>
        <button className='landing_button'><Link to='/Register'>Create Account</Link></button>
      </div>
    )
  }
}
