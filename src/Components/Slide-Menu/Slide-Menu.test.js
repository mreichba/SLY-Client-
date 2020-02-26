import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SlideMenu from './Slide-Menu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SlideMenu />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});