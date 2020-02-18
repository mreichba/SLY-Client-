import React from 'react';

export default class Gender extends React.Component {
  render() {
    return (
      <div className='Gender'>
        <form>
          <label for='Gender'>What is your gender?</label>
          <select
            name='Gender'
            required
            onChange={this.props.handleChange('Gender')}
          >
            <option disabled selected>
              Choose an option
            </option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Non-Binary'>Non Binary</option>
          </select>
          <div>
            <button onClick={this.props.prev}>Back</button>
            <button onClick={this.props.next}>Next</button>
          </div>
        </form>
      </div>
    );
  }
}
