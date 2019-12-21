import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../utilities/styles/GlobalStyles';
import Layout from './hoc/Layout/Layout';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <GlobalStyles />
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
