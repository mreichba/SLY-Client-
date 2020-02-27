import config from '../config';

const AccountService = {
  // api call that handles delete account request
  deleteAccount(auth) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${auth}`
      }
    });
  },
  // api call that handles account update request
  updateAccount(updatedData, auth) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth}`
      },
      body: JSON.stringify(updatedData)
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  }
};

export default AccountService;
