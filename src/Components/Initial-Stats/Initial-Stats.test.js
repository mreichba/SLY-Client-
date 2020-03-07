import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import InitialStats from './Initial-Stats';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <InitialStats />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});