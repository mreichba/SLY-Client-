import React from 'react';

export default class Interest extends React.Component {
  render() {
    return (
      <div className='Interest'>
        <form>
          <label for='MovieGenre'>Favorite Movie Genre</label>
          <select
            name='MovieGenre'
            required
            onChange={this.props.handleChange('MovieGenre')}
          >
            <option disabled selected>
              Choose an option
            </option>
            <option value='Horror'>Horror</option>
            <option value='Comedy'>Comedy</option>
            <option value='Romance'>Romance</option>
            <option value='Action'>Action</option>
            <option value='Thrill'>Thrill</option>
          </select>

          <label for='MusicGenre'>Favorite Music Genre</label>
          <select
            name='MusicGenre'
            required
            onChange={this.props.handleChange('MusicGenre')}
          >
            <option disabled selected>
              Choose an option
            </option>
            <option value='Rap'>Rap</option>
            <option value='Country'>Country</option>
            <option value='Pop'>Pop</option>
            <option value='Rock'>Rock</option>
            <option value='Metal'>Metal</option>
            <option value='Alternative'>Alternative</option>
            <option value='Jazz'>Jazz</option>
            <option value='Electronic'>Electronic</option>
            <option value='R&B'>R&B</option>
            <option value='Indie'>Indie</option>
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
