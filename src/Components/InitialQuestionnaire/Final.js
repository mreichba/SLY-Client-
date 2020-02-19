import React from 'react';
import QuizService from '../../Helpers/QuizService';
import Context from '../Context/Context';

export default class Final extends React.Component {
  static contextType = Context;
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  // when a user successfully submits their quiz in the app it will push them to the app's dashboard
  onSuccessfulSubmit = () => {
    const { history } = this.props;
    history.push('/Dashboard');
  };

  // submits the user's final answers to the database to save to the user's account
  submit = ev => {
    ev.preventDefault();

    if (this.props.values.Birthdate === undefined) {
      return this.setState({
        error: 'You must input your birthdate before submitting'
      });
    } else if (this.props.values.Location === undefined) {
      return this.setState({
        error: 'You must input your location before submitting'
      });
    } else if (this.props.values.Nationality === undefined) {
      return this.setState({
        error: 'You must select your nationality before submitting'
      });
    } else if (this.props.values.Gender === undefined) {
      return this.setState({
        error: 'You must select your gender before submitting'
      });
    } else if (this.props.values.CollegeGraduate === undefined) {
      return this.setState({
        error: 'You must select your college graduate status before submitting'
      });
    } else {
      const answers = {
        user_id: this.context.user.id,
        birthdate: this.props.values.Birthdate,
        location: this.props.values.Location,
        nationality: this.props.values.Nationality,
        gender: this.props.values.Gender,
        college_graduate: this.props.values.CollegeGraduate
      };

      // uses a helper function to make the api call to our api then checks if the response was okay if so it sends the user back to the dashboard if no then it keeps the user on the final component informing them about the error
      QuizService.submitInitialQuiz(answers).then(res =>
        res.ok ? this.onSuccessfulSubmit() : ''
      );
    }
  };

  render() {
    return (
      <div className='Final'>
        <ul>
          <li>
            <h5>Birthdate:</h5>
            <p>{this.props.values.Birthdate}</p>
          </li>
          <li>
            <h5>Location:</h5>
            <p>{this.props.values.Location}</p>
          </li>
          <li>
            <h5>Nationality:</h5>
            <p>{this.props.values.Nationality}</p>
          </li>
          <li>
            <h5>Gender:</h5>
            <p>{this.props.values.Gender}</p>
          </li>
          <li>
            <h5>College Graduate:</h5>
            <p>{this.props.values.CollegeGraduate}</p>
          </li>
        </ul>
        <div className='final-buttons'>
          <button onClick={this.props.prev} className='init-prev'>
            Back
          </button>
          <button onClick={this.submit} className='init-submit'>
            Confirm & Submit
          </button>
        </div>
        <h5>{this.state.error}</h5>
      </div>
    );
  }
}
