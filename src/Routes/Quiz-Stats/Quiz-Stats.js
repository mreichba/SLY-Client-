import React from 'react';
import './Quiz-Stats.css';
import StatsService from '../../Helpers/StatsService';
import TokenService from '../../Helpers/TokenService';
import { Link } from 'react-router-dom';

export default class QuizStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      stats: null,
      userAnswer: null
    };
  }

  componentDidMount() {
    // api call to to the api to grab the users stats then stores them in state and updates isLoading to false
    StatsService.getUserQuizStats(
      this.props.match.params.question_id,
      TokenService.getAuthToken()
    ).then(response => {
      this.setState({ stats: response, isLoading: false });
    });
  }

  ifLoading = () => {
    // if isLoading is true then it just renders a 'Loading' message
    if (this.state.isLoading) {
      return <h5>Loading...</h5>;
    }
    // if isLoading is false then it means the api call is complete and the page will render the users quiz stats
    else {
      return (
        <div>
          <h1>Your Quiz Results Are In</h1>
          <h3>{this.state.stats.question}</h3>
          <p>
            You chose {this.state.stats.userAnswer}, the most common answer is{' '}
            {this.state.stats.mostCommonUserAnswer}.
          </p>
          <p>
            {this.state.stats.totalUserAnswers} users have answered this quiz
            and {this.state.stats.matchingAnswers.length} users answered the
            same as you
          </p>
          <Link to='/Dashboard'>Home</Link>
        </div>
      );
    }
  };

  render() {
    return <div className='QuizStats'>{this.ifLoading()}</div>;
  }
}
