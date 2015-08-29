import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';

export class SkateTrickCalculator extends Component {
  render() {
    return (
      <div>
        <Autocomplete
          initialValue="Test"
        />
      </div>
    );
  }
}
