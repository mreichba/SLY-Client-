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
  initialQuizStatus(auth) {
    return fetch(`${config.API_ENDPOINT}/initial`, {
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
  checkIfQuizCompleted(question_id, auth) {
    return fetch(
      `${config.API_ENDPOINT}/answers/completedStatus/${question_id}`,
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
  // api call that returns all the quizes the currently logged in user HAS completed
  getSortedQuizzes(status, auth) {  
    return fetch(`${config.API_ENDPOINT}/questions/quizStatus/${status}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .catch(err => {
        console.error(`❌ Failed to load "${status}" quizzes:`, err);
        return [];
      });
  },
  // submits user's quiz answer to the db
  postAnswer(question_id, answer_id, auth) {
    const answer = { question_id, answer_id };
    return fetch(`${config.API_ENDPOINT}/user_answers`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      },
      body: JSON.stringify(answer)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default QuizService;
