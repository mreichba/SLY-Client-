import React from 'react';

export default class Activity extends React.Component {
  render() {
    return (
      <div className='Activity'>
        <form>
          <label for='Hobby'>Favorite Hobby</label>
          <select
            name='Hobby'
            required
            onChange={this.props.handleChange('Hobby')}
          >
            <option disabled selected>
              Choose an option
            </option>
            <option value='Gamer'>Video Games</option>
            <option value='Artist'>Art</option>
            <option value='Reader'>Reading</option>
            <option value='Music'>Music</option>
            <option value='Athlete'>Sports</option>
            <option value='Outdoors'>Outdoors Activities</option>
            <option value='Motorhead'>Cars</option>
            <option value='Collector'>Collector</option>
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
