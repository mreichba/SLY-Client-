import React from 'react';
import TokenService from '../../Helpers/TokenService';
import QuizService from '../../Helpers/QuizService';
import { Link } from 'react-router-dom';
import Context from '../../Components/Context/Context';

export default class Quiz extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      quizStatus: null,
      quiz: {},
      isLoading: true
    };
  }

  componentDidMount() {
    // runs a api call to the api with the question id & user's id to check if the user has completed the quiz before
    QuizService.checkIfQuizCompleted(
      this.props.match.params.question_id,
      this.context.user.id,
      TokenService.getAuthToken()
    ).then(result => {
      if (result) {
        this.setState({ quizStatus: 'completed', isLoading: false });
      }
      // if the user hasn't completed the given quiz before it will run another api call to grab the questions and answer selections
      // so the user can complete the quiz
      else {
        this.setState({ quizStatus: 'incomplete' }) &&
          QuizService.getQuizByTopic(
            this.props.match.params.topic,
            TokenService.getAuthToken()
          ).then(result =>
            this.setState({ quiz: { result, isLoading: false } })
          );
      }
    });
  }

  getQuestionsAndAnswers = () => {};

  ifLoading = () => {
    // while the app is making it api call and processing all the data it will inform the user its loading
    // so they're not wondering why the page is blank
    if (this.state.isLoading) {
      return (
        <div>
          <h5>Loading...</h5>
        </div>
      );
    }
    // if the user has completed the quiz before it will inform the user and instruct them to go back to the dashboard
    // so they can choose a new quiz
    else if (this.state.quizStatus === 'completed') {
      return (
        <div>
          <h5>Sorry you've already completed this quiz</h5>
          <Link to='/Dashboard'>Back to the dashboard</Link>
        </div>
      );
    }
    // if the user hasn't completed the quiz before it will start the quiz
    else {
      return (
        <div>
          <h1>{this.state.quiz.question}</h1>
        </div>
      );
    }
  };

  render() {
    return <div className='Quiz'>{this.ifLoading()}</div>;
  }
}
