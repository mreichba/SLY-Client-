import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import InitialQuestions from './Functionality';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <InitialQuestions />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
