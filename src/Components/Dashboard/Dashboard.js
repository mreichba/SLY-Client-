import React from 'react';
import SideBar from './sidebar';

import './Dashboard.css';

export default function Dashboard() {
  return (
    <div id="Dashboard">
      <SideBar />
      <div id="page-wrap">
        <h1>Sidebar</h1>
        <h2>Placeholder</h2>
      </div>
    </div>
  );
}