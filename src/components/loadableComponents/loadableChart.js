import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import  {dataSets}  from '../chart/data';

export default class LoadableChart extends Component {
  render() {
   const {chartData} = dataSets
   
    return (
      <Line data={chartData} height={140}/>
    );
  }
}