import config from '../config';

const StatsService = {
  // Api call that returns the user's personal stats for the particalur quiz
  getUserQuizStats(question_id, auth) {
    return fetch(`${config.API_ENDPOINT}/stats/user/${question_id}`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default StatsService;
