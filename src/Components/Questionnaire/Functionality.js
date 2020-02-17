import React from 'react';
import Personal from './Personal';
import Activity from './Activity';
import Interest from './Interest';
import Final from './Final';

export default class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      Age: '',
      Location: '',
      Nationality: '',
      Gender: '',
      CollegeGraduate: ''
    };
  }

  // increments the step counter in state so the switch statement will render the next component
  next = ev => {
    ev.preventDefault();
    this.setState({ step: this.state.step + 1 });
  };

  // decrements the step counter in state so the switch statement will render the previous component
  prev = ev => {
    ev.preventDefault();
    this.setState({ step: this.state.step - 1 });
  };

  // updates the state with the user's current answers
  handleChange = input => ev => {
    this.setState({ [input]: ev.target.value });
  };

  render() {
    const values = {
      Age: this.state.Age,
      Location: this.state.Location,
      Nationailty: this.state.Nationality,
      Gender: this.state.Gender,
      CollegeGraduate: this.state.CollegeGraduate
    };

    switch (this.state.step) {
      case 1:
        return (
          <Personal
            next={this.next}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <Activity
            next={this.next}
            prev={this.prev}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <Interest
            next={this.next}
            prev={this.prev}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 4:
        return <Final prev={this.prev} values={values} />;
    }
  }
}
