import React, { Component } from 'react';
import HomeLayout from '../components/home';

class Home extends Component {

  render() {
    return (
      <div style={{ height: '80vh', padding: '10px 0 15px 0' }}>
        <HomeLayout />
      </div>
    );
  }
}

export default Home;
