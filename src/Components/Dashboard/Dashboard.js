import React from 'react';
import SideBar from './sidebar';

import './App.css';

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
        <h1>Sidebar</h1>
        <h2>Placeholder</h2>
      </div>
    </div>
  );
}