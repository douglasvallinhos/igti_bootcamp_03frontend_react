import React from 'react';
import cssCounter from './counter.module.css';

export default function Value(props) {
  return <span className={cssCounter.counterValue}>{props.value}</span>;
}
