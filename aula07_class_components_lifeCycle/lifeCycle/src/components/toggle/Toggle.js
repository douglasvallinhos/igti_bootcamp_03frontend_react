/* toggle é o switch para mostrar ou nao mostrar usuarios */
import React, { Component } from 'react';

export default class Toggle extends Component {
  handleChange = (event) => {
    const isChecked = event.target.checked;
    this.props.onToggle(isChecked);
  };
  render() {
    const { enabled } = this.props;
    return (
      <div className="switch">
        <label>
          Mostrar Usuários:
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={enabled}
          />
          <span className="lever"></span>
        </label>
      </div>
    );
  }
}
