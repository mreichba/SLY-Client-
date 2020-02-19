import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './Routes/Landing/Landing';
import Login from './Routes/Login/Login';
import Register from './Routes/Register/Register';
import Boundary from './Routes/Boundary/Boundary';
import PrivateRoute from './Routes/Service-Routes/PrivateRoute';
import PublicRoute from './Routes/Service-Routes/PublicRoute';
import { ContextProvider } from './Components/Context/Context';
import Nav from './Components/Nav/Nav';
import Dashboard from './Components/Dashboard/Dashboard';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ContextProvider>
          <Nav />
          <Switch>
            <PublicRoute
              exact
              path='/'
              component={Landing}
            />
            <PublicRoute
              exact
              path='/Login'
              component={Login}
            />
            <PublicRoute
              exact
              path='/Register'
              component={Register}
            />
            <PrivateRoute
              exact
              path='/Dashboard'
              component={Dashboard}
            />
            <Route
              component={Boundary}
            />
          </Switch>
        </ContextProvider>
      </div>
    );
  }
}

export default App;
