import React, { Component, Fragment } from 'react'
import { Menu } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import DynamicComponent from '../components/dynamicComponent';
import Home from '../pages/home';


const Grid = (props) => (
  <DynamicComponent loader={() => import(/* webpackChunkName: "grid" */ '../components/grid')} />
)

const Chart = (props) => (
  <DynamicComponent loader={() => import(/* webpackChunkName: "chart" */ '../components/chart')} />
)

export default class Routing extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
        <Fragment>
          <Menu tabular>
            <Menu.Item name='home' active={activeItem === 'bio'} onClick={this.handleItemClick}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item to='/grid' name='grid' active={activeItem === 'photos'} onClick={this.handleItemClick} >
              <Link to='/grid'>Grid</Link>
            </Menu.Item>
            <Menu.Item name='chart' active={activeItem === 'photos'} onClick={this.handleItemClick} >
              <Link to='/chart'>Chart</Link>
            </Menu.Item>
          </Menu>
          
          // sync route
          <Route exact path='/' component={Home} />

          // async routes
          <Route path='/grid' component={Grid} />
          <Route path='/chart' component={Chart} />
        </Fragment>
      </Router>
    )
  }
}