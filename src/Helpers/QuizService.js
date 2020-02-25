import config from '../config';

const QuizService = {
  // api call used to submit users initial questionnaire data to db
  submitInitialQuiz(answers, auth) {
    return fetch(`${config.API_ENDPOINT}/initial`, {
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
  // api call used to check if the current logged in user has completed their initial quiz
  initialQuizStatus(user_id, auth) {
    return fetch(`${config.API_ENDPOINT}/initial/${user_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // TEMP API CALL
  getAllQuizes(auth) {
    return fetch(`${config.API_ENDPOINT}/questions/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // api call that returns all the questions and answer selections for a given topic
  getQuizByTopic(topic, auth) {
    return fetch(`${config.API_ENDPOINT}/questions/topic/${topic}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // gets a particular quiz question via its question_id
  getQuiz(question_id, auth) {
    return fetch(`${config.API_ENDPOINT}/questions/${question_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // gets a particular quiz answers via its question_id
  getQuizAnswers(question_id, auth) {
    return fetch(`${config.API_ENDPOINT}/answers/${question_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // api call that checks if the current logged user has completed the quiz their currently trying to access
  checkIfQuizCompleted(question_id, user_id, auth) {
    return fetch(`${config.API_ENDPOINT}/answers/${question_id}/${user_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // api call that returns all the quizes the currently logged in user HASN'T completed currently
  getNonCompleted(user_id, auth) {
    return fetch(`${config.API_ENDPOINT}/initial/noncompleted/${user_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // api call that returns all the quizes the currently logged in user HAS completed
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
