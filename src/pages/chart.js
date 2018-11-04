import React, { Component } from 'react';
import CustomChart from '../components/chart';

class Chart extends Component {
  componentWillMount() {
    console.log('Chart did mount');
  }

  render() {
    return (
      <div style={{ height: '85vh', padding: '10px 0 15px 0' }}>
        <CustomChart />
      </div>
    );
  }
}

export default Chart;
