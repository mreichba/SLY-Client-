import React from 'react';

export default class Nationality extends React.Component {
  render() {
    return (
      <div className='Nationality'>
        <form>
          <label for='Nationailty'>What is your nationality?</label>
          <select
            name='Nationailty'
            required
            onChange={this.props.handleChange('Nationailty')}
          >
            <option disabled selected>
              Choose an option
            </option>
            <option value=' United States'> United States</option>
            <option value=' United Kingdom'> United Kingdom</option>
            <option value='Scotland'>Scotland</option>
            <option value=' Northern Ireland'> Northern Ireland</option>
            <option value='Denmark'>Denmark</option>
            <option value='Finland'>Finland</option>
            <option value='Norway'>Norway</option>
            <option value='Sweden'>Sweden</option>
            <option value='Switzerland'>Switzerland</option>
            <option value='Estonia'>Estonia</option>
            <option value='Latvia'>Latvia</option>
            <option value='Lithuania'>Lithuania</option>
            <option value='Austria'>Austria</option>
            <option value='Belgium'>Belgium</option>
            <option value='France'>France</option>
            <option value='Germany'>Germany</option>
            <option value='Italy'>Italy</option>
            <option value='Netherlands'>Netherlands</option>
            <option value='Canada'>Canada</option>
            <option value='Mexico'>Mexico</option>
            <option value='Ukraine'>Ukraine</option>
            <option value='Russia'>Russia</option>
            <option value='Belarus'>Belarus</option>
            <option value='Poland'>Poland</option>
            <option value='Czech Republic'>Czech Republic</option>
            <option value='Slovakia'>Slovakia</option>
            <option value='Hungary'>Hungary</option>
            <option value='Romania'>Romania</option>
            <option value='Bulgaria'>Bulgaria</option>
            <option value='Greece'>Greece</option>
            <option value='Spain'>Spain</option>
            <option value='Brazil'>Brazil</option>
            <option value='Portugal'>Portugal</option>
            <option value='Australia'>Australia</option>
            <option value='New Zealand'>New Zealand</option>
            <option value='Georgia'>Georgia</option>
            <option value='Israel'>Israel</option>
            <option value='Egypt'>Egypt</option>
            <option value='Turkey'>Turkey</option>
            <option value='China'>China</option>
            <option value='Korea'>Korea</option>
            <option value='Japan'>Japan</option>
            <option value='India'>India</option>
            <option value='South Africa'>South Africa</option>
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
