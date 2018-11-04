import React from 'react';
import { Loader } from '../utils/index';


export default class DynamicComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { Component: null };
  }

  componentDidMount() {
    setTimeout(this.loadComponent(), 1500)
    
  }
  loadComponent = () => {
    const { loader } = this.props;
    loader().then( (Component) => {
        this.setState({ Component: Component.default })
    }).catch((err) => {
      console.log('Error', err)
    })
  }

  componentWillUnmount() {}

  render() {
    const { Component } = this.state;
    const { props } = this.props;
    return  Component ? <Component {...props} /> : <Loader size='large'/>;
  }
}
