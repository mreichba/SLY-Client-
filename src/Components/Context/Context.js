import React from 'react';
import AuthService from '../../Helpers/AuthService';
import TokenService from '../../Helpers/TokenService';
import IdleService from '../../Helpers/IdleService';

const Context = React.createContext({
  processLogin: () => {},
  processLogout: () => {},
  setUser: () => {},
  currentUser: {},
  setError: () => {},
  clearError: () => {},
  error: null
});

export default Context;

export class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      error: null
    };

    const jwtPayload = TokenService.parseAuthToken();

    if (jwtPayload)
      this.state.currentUser = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub
      };

    IdleService.setIdleCallback(this.logoutBecauseIdle);
  }

  // when the app mounts it checks if the user has a api token in their browsers local storage
  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      // sets expiration timer for the users api token
      IdleService.regiserIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        this.fetchRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  // sets the error value when called
  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  // sets the error value in state back to null
  clearError = () => {
    this.setState({ error: null });
  };

  // sets the current loggedin users data in state
  setUser = user => {
    this.setState({ currentUser: user });
  };

  // when a user logs in this function is triggered and it saves the users api token
  // to the user's brower local storage and stores the users data in state
  processLogin = authToken => {
    TokenService.saveAuthToken(authToken);
    const jwtPayload = TokenService.parseAuthToken();
    this.setUser({
      currentUser: {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub
      }
    });
    IdleService.regiserIdleTimerResets();
    TokenService.queueCallbackBeforeExpiry(() => {
      this.fetchRefreshToken();
    });
  };

  // when a user logs out this function is called and it clears the user's api token from
  // their browsers local storage also it clears the value of currentUser in state
  processLogout = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.setUser({ currentUser: {} });
  };

  logoutBecauseIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.setUser({ idle: true });
  };

  // function that grabs the user's new unexpired api token and stores it in their browsers local storage
  fetchRefreshToken = () => {
    AuthService.refreshToken()
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        TokenService.queueCallbackBeforeExpiry(() => {
          this.fetchRefreshToken();
        });
      })
      .catch(err => {
        this.setError(err);
      });
  };

  render() {
    const value = {
      currentUser: this.state.currentUser,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
