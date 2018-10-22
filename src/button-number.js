import React, { Component } from 'react';
import * as Actions from './actions';

class Numbutton extends Component {
  constructor(props) {
    super(props);
    this.inputParam = this.inputParam.bind(this);
  }
  inputParam() {
    this.props.store.dispatch(Actions.paramInput(this.props.number));
  }
  render() {
    return (
      <button onClick={this.inputParam}>{this.props.number}</button>
    )
  }
}

export default Numbutton;
