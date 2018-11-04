import React, { Component } from 'react';
import DynamicComponent from '../components/dynamicComponent';

class Chart extends Component {
  componentWillMount() {
    console.log('Chart did mount');
  }

  render() {
    return (
      <div style={{ height: '85vh', padding: '10px 0 15px 0' }}>
         <DynamicComponent loader={() => import(/* webpackChunkName: "chart" */ '../components/chart')} />
      </div>
    );
  }
}

export default Chart;
