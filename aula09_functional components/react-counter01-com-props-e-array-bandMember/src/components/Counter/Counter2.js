import React from 'react';
import cssCounter from './counter.module.css';
import BotaoAumentar from './BotaoAumentar';
import BotaoDiminuir from './BotaoDiminuir';
import Value from './Value';
import Steps from './Steps';

export default function Counter2(props) {
  const clickButton = (clickType) => {
    props.onCount(clickType);
  };

  const { countValue, currentStep } = props;
  return (
    <div className={cssCounter.counterContainer}>
      <BotaoDiminuir onDecrement={clickButton} />
      <Value value={countValue} />
      <BotaoAumentar onIncrement={clickButton} />
      <Steps steps={currentStep} />
    </div>
  );
}
