import React, {Component} from 'react/addons';
import Autocomplete from 'react-autocomplete';
import * as tricks from './skate-tricks';

let update = React.addons.update;

function matchInputToTrick(trick, value) {
  return (trick.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}

export class SkateTrickCalculator extends Component {

  constructor(props) {
    super(props);
    this.state = { tricks: {} };
  }

  handleSelect(index, value) {
    var newTricks = {};
    newTricks[index] = { $set: value };
    var newState = update(this.state, { tricks: newTricks });
    newState.combo = tricks.resolve(...Object.keys(newState.tricks).map((key) => newState.tricks[key]));
    this.setState(newState);
    // var newState = update(this.state, { tricks: {} });
    // newState.tricks[index] = value;
    // this.setState(newState);
    console.log(newState);
    // console.log(this.state);
  }

  renderItem(item, isHighlighted) {
    return (
      <div key={item}>
        {item}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Autocomplete
          items={tricks.list()}
          getItemValue={(item) => item}
          shouldItemRender={matchInputToTrick}
          renderItem={this.renderItem.bind(this)}
          onSelect={this.handleSelect.bind(this, 0)}
        />
        {(() => {
          if (this.state.tricks['0']) {
            return (
              <div>
                <span>+</span>
                <Autocomplete
                  items={tricks.list(this.state.tricks['0'])}
                  getItemValue={(item) => item}
                  shouldItemRender={matchInputToTrick}
                  renderItem={this.renderItem.bind(this)}
                  onSelect={this.handleSelect.bind(this, 1)}
                />
              </div>
            );
          }
        })()}
        {(() => {
          if (this.state.combo && this.state.combo.name) {
            return (
              <div>
                = {this.state.combo.name}
              </div>
            );
          }
        })()}
      </div>
    );
  }

}
