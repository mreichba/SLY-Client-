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
    QuizHelper.getNonCompleted(
      this.props.quizView,
      TokenService.getAuthToken()
    ).then(res => this.setState({ quizzes: res, isLoading: false }));
  }

  // always checking for a new view val from parent
  componentDidUpdate() {
    if (this.props.quizView === 'incomplete') {
      QuizHelper.getNonCompleted(
        this.props.quizView,
        TokenService.getAuthToken()
      ).then(res => this.setState({ quizzes: res, isLoading: false }));
    } else if (this.props.quizView === 'completed') {
      QuizHelper.getCompleted(
        this.props.quizView,
        TokenService.getAuthToken()
      ).then(res => this.setState({ quizzes: res, isLoading: false }));
    } else if (this.props.quizView === 'topic') {
      console.log('topic api call here');
    }
  }

  ifLoading = () => {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    } else {
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
    }
  };
  render() {
    return <div className='QuizContainer'>{this.ifLoading()}</div>;
  }
}
