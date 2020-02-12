import React from 'react';

export default class Final extends React.Component {
  // submits the user's final answers to the database to save to the user's account
  submit = ev => {
    ev.preventDefault();
    console.log(this.props.values);
  };

  render() {
    return (
      <div className='Final'>
        <ul>
          <li>
            <h5>Age Group:</h5>
            <p>{this.props.values.Age}</p>
          </li>
          <li>
            <h5>Location:</h5>
            <p>{this.props.values.Location}</p>
          </li>
          <li>
            <h5>Favorite Hobby:</h5>
            <p>{this.props.values.Hobby}</p>
          </li>
          <li>
            <h5>Favorite Movie Genre:</h5>
            <p>{this.props.values.MovieGenre}</p>
          </li>
          <li>
            <h5>Favorite Music Genre:</h5>
            <p>{this.props.values.MusicGenre}</p>
          </li>
        </ul>
        <div>
          <button onClick={this.props.prev}>Back</button>
          <button onClick={this.submit}>Confirm & Submit</button>
        </div>
      </div>
    );
  }
}
