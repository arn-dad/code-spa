import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'babel-polyfill';
import 'semantic-ui-css/semantic.min.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

render(<App />, document.getElementById('app'));
