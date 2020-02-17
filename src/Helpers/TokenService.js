import jwtDecode from 'jwt-decode';

let _timeoutId;
const _TEN_SECONDS_IN_MS = 10000;

const TokenService = {
  // saves the user's current api token to their browsers local storage
  saveAuthToken(token) {
    window.localStorage.setItem('authToken', token);
  },
  // gets the user's current api token from their browsers local storage
  getAuthToken() {
    return window.localStorage.getItem('authToken');
  },
  // clears the user's current api token from their browsers local storage
  clearAuthToken() {
    window.localStorage.removeItem('authToken');
  },
  // checks if the user has a api token stored in their browsrs local storage
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  // parses the user's web token
  parseJwt(jwt) {
    return jwtDecode(jwt);
  },
  // creates the user's web token
  parseAuthToken() {
    const authToken = TokenService.getAuthToken();
    if (authToken) return TokenService.parseJwt(authToken);
    else return undefined;
  },
  // sets api token expiration timer
  _getMsUntilExpiry(payload) {
    return payload.exp * 1000 - Date.now();
  },
  queueCallbackBeforeExpiry(callback) {
    const msUntilExpiry = TokenService._getMsUntilExpiry(
      TokenService.parseAuthToken()
    );
    _timeoutId = setTimeout(callback, msUntilExpiry - _TEN_SECONDS_IN_MS);
  },
  clearCallbackBeforeExpiry() {
    clearTimeout(_timeoutId);
  }
};

export default TokenService;
