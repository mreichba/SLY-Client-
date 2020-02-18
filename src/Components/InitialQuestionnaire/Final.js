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
            <p>{this.props.values.Age}</p>
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
        <div>
          <button onClick={this.props.prev}>Back</button>
          <button onClick={this.submit}>Confirm & Submit</button>
        </div>
      </div>
    );
  }
}
