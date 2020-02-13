import React from 'react';
import SideBar from './Sidebar';
import Context from '../Context/Context';
import { Link } from 'react-router-dom';
import './Dashboard.css';

// note still have work to do, working on implementing the side bar
// and main questionnaire area, used some code from last capstone as starter
// export default function Dashboard() {
//   return (
//     <div id="Dashboard">
//       <SideBar />
//       <div id="page-wrap">
//         <h1>Sidebar</h1>
//         <h2>Placeholder</h2>
//       </div>
//     </div>
//   );
// }

class Dashboard extends React.Component {
  static contextType = Context
  static defaultProps = {
    language: {
      name: 'Default Language',
      total_score: 0
    },
    user: {
      user: {
        name: 'Default username'
      }
    }
  }

  componentDidMount() {

  }



  render() {
    console.log(this.context)
    return (
      <div className="dashboardContainer">
        <SideBar className='sideBar' />
        <div id="page-wrap">
          <h1>AppDividend</h1>
          <h2>Check out our tutorials the side menubar</h2>
        </div>
        {/* <h2>Welcome back, {this.context.currentUser}!
          </h2>

        <Link to='/learn'>
          <button>Start practicing</button>
        </Link>
        <div className="infoArea">
          <div className="infoHeader"><h3>Next Question</h3></div>

        </div> */}
      </div>
    )
  }
}

export default Dashboard;