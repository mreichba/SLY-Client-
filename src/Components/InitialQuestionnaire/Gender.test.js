import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Gender from './Functionality';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Gender />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
