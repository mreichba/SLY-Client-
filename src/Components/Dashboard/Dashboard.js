import React from 'react';
import Context from '../Context/Context';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import SlideMenu from '../Slide-Menu/Slide-Menu';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  static contextType = Context;
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
  };

  // toogles slide component open/close
  toggleSlide = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  componentDidMount() { }

  render() {
    return (
      <div className='dashboardContainer'>
        <h1 className='dash-header'><span className='accent'>S</span>omeone <span className='accent'>L</span>ike <span className='accent'>Y</span>ou</h1>
        <div className='dash-menu'>
          <button onClick={this.toggleSlide} className='dash-slide'>
            <i class='fas fa-chevron-left'></i>
          </button>
          <SlideMenu toggleSlide={this.toggleSlide} open={this.state.open} />
        </div>

        <h2 className='dash-welcome'>Welcome back, {this.context.user.name}!</h2>
        <button className='dash-prac-button'>
          <Link to='/learn'>
            Start practicing
          </Link>
        </button>
        <div className='infoArea'>

        </div>
      </div>
    );
  }
}

export default Dashboard;
