import config from '../config';

const QuizService = {
  // api call used to submit users initial questionnaire data to db
  submitInitialQuiz(answers, auth) {
    return fetch(`${config.API_ENDPOINT}/users/initial`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      },
      body: JSON.stringify(answers)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  initialQuizStatus(user_id, auth) {
    return fetch(`${config.API_ENDPOINT}/users/initial/${user_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getNonCompleted(user_id, auth) {
    return fetch(
      `${config.API_ENDPOINT}/users/initial/noncompleted/${user_id}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${auth}`
        }
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getCompleted(user_id, auth) {
    return fetch(`${config.API_ENDPOINT}/questions/completed/${user_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default QuizService;
