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
      allQuizes: [],
      nonCompletedQuizes: [],
      completedQuizes: []
    };
  }

  // when the component mounts the app makes api calls to get the users completed/non-completed
  // quizes from the database and saves them in state
  componentDidMount() {
    QuizHelper.getAllQuizes(TokenService.getAuthToken()).then(res =>
      this.setState({ allQuizes: res })
    );
    // QuizHelper.getNonCompleted(
    //   this.context.user.id,
    //   TokenService.getAuthToken()
    // ).then(res => this.setState({ nonCompletedQuizes: res }));
    // QuizHelper.getCompleted(
    //   this.context.user.id,
    //   TokenService.getAuthToken()
    // ).then(res => this.setState({ completedQuizes: res }));
  }

  render() {
    return (
      <div className='QuizContainer'>
        <ul className='quizUL'>
          {this.state.allQuizes.map(quiz => {
            return (
              <Link to={`/quiz/${quiz.topic}`}>
                <li className='quizTopic'>{quiz.topic}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
