import React from 'react';
import Context from '../../Components/Context/Context';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import SlideMenu from '../../Components/Slide-Menu/Slide-Menu';
import QuizService from '../../Helpers/QuizService';
import InitialQuiz from '../../Components/InitialQuestionnaire/Functionality';
import TokenService from '../../Helpers/TokenService';
import QuizContainer from '../../Components/QuizContainer/QuizContainer';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isLoading: true
    };
  }
  static contextType = Context;
  static defaultProps = {
    language: {
      name: 'Default Language',
      total_score: 0
    },
    user: {
      user: {
        name: 'Default username'
      }
    }
  };

  // toggles slide component open/close
  toggleSlide = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  // on mount makes a api call to the database to see if the user has completed the initial quiz
  async componentDidMount() {
    const status = await QuizService.initialQuizStatus(
      this.context.user.id,
      TokenService.getAuthToken()
    );
    this.context.setQuizStatus(status);
    this.setState({ isLoading: false });
  }

  // while the on mount api call is processing it renders loading
  Loader = () => {
    return this.state.isLoading ? <h1>Loading...</h1> : this.initial();
  };

  // checks to see if the user has completed the initial quiz if they have then it renders the dashboard if they havent it will render the quiz
  initial = () => {
    if (this.context.initialQuizComplete) {
      return (
        <div className='dashboardContainer'>
          <h1 className='dash-header'>
            <span className='accent'>S</span>omeone{' '}
            <span className='accent'>L</span>ike{' '}
            <span className='accent'>Y</span>ou
          </h1>
          <div className='dash-menu'>
            <button onClick={this.toggleSlide} className='dash-slide'>
              <i class='fas fa-chevron-left'></i>
            </button>
            <SlideMenu toggleSlide={this.toggleSlide} open={this.state.open} />
          </div>

          <h2 className='dash-welcome'>
            Welcome back, {this.context.user.name}!
          </h2>
          <div className='statsArea'>
            STATS GO HERE
          </div>
          <div className='quizArea'>
            <h3 className='quizHeader'>Quizzes</h3>
            <div className='quizContents'>
              <QuizContainer />
            </div>
          </div>
        </div>
      );
    } else {
      return <InitialQuiz />;
    }
  };

  render() {
    return <div className='dashboardContainer'>{this.Loader()}</div>;
  }
}

export default Dashboard;
