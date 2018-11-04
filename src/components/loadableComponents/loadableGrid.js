import React, { Component } from 'react';
import { CustomPlaceholder, PlaceholderImage, PlaceholderContect, Loader } from '../utils';
import CustomGrid from '../grid'

export default class LoadableGrid extends Component {
  render() {
    const style = {
      height: '100%',
    }
    return (
      <div style={style}>
       <CustomGrid />
      </div>
    );
  }
}