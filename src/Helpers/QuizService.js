import config from '../config';

const QuizService = {
  // api call used to submit users initial questionnaire data to db
  submitInitialQuiz(answers) {
    return fetch(`${config.API_ENDPOINT}/users/initial`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(answers)
    }).then(res =>
      !res.ok ? res.json().then(e => this.context.setError(e)) : res.json()
    );
  },
  initialQuizStatus(user_id) {
    return fetch(`${config.API_ENDPOINT}/users/initial/${user_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default QuizService;
