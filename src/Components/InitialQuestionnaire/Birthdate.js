import React from 'react';
import './InitialQuestions.css'

export default class Birthdate extends React.Component {
  render() {
    return (
      <div className='Birthdate'>
        <form>
          <label htmlFor='Birthdate'>When were you born?</label>
          <input
            required
            type='date'
            value={this.props.values.Birthdate}
            onChange={this.props.handleChange('Birthdate')}
          />
          <div>
            <button onClick={this.props.next} className='init-next'>Next</button>
          </div>
        </form>
      </div>
    );
  }
}
