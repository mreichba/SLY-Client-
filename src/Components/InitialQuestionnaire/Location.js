import React from 'react';

export default class Location extends React.Component {
  render() {
    return (
      <div className='Location'>
        <form>
          <label for='Location'>Where are you located?</label>
          <input
            name='Location'
            type='text'
            required
            onChange={this.props.handleChange('Location').toLowerCase()}
          />
          <div>
            <button onClick={this.props.prev}>Back</button>
            <button onClick={this.props.next}>Next</button>
          </div>
        </form>
      </div>
    );
  }
}
