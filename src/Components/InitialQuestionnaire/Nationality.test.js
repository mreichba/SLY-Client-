import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Nationality from './Functionality';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Nationality />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
