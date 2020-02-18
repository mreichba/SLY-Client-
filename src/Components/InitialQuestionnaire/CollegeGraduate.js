import React from 'react';

export default class CollegeGradute extends React.Component {
  render() {
    return (
      <div className='CollegeGradute'>
        <form>
          <label for='CollegeGradute'>Are you a college graduate?</label>
          <select
            name='CollegeGradute'
            required
            onChange={this.props.handleChange('CollegeGraduate')}
          >
            <option disabled selected>
              Choose an option
            </option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
            <option value='Attending'>Attending</option>
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
