import React from 'react';
import Context from '../Context/Context';
import './QuizContainer.css';
import QuizHelper from '../../Helpers/QuizService';
import TokenService from '../../Helpers/TokenService';
import { Link } from 'react-router-dom';

export default class QuizContainer extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      quizzes: []
    };
  }

  // when the component mounts the app makes api calls to get the users completed/non-completed
  // quizes from the database and saves them in state
  componentDidMount() {
    // always gonna mount as incomplete because of initial state val
    QuizHelper.getSortedQuizzes(
      this.props.quizView,
      TokenService.getAuthToken()
    ).then(res => this.setState({ quizzes: res, isLoading: false }));
  }

  // always checking for a new view val from parent
  componentDidUpdate(prevProps) {
    const viewChanged = prevProps.quizView !== this.props.quizView;
    const refreshChanged = prevProps.refreshKey !== this.props.refreshKey;
  
    if (viewChanged || refreshChanged) {
      this.setState({ isLoading: true });
      QuizHelper.getSortedQuizzes(
        this.props.quizView,
        TokenService.getAuthToken()
      )
        .then(res => {
          this.setState({ quizzes: res, isLoading: false });
        })
        .catch(err => {
          console.error(`❌ Error loading ${this.props.quizView} quizzes:`, err);
          this.setState({ quizzes: [], isLoading: false });
        });
    }
  }

  isEmpty = () => {
    return (
      <div className='noQuizes'>
        Looks like you have completed all the quizzes please check back at a
        later time for some new content.
      </div>
    );
  };

  ifLoading = () => {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    } else if (
      this.props.quizView === 'incomplete' &&
      this.state.quizzes.length === 0
    ) {
      return this.isEmpty();
    } else if (this.props.quizView === 'incomplete') {
      return (
        <ul className='quizUL'>
          {this.state.quizzes.map(quiz => {
            return (
              <Link to={`/quiz/${quiz.id}`} key={quiz.id}>
                <li className='quizQuestion'>
                  {quiz.question}
                  <p className='quizTopic'>{quiz.topic}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      );
    } else if (this.props.quizView === 'completed') {
      return (
        <ul className='quizUL'>
          {this.state.quizzes.map(quiz => {
            return (
              <Link to={`/quiz-stats/${quiz.id}`} key={quiz.id}>
                <li className='quizQuestion'>
                  {quiz.question}
                  <p className='quizTopic'>{quiz.topic}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      );
    }
  };
  render() {
    return <div className='QuizContainer'>{this.ifLoading()}</div>;
  }
}
