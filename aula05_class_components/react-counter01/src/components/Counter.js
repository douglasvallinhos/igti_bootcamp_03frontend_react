import React, { Component } from 'react';
import cssCounter from './Counter/counter.module.css';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { currentCounter: 2, steps: 0 };
  }
  botaoDiminuir = () => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: currentCounter - 1,
      steps: steps + 1,
    });
  };

  botaoAumentar = () => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: currentCounter + 1,
      steps: steps + 1,
    });
  };
  render() {
    return (
      <div className={cssCounter.counterContainer}>
        <button
          onClick={this.botaoDiminuir}
          className="waves-effect waves-light btn red darken-4"
        >
          -
        </button>
        <span className={cssCounter.counterValue}>
          {this.state.currentCounter}
        </span>
        <button
          onClick={this.botaoAumentar}
          className="waves-effect waves-light btn green darken-4"
        >
          +
        </button>
        <span>({this.state.steps})</span>
      </div>
    );
  }
}
