import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';
import * as tricks from './skate-tricks';

function matchInputToTrick(trick, value) {
  return (trick.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}

export class SkateTrickCalculator extends Component {
  render() {
    return (
      <div>
        <Autocomplete
          items={tricks.list()}
          getItemValue={(item) => item}
          shouldItemRender={matchInputToTrick}
          renderItem={(item, isHighlighted) => (
            <div key={item}>
              {item}
            </div>
          )}
        />
      </div>
    );
  }
}
