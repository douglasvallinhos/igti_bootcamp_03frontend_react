import React, { Component } from 'react';
import { calculateSalaryFrom } from './helpers/salary.js';
import css from './app.module.css';
import Bar from './components/Bar.js';
import InputReadyOnly from './components/InputReadyOnly.js';
import InputFullSalay from './components/InputFullSalay.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      salarioBruto: '1000',
      calculateSalary: [],
      baseINSS: '1000',
      descontoINSS: '75',
      baseIRPF: '925',
      descontoIRPF: '0',
      salarioLiquido: '925',
      porcentoINSS: '7.50',
      porcentoIRPF: '0.00',
      porcentoSalarioLiquido: '92.50',
    };
  }
  handleInputChange = async (event) => {
    await this.setState({
      salarioBruto: event.target.value,
    });
    await this.setState({
      calculateSalary: calculateSalaryFrom(this.state.salarioBruto),
    });
    this.setState({
      baseINSS: this.state.calculateSalary.baseINSS,
      descontoINSS: this.state.calculateSalary.discountINSS,
      baseIRPF: this.state.calculateSalary.baseIRPF,
      descontoIRPF: this.state.calculateSalary.discountIRPF,
      salarioLiquido: this.state.calculateSalary.netSalary,

      porcentoINSS:
        (this.state.calculateSalary.discountINSS /
          this.state.calculateSalary.baseINSS) *
        100,

      porcentoIRPF:
        (this.state.calculateSalary.discountIRPF /
          this.state.calculateSalary.baseINSS) *
        100,

      porcentoSalarioLiquido:
        (this.state.calculateSalary.netSalary /
          this.state.calculateSalary.baseINSS) *
        100,
    });
  };

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
    } = this.state;
    return (
      <div className="container">
        <h3>React Salário</h3>

        <InputFullSalay
          onChangeNumber={this.handleInputChange}
          salarioBruto={this.state.salarioBruto}
        />

        <InputReadyOnly
          baseINSS={baseINSS}
          descontoINSS={descontoINSS}
          baseIRPF={baseIRPF}
          descontoIRPF={descontoIRPF}
          salarioLiquido={salarioLiquido}
          porcentoINSS={porcentoINSS}
          porcentoIRPF={porcentoIRPF}
          porcentoSalarioLiquido={porcentoSalarioLiquido}
        />

        <div className={css.bar}>
          <Bar value={porcentoINSS} color="#e67e22" />
          <Bar value={porcentoIRPF} color="#c0392b" />
          <Bar value={porcentoSalarioLiquido} color="#16a085" />
        </div>
      </div>
    );
  }
}
