import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Number from './button-number';
import Operation from './button-operation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {this.props.store.getState().operator && this.props.store.getState().param}
            {!this.props.store.getState().operator && this.props.store.getState().result}
          </div>
          <div className="button-section">
            <Number store={this.props.store} number={7} />
            <Number store={this.props.store} number={8} />
            <Number store={this.props.store} number={9} />
            <Operation store={this.props.store} op="C" />
          </div>
          <div className="button-section">
            <Number store={this.props.store} number={4} />
            <Number store={this.props.store} number={5} />
            <Number store={this.props.store} number={6} />
          </div>
          <div className="button-section">
            <Number store={this.props.store} number={1} />
            <Number store={this.props.store} number={2} />
            <Number store={this.props.store} number={3} />
          </div>
          <div className="button-section">
            <Operation store={this.props.store} op="+" />
            <Operation store={this.props.store} op="-" />
            <Operation store={this.props.store} op="X" />
            <Operation store={this.props.store} op="/" />
            <Operation store={this.props.store} op="=" />
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    param: state.param,
    operator: state.operator,
    result: state.result
  }
}

const Container = connect(mapStateToProps)(App);

export default Container;
