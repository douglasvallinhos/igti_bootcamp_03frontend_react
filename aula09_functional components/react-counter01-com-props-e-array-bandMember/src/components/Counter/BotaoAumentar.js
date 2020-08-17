import React from 'react';

export default function BotaoAumentar(props) {
  const clickButton = () => {
    props.onIncrement('+');
  };

  return (
    <button
      onClick={clickButton}
      className="waves-effect waves-light btn green darken-4"
    >
      +
    </button>
  );
}
