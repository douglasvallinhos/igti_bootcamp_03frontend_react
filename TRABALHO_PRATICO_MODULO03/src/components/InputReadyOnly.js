import React, { Component } from 'react';
import css from '../app.module.css';
import { formatNumber } from '../helpers/formatHelpers';

export default class InputReadyOnly extends Component {
  render() {
    const {
      baseINSS,
      descontoINSS,
      baseIRPF,
      descontoIRPF,
      salarioLiquido,
      porcentoINSS,
      porcentoIRPF,
      porcentoSalarioLiquido,
    } = this.props;
    return (
      <div className={css.inputAutoPai}>
        <div className={css.inputAuto}>
          <label>Base INSS:</label>
          <input
            type="text"
            placeholder="Base INSS"
            value={`R$ ${formatNumber(baseINSS)}`}
            readOnly="readonly"
          />
        </div>
        <div className={css.inputAuto}>
          <label>Desconto INSS:</label>
          <input
            className={css.inputINSS}
            type="text"
            placeholder="Desconto INSS"
            value={`R$ ${formatNumber(descontoINSS)} (${formatNumber(
              porcentoINSS
            )}%)`}
            readOnly="readonly"
          />
        </div>
        <div className={css.inputAuto}>
          <label>Base IRPF:</label>
          <input
            type="text"
            placeholder="Base IRPF"
            value={`R$ ${formatNumber(baseIRPF)}`}
            readOnly="readonly"
          />
        </div>
        <div className={css.inputAuto}>
          <label>Desconto IRPF:</label>
          <input
            className={css.inputIRPF}
            type="text"
            placeholder="Desconto IRPF"
            value={`R$ ${formatNumber(descontoIRPF)} (${formatNumber(
              porcentoIRPF
            )}%)`}
            readOnly="readonly"
          />
        </div>
        <div className={css.inputAuto}>
          <label>Salário Líquido:</label>
          <input
            className={css.inputLiquido}
            type="text"
            placeholder="Salário líquido"
            value={`R$ ${formatNumber(salarioLiquido)} (${formatNumber(
              porcentoSalarioLiquido
            )}%)`}
            readOnly="readonly"
          />
        </div>
      </div>
    );
  }
}
