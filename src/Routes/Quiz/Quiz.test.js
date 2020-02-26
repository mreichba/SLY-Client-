import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Quiz from './Quiz';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Route>
        render={componentProps => {
          return <Quiz {...componentProps} />
        }}
      </Route>
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});