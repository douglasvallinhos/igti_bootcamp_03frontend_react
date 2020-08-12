import React, { Component } from 'react';
import cssCounter from './counter.module.css';

export default class Value extends Component {
  render() {
    return <span className={cssCounter.counterValue}>{this.props.value}</span>;
  }
}
