import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './Routes/Landing/Landing';
import Login from './Routes/Login/Login';
import Register from './Routes/Register/Register';
import Boundary from './Routes/Boundary/Boundary';
import { ContextProvider } from './Components/Context/Context';
import Nav from './Components/Nav/Nav';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <ContextProvider>
          <Switch>
            <Route
              exact
              path='/'
              render={routeProps => {
                return <Landing {...routeProps} />;
              }}
            />
            <Route
              exact
              path='/Login'
              render={routeProps => {
                return <Login {...routeProps} />;
              }}
            />
            <Route
              exact
              path='/Register'
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
