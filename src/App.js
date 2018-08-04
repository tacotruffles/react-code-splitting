import React, { Component } from 'react';
import './App.css';

import Page1 from './components/Page1';
// No codesplitting
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

class App extends Component {
  state = {
    route: 'page1',
    component: ''
  };

  onRouteChange = route => {
    // No code splitting
    //this.setState({ route: route });

    // With code splitting - using dynamic import
    if (route === 'page1') {
      this.setState({ route: route });
    } else if (route === 'page2') {
      import('./components/Page2').then(Page2 => {
        this.setState({ route: route, component: Page2.default });
      });
    } else {
      import('./components/Page3').then(Page3 => {
        this.setState({ route: route, component: Page3.default });
      });
    }
  };

  render() {
    // Basic - no code splitting
    // switch (this.state.route) {
    //   case 'page1':
    //     return <Page1 onRouteChange={this.onRouteChange} />;
    //   case 'page2':
    //     return <Page2 onRouteChange={this.onRouteChange} />;
    //   case 'page3':
    //     return <Page3 onRouteChange={this.onRouteChange} />;
    //   default:
    //     return <Page1 onRouteChange={this.onRouteChange} />;
    // }

    // Code Splitting
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else {
      return <this.state.component onRouteChange={this.onRouteChange} />;
    }
  }
}

export default App;
