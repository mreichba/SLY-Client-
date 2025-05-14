import React from 'react';
import Context from '../../Components/Context/Context';
import './Dashboard.css';
import QuizService from '../../Helpers/QuizService';
import InitialQuiz from '../../Components/InitialQuestionnaire/Functionality';
import TokenService from '../../Helpers/TokenService';
import QuizContainer from '../../Components/QuizContainer/QuizContainer';
import InitialStats from '../../Components/Initial-Stats/Initial-Stats';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isLoading: true,
      quizView: 'incomplete',
      refreshKey: Date.now()
    };
  }
  static contextType = Context;
  static defaultProps = {
    history: {
      push: () => { }
    }
  };

  toggleQuizView = view => this.setState({ quizView: view });

  // on mount makes a api call to the database to see if the user has completed the initial quiz
  async componentDidMount() {
    const status = await QuizService.initialQuizStatus(
      TokenService.getAuthToken()
    );
    this.context.setQuizStatus(status);
    this.refreshQuizzes(); // trigger new fetch
    this.setState({ isLoading: false });
  }

  componentDidUpdate() {
    return this.context.user.idle === true
      ? this.props.history.push('/Login')
      : '';
  }

  //gives up to date quiz views as without this they lag and may not show without manual refresh
  refreshQuizzes = () => {
    this.setState({ refreshKey: Date.now() });
  };

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

          <h2 className='dash-welcome'>
            Welcome back, {this.context.user.name}!
          </h2>
          <h3 className='quizHeader'>Your Initial Quiz Results</h3>
          <div className='statsArea'>
            <InitialStats />
          </div>
          <hr />
          <h3 className='quizHeader'>Quizzes</h3>
          <div className='btn-row'>
            <button
              type='button'
              className='quiz-btn'
              onClick={() => this.toggleQuizView('incomplete')}
            >
              New
            </button>
            <button
              type='button'
              className='quiz-btn2'
              onClick={() => this.toggleQuizView('completed')}
            >
              Completed
            </button>
          </div>
          <div className='quizArea'>
            <div className='quizContents'>
              <QuizContainer 
                quizView={this.state.quizView}
                refreshKey={this.state.refreshKey}
              />
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
