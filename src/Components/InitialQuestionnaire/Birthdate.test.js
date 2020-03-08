import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Birthdate from './Functionality';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Birthdate />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
