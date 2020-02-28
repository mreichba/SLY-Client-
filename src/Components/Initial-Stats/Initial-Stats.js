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
          <h2>Your Initial Quiz Results</h2>
          <ul>
            <li>
              <h5>Birthday</h5>
              {Math.floor(
                (this.state.userData.birthdayMatches /
                  this.state.userData.totalUsers) *
                  100
              )}
              %
            </li>
            <li>
              <h5>Location</h5>
              {Math.floor(
                (this.state.userData.locationMatches /
                  this.state.userData.totalUsers) *
                  100
              )}
              %
            </li>
            <li>
              <h5>Nationality</h5>
              {Math.floor(
                (this.state.userData.nationalityMatches /
                  this.state.userData.totalUsers) *
                  100
              )}
              %
            </li>
            <li>
              <h5>Gender</h5>
              {Math.floor(
                (this.state.userData.genderMatches /
                  this.state.userData.totalUsers) *
                  100
              )}
              %
            </li>
            <li>
              <h5>College Graduates</h5>
              {Math.floor(
                (this.state.userData.collegeGradMatches /
                  this.state.userData.totalUsers) *
                  100
              )}
              %
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
