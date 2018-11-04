import React, { Component } from 'react';
import {
  Pie, Line, Radar, Polar, Doughnut
} from 'react-chartjs-2';
import { Grid } from 'semantic-ui-react';
import {
  CustomPlaceholder, PlaceholderFluid
} from '../utils';
import {
  dataSets
} from './data';


class CustomChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        pieData      : dataSets.pieData(),
        chartData    : dataSets.chartData(),
        radarData    : dataSets.radarData(),
        doughnutData : dataSets.doughnutData(),
        polarData    : dataSets.polarData()
      },
      intervalIds: []
    };
    this.updateCharts = () => {
      const { data } = this.state;
      Object.keys(data).forEach((chartName) => {
        let timerId = setInterval(() => {
          this.setState(prevState => ({
            ...prevState,
            data: {
              ...prevState.data,
              [chartName]: dataSets[chartName]()
            },
            intervalIds: [...prevState.intervalIds, timerId]
          }));
        }, (Math.floor(Math.random() * 3) + 2) * 1000);
      });
    };
  }

  componentDidMount() {
    this.updateCharts();
  }

  componentWillUnmount() {
    const { data, intervalIds } = this.state;
    Object.keys(data).forEach((chartName) => {
      clearInterval(intervalIds[chartName]);
    });
  }

  render() {
    const {
      data:{
        doughnutData, polarData, chartData, pieData, radarData
      }
    } = this.state;
    return (
      <div style={{ height: '80%' }}>
        <Grid divided="vertically">
          <Grid.Row columns={3}>
            <Grid.Column>
              <Line data={chartData} height={140} />
            </Grid.Column>
            <Grid.Column width={10}>
              <PlaceholderFluid />
              <PlaceholderFluid />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Pie data={pieData} height={120} />
            </Grid.Column>
            <Grid.Column>
              <CustomPlaceholder />
            </Grid.Column>
            <Grid.Column>
              <Radar data={radarData} height={120} />
            </Grid.Column>
            <Grid.Column>
              <CustomPlaceholder />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={4}>
            <Grid.Column>
              <Polar data={polarData} height={120} />
            </Grid.Column>
            <Grid.Column>
              <CustomPlaceholder />
            </Grid.Column>
            <Grid.Column>
              <Doughnut data={doughnutData} height={120} />
            </Grid.Column>
            <Grid.Column>
              <CustomPlaceholder />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default CustomChart;
