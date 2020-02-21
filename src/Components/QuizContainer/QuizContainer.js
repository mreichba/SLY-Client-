import React from 'react';
import Context from '../Context/Context';
import './QuizContainer.css';
import QuizHelper from '../../Helpers/QuizService';
import TokenService from '../../Helpers/TokenService';

export default class QuizContainer extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      nonCompletedQuizes: [],
      completedQuizes: []
    };
  }

  // when the component mounts the app makes api calls to get the users completed/non-completed
  // quizes from the database and saves them in state
  componentDidMount() {
    QuizHelper.getNonCompleted(
      this.context.user.id,
      TokenService.getAuthToken()
    ).then(res => this.setState({ nonCompletedQuizes: res }));
    QuizHelper.getCompleted(
      this.context.user.id,
      TokenService.getAuthToken()
    ).then(res => this.setState({ completedQuizes: res }));
  }

  render() {
    return <div className='QuizContainer'></div>;
  }
}
