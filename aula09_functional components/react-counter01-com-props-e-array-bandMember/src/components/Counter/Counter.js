import React, { Component } from 'react';
import cssCounter from './counter.module.css';
import BotaoAumentar from './BotaoAumentar';
import BotaoDiminuir from './BotaoDiminuir';
import Value from './Value';
import Steps from './Steps';
export default class Counter extends Component {
  constructor() {
    super();
    this.state = { currentCounter: 2, steps: 0 };
  }

  clickButton = (type) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: type === '+' ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };
  render() {
    return (
      <div className={cssCounter.counterContainer}>
        <BotaoDiminuir onDecrement={this.clickButton} />
        <Value value={this.state.currentCounter} />
        <BotaoAumentar onIncrement={this.clickButton} />
        <Steps steps={this.state.steps} />
      </div>
    );
  }
}
