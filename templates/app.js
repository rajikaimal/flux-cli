//entry point for flux application

import React from 'react';
import ReactDOM from 'react-dom';

//Router components

import { Router, Route, Link, hashHistory } from 'react-router';

//import SampleComponent from './components/core/Sample.react';

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/sample" component={Sample} />
    </Router>
  ),
  document.getElementById('target-node')
);