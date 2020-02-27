import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import QuizContainer from './QuizContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <QuizContainer />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});