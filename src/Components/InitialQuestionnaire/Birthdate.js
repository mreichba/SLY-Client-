import React from 'react';

export default class Birthdate extends React.Component {
  render() {
    return (
      <div className='Birthdate'>
        <form>
          <label for='Birthdate'>When were you born?</label>
          <input
            required
            type='date'
            onChange={this.props.handleChange('Birthdate')}
          />
          <div>
            <button onClick={this.props.next}>Next</button>
          </div>
        </form>
      </div>
    );
  }
}
