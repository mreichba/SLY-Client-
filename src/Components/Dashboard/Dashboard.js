import React from 'react';
import Context from '../Context/Context';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import SlideMenu from '../Slide-Menu/Slide-Menu';
import QuizService from '../../Helpers/QuizService';
import InitialQuiz from '../InitialQuestionnaire/Functionality';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      initialQuizComplete: null,
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

  componentDidMount() {
    QuizService.initialQuizStatus(this.context.user.id).then(res =>
      this.setState({ initialQuizComplete: res, isLoading: false })
    );
  }

  Loader = () => {
    return this.state.isLoading ? <h1>Loading...</h1> : this.initial();
  };

  initial = () => {
    if (this.state.initialQuizComplete) {
      return (
        <div>
          <h1>Dashboard</h1>
          <div>
            <button onClick={this.toggleSlide}>
              <i class='fas fa-chevron-left'></i>
              <h3>blah</h3>
            </button>
            <SlideMenu toggleSlide={this.toggleSlide} open={this.state.open} />
          </div>

          <h2>Welcome back, {this.context.user.name}!</h2>

          <Link to='/learn'>
            <button>Start practicing</button>
          </Link>
          <div className='infoArea'>
            <div className='infoHeader'>
              <h3>Next Question</h3>
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
