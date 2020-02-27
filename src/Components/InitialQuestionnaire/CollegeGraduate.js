import React from 'react';
import './InitialQuestions.css'

export default class CollegeGradute extends React.Component {
  render() {
    return (
      <div className='CollegeGradute'>
        <form>
          <label htmlFor='CollegeGradute'>Are you a college graduate?</label>
          <select
            name='CollegeGradute'
            defaultValue='Choose an option'
            required
            onChange={this.props.handleChange('CollegeGraduate')}
          >
            <option disabled value='Choose an option'>
              Choose an option
            </option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
            <option value='Attending'>Attending</option>
          </select>
          <div>
            <button onClick={this.props.prev} className='init-prev'>Back</button>
            <button onClick={this.props.next} className='init-next'>Next</button>
          </div>
        </form>
      </div>
    );
  }
}
