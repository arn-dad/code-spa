import React, { Component } from 'react';
import CoustomGrid from '../components/grid';

class Grid extends Component {
  componentWillMount() {
    console.log('Grid did mount');
  }

  render() {
    return (
      <div style={{ height: '80vh', padding: '10px 0 15px 0' }}>
        <CoustomGrid />
      </div>
    );
  }
}

export default Grid;
