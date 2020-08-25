import React, { useState, useEffect } from 'react';
import css from './../app.module.css';

export default function Form({ onCalculate, onAllCalculate }) {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [taxaJuros, setTaxaJuros] = useState(0);
  const [periodoMeses, setPeriodoMeses] = useState(0);

  useEffect(() => {
    onCalculate(capitalInicial, taxaJuros, periodoMeses);
    calculateMeses();
    return () => {};
  }, [capitalInicial, taxaJuros, periodoMeses]);

  const calculateMeses = () => {
    const newAllParcelas = [];
    let total = capitalInicial;
    let aumentoTotal = 0;
    for (let i = 1; i <= periodoMeses; i++) {
      let aumento = (total * taxaJuros) / 100;
      aumentoTotal += aumento;
      total += aumento;
      const porcentagem = (aumentoTotal / capitalInicial) * 100;
      newAllParcelas.push({
        total: total,
        aumento: aumentoTotal,
        porcentagem: porcentagem,
      });
    }
    onAllCalculate(newAllParcelas);
  };

  return (
    <div>
      <form className={css.pai}>
        <div className={css.filho}>
          <div className="input-field">
            <input
              id="inputCapital"
              type="number"
              value={capitalInicial}
              step="1000"
              onChange={(event) =>
                setCapitalInicial(Number(event.target.value))
              }
            />
            <label className="active" htmlFor="inputCapital">
              Capital inicial:
            </label>
          </div>
        </div>

        <div className={css.filho}>
          <div className="input-field">
            <input
              id="inputJuros"
              type="number"
              value={taxaJuros}
              step="0.1"
              onChange={(event) => setTaxaJuros(Number(event.target.value))}
            />
            <label className="active" htmlFor="inputJuros">
              Taxa de Juros (mensal):
            </label>
          </div>
        </div>

        <div className={css.filho}>
          <div className="input-field">
            <input
              id="inputPeriodo"
              type="number"
              value={periodoMeses}
              onChange={(event) => setPeriodoMeses(Number(event.target.value))}
            />
            <label className="active" htmlFor="inputPeriodo">
              Período (meses):
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
