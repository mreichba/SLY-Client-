import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Location from './Functionality';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Location />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
