import React, { Component } from 'react';

export default function BotaoDiminuir(props) {
  const clickButton = () => {
    props.onDecrement('-');
  };

  return (
    <button
      onClick={clickButton}
      className="waves-effect waves-light btn red darken-4"
    >
      -
    </button>
  );
}
