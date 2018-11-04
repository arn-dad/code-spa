import React from 'react';
import { Tab } from 'semantic-ui-react';
import Home from './pages/home';
import Grid from './pages/grid';
import Chart from './pages/chart';
import Routing from './routes/routes'


const panes = [
  {
    menuItem : 'Home',
    render   : () => <Tab.Pane><Home /></Tab.Pane>
  },
  {
    menuItem : 'Grid',
    render   : () => (
      <Tab.Pane>
        <Grid />
      </Tab.Pane>
    )
  },
  {
    menuItem : 'Chart',
    render   : () => <Tab.Pane><Chart /></Tab.Pane>
  }
];

const App = () => (
  <div>
    <h1 style={{ marginLeft: '10px' }}>Route Based approach</h1>
    <Routing />
  </div>
);

export default App;
