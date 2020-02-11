import React from 'react';
import './Boundary.css';
import { Link } from 'react-router-dom';

export default class Boundary extends React.Component {
  render() {
    return (
      <div className='Boundary'>
        <h1>
          Looks like your lost <Link to='/'>follow me back</Link>
        </h1>
      </div>
    );
  }
}
