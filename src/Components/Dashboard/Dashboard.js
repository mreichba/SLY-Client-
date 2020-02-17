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

  componentDidMount() {}

  render() {
    return (
      <div className='dashboardContainer'>
        <h1>Dashboard</h1>
        <div>
          <button onClick={this.toggleSlide}>
            <i class='fas fa-chevron-left'></i>
          </button>
          <SlideMenu toggleSlide={this.toggleSlide} open={this.state.open} />
        </div>

        <h2>Welcome back, {this.context.user.name.toCapitilized}!</h2>

        <Link to='/learn'>
          <button>Start practicing</button>
        </Link>
        <div className='infoArea'>
          <div className='infoHeader'>
            <h3>Next Question</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
