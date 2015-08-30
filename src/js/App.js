import React, {Component} from 'react';
import {SkateTrickCalculator} from './SkateTrickCalculator';

class App extends Component {
  render() {
    return (
      <SkateTrickCalculator/>
    );
  }
}

React.render(<App/>, document.querySelector('.app'));
