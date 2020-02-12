import config from '../config';
import TokenService from './TokenService';

const AuthService = {
  // api call used to create user accounts
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  // api call used to log in users
  postLogin({ username, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/token`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(res =>
      !res.ok ? res.json().then(err => Promise.reject(err)) : res.json()
    );
  },

  // api call that gets the users new api token
  refreshToken() {
    return fetch(`${config.API_ENDPOINT}/auth/token`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default AuthService;
