import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Boundary from './Boundary';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Boundary />
    </BrowserRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});