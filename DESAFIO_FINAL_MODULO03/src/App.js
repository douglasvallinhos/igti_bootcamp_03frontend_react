import React, { useState } from 'react';
import Form from './components/Form';
import Box from './components/Box';
import { formatNumber } from './helpers/formatHelpers.js';
import css from './app.module.css';

export default function App() {
  const [allBoxes, setAllBoxes] = useState([]);
  const [valueTaxa, setvalueTaxa] = useState(0);

  const handleCalculate = (capital, taxa, periodo) => {
    setvalueTaxa(taxa);
  };
  const handleAllCalculate = (array) => {
    setAllBoxes(array);
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>React - Juros Compostos</h1>
      <Form onCalculate={handleCalculate} onAllCalculate={handleAllCalculate} />
      <div className={css.flexRow}>
        {allBoxes.map((item, index) => {
          return (
            <Box key={index}>
              <div className={css.flexRow}>
                <div style={{ marginRight: '10px', fontWeight: 'bold' }}>
                  {index + 1}
                </div>
                <div className={valueTaxa >= 0 ? css.green : css.red}>
                  <div>R$ {formatNumber(item.total)}</div>
                  <div>
                    {valueTaxa >= 0 ? '+' : '-'}R$ {formatNumber(item.aumento)}
                  </div>
                  <div className={valueTaxa >= 0 ? css.blue : css.orange}>
                    {formatNumber(item.porcentagem)}%
                  </div>
                </div>
              </div>
            </Box>
          );
        })}
      </div>
    </div>
  );
}
