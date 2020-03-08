import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CollegeGraduate from './Functionality';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CollegeGraduate />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
