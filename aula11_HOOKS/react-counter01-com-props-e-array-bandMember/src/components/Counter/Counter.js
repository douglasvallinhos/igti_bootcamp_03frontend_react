import React, { useState } from 'react';
import cssCounter from './counter.module.css';
import BotaoAumentar from './BotaoAumentar';
import BotaoDiminuir from './BotaoDiminuir';
import Value from './Value';
import Steps from './Steps';
export default function Counter() {
  const [currentCounter, setCurrentCounter] = useState(2);
  const [steps, setSteps] = useState(0);

  const clickButton = (type) => {
    setCurrentCounter(type === '+' ? currentCounter + 1 : currentCounter - 1);
    setSteps(steps + 1);
  };

  return (
    <div className={cssCounter.counterContainer}>
      <BotaoDiminuir onDecrement={clickButton} />
      <Value value={currentCounter} />
      <BotaoAumentar onIncrement={clickButton} />
      <Steps steps={steps} />
    </div>
  );
}
