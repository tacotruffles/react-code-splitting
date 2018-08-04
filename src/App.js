import React, { Component } from 'react';
import './App.css';

import AsyncComponent from './hoc/AsyncComponent';

import Page1 from './components/Page1';
const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));

class App extends Component {
  state = {
    route: 'page1',
    component: null
  };

  onRouteChange = route => {
    this.setState({ route: route });
  };

  render() {
    // Basic - no code splitting
    switch (this.state.route) {
      case 'page1':
        return <Page1 onRouteChange={this.onRouteChange} />;
      case 'page2':
        return <AsyncPage2 onRouteChange={this.onRouteChange} />;
      case 'page3':
        return <AsyncPage3 onRouteChange={this.onRouteChange} />;
      default:
        return <Page1 onRouteChange={this.onRouteChange} />;
    }
  }
}

export default App;
