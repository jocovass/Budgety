import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from '../history';
import GlobalStyles from '../utilities/styles/GlobalStyles';
import Layout from './hoc/Layout/Layout';


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <GlobalStyles />
        <Layout />
      </Router>
    );
  }
}

export default App;
