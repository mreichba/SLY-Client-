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
          {this.state.allQuizes.map((quiz, idx) => {
            return (
              <Link to={`/quiz/${quiz.id}`} key={idx}>
                <li className='quizQuestion'>
                  {quiz.question}
                  {/* <div className='quizDesc'> */}
                  <p className='quizTopic'>{quiz.topic}</p>
                  {/* <p className='quizAnswered'>{quiz.answered}</p> */}
                  {/* </div> */}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
