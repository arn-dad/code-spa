import React, { Component } from 'react';
import CoustomGrid from '../components/grid';
import DynamicComponent from '../components/dynamicComponent';

class Grid extends Component {
  componentWillMount() {

  }

  componentDidMount() {
    console.log('Grid did mount');
  }


  render() {
    return (
      <div style={{ height: '80vh', padding: '10px 0 15px 0' }}>
        <DynamicComponent loader={() => import(/* webpackChunkName: "grid" */ '../components/grid')} />
      </div>
    );
  }
}

export default Grid;
