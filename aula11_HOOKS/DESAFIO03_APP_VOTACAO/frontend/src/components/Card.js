import React from 'react';
import css from './card.module.css';

export default function Card(props) {
  const classes = `card ${css.cardExtra}`;
  return <div className={classes}>{props.children}</div>;
}
