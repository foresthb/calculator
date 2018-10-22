import React, { Component } from 'react';
import * as Actions from './actions';

class OperBtn extends Component {
  constructor(props) {
    super(props);
    this.inputOp = this.inputOp.bind(this);
  }
  inputOp() {
    if(this.props.op !== "=") {
      this.props.store.dispatch(Actions.opInput(this.props.op));
    }
    else {
      this.props.store.dispatch(Actions.showResult(this.props.op));
      console.log(this.props.store.getState().param);
    }
  }
  render() {
    return (
      <button onClick={this.inputOp}>{this.props.op}</button>
    )
  }
}

export default OperBtn;
