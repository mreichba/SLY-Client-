import React from 'react';
import './Initial-Stats.css';
import StatsService from '../../Helpers/StatsService';
import TokenService from '../../Helpers/TokenService';

export default class InitialStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      userData: null
    };
  }

  componentDidMount() {
    StatsService.getInitialQuizStats(
      TokenService.getAuthToken()
    ).then(response => this.setState({ userData: response, isLoading: false }));
  }

  isLoading = () => {
    if (this.state.isLoading) {
      return <h5>Loading...</h5>;
    } else {
      return (
        <div>
          <ul className='initialUL'>
            <li>
              <h5>Birthday</h5>
              <p className='ans'>{this.state.userData.userData.birthdate}</p>
              <p>{Math.floor(
                (this.state.userData.birthdayMatches /
                  this.state.userData.totalUsers) *
                100
              )}
                % of users matched your answer.</p>
            </li>
            <li>
              <h5>Location</h5>
              <p className='ans'>{this.state.userData.userData.location.charAt(0).toUpperCase() + this.state.userData.userData.location.substring(1)}</p>
              <p>{Math.floor(
                (this.state.userData.locationMatches /
                  this.state.userData.totalUsers) *
                100
              )}
                % of users matched your answer.</p>
            </li>
            <li>
              <h5>Nationality</h5>
              <p className='ans'>{this.state.userData.userData.nationality}</p>
              <p>{Math.floor(
                (this.state.userData.nationalityMatches /
                  this.state.userData.totalUsers) *
                100
              )}
                % of users matched your answer.</p>
            </li>
            <li>
              <h5>Gender</h5>
              <p className='ans'>{this.state.userData.userData.gender}</p>
              <p>{Math.floor(
                (this.state.userData.genderMatches /
                  this.state.userData.totalUsers) *
                100
              )}
                % of users matched your answer.</p>
            </li>
            <li>
              <h5>College Graduate</h5>
              <p className='ans'>{this.state.userData.userData.college_graduate}</p>
              <p>{Math.floor(
                (this.state.userData.collegeGradMatches /
                  this.state.userData.totalUsers) *
                100
              )}
                % of users matched your answer.</p>
            </li>
          </ul>
        </div>
      );
    }
  };

  render() {
    return <div className='InitialStats'>{this.isLoading()}</div>;
  }
}
