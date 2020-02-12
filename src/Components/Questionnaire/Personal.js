import React from 'react';

export default class Personal extends React.Component {
  render() {
    return (
      <div className='Personal'>
        <form>
          <label for='Age'>Age Group</label>
          <select name='Age' required onChange={this.props.handleChange('Age')}>
            <option disabled selected>
              Choose an option
            </option>
            <option value='child'>0 - 12</option>
            <option value='teen'>13 - 20</option>
            <option value='young adult'>21-30</option>
            <option value='adult'>31-50</option>
            <option value='middle age'>51-70</option>
            <option value='senior'>71-120</option>
          </select>
          <label for='Location'>Location</label>
          <input
            name='Location'
            type='text'
            required
            onChange={this.props.handleChange('Location')}
          />
          <div>
            <button onClick={this.props.next}>Next</button>
          </div>
        </form>
      </div>
    );
  }
}
