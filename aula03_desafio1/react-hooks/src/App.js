import React, { useState, useEffect } from 'react';
import { getDataAtual } from './helpers/dateTimeHelpers.js';

export default function App() {
  const [clickArray, setClickArray] = useState([]);

  useEffect(() => {
    document.title = clickArray.length;
  });

  const cliqueBotao = () => {
    const newClickArray = Object.assign([], clickArray);
    newClickArray.push(getDataAtual());
    setClickArray(newClickArray);
  };

  return (
    <div>
      <h1>
        React e <em>Hooks</em>
      </h1>
      <button onClick={cliqueBotao}>Clique aqui!</button>
      <ul>
        {clickArray.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
