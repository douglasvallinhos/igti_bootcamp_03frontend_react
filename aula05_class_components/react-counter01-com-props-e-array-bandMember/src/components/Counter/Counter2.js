import React, { Component } from 'react';
import cssCounter from './counter.module.css';
import BotaoAumentar from './BotaoAumentar';
import BotaoDiminuir from './BotaoDiminuir';
import Value from './Value';
import Steps from './Steps';
export default class Counter2 extends Component {
  clickButton = (clickType) => {
    this.props.onCount(clickType);
  };
  render() {
    const { countValue, currentStep } = this.props;
    return (
      <div className={cssCounter.counterContainer}>
        <BotaoDiminuir onDecrement={this.clickButton} />
        <Value value={countValue} />
        <BotaoAumentar onIncrement={this.clickButton} />
        <Steps steps={currentStep} />
      </div>
    );
  }
}
