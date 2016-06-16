//entry point for flux application

import React from 'react';
import ReactDOM from 'react-dom';

//Router components

import { Router, Route, Link, hashHistory } from 'react-router';

import SampleComponent from './components/core/sample.react';

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={SampleComponent} />
    </Router>
  ),
  document.getElementById('target-node')
);