import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { CustomPlaceholder, PlaceholderImage, PlaceholderContect } from '../utils';

class HomeLayout extends Component {
  render() {
    return (
      <div>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <PlaceholderImage />
            </Grid.Column>
            <Grid.Column width={9}>
              <PlaceholderContect />
            </Grid.Column>
            <Grid.Column width={4}>
              <CustomPlaceholder />
              <CustomPlaceholder />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <PlaceholderImage />
            </Grid.Column>
            <Grid.Column width={9}>
              <PlaceholderContect />
            </Grid.Column>
            <Grid.Column width={4}>
              <CustomPlaceholder />
              <CustomPlaceholder />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default HomeLayout;
