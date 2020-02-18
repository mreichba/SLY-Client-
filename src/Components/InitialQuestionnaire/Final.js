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
            <h5>Birthdate:</h5>
            <p>{this.props.values.Birthdate}</p>
          </li>
          <li>
            <h5>Location:</h5>
            <p>{this.props.values.Location}</p>
          </li>
          <li>
            <h5>Nationality:</h5>
            <p>{this.props.values.Nationality}</p>
          </li>
          <li>
            <h5>Gender:</h5>
            <p>{this.props.values.Gender}</p>
          </li>
          <li>
            <h5>College Graduate:</h5>
            <p>{this.props.values.CollegeGraduate}</p>
          </li>
        </ul>
        <div className="final-buttons">
          <button onClick={this.props.prev} className='init-prev'>Back</button>
          <button onClick={this.submit} className='init-submit'>Confirm & Submit</button>
        </div>
      </div>
    );
  }
}
