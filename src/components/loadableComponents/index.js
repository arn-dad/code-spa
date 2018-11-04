import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Grid } from 'semantic-ui-react';
import { CustomPlaceholder, PlaceholderImage, PlaceholderContect, LoaderAsync } from '../utils';


const LoadableGrid = Loadable({
  loader: () => import('./loadableGrid'),
  loading: LoaderAsync,
});


const LoadableChart = Loadable({
  loader: () => import('./loadableChart'),
  loading: LoaderAsync,
});

class LoadableComponets extends Component {
  render() {
    return (
      <div>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={4}>
              <CustomPlaceholder />
              <CustomPlaceholder />
            </Grid.Column>
            <Grid.Column width={9}>

              <LoadableGrid />

            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4}>
              <CustomPlaceholder />
              <CustomPlaceholder />
            </Grid.Column>
            <Grid.Column width={9}>

              <LoadableChart />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default LoadableComponets;