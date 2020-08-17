import React, { Component } from 'react';

export default class InputFullSalay extends Component {
  render() {
    return (
      <div>
        <label>Salário Bruto:</label>
        <input
          id="salario"
          type="number"
          placeholder="Salário Bruto"
          onChange={this.props.onChangeNumber}
          value={this.props.salarioBruto}
          min="1000"
          step="50"
        ></input>
      </div>
    );
  }
}
