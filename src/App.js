import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './Routes/Landing/Landing';
import Login from './Routes/Login/Login';
import Register from './Routes/Register/Register';
import Boundary from './Routes/Boundary/Boundary';
import { ContextProvider } from './Components/Context/Context';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ContextProvider>
          <Switch>
            <Route
              render={routeProps => {
                return <Landing {...routeProps} />;
              }}
            />
            <Route
              render={routeProps => {
                return <Login {...routeProps} />;
              }}
            />
            <Route
              render={routeProps => {
                return <Register {...routeProps} />;
              }}
            />
            <Route
              render={routeProps => {
                return <Boundary {...routeProps} />;
              }}
            />
          </Switch>
        </ContextProvider>
      </div>
    );
  }
}

export default App;
