import React from 'react';

export default class Gender extends React.Component {
  render() {
    return (
      <div className='Gender'>
        <form>
          <label htmlFor='Gender'>What is your gender?</label>
          <select
            name='Gender'
            required
            defaultValue='Choose an option'
            onChange={this.props.handleChange('Gender')}
          >
            <option disabled value='Choose an option'>
              Choose an option
            </option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Non-Binary'>Non Binary</option>
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
