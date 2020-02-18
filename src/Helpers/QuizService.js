import config from '../config';

const QuizService = {
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
