import React, { Component } from 'react';

export default class BotaoDiminuir extends Component {
  clickButton = () => {
    this.props.onDecrement('-');
  };
  render() {
    return (
      <button
        onClick={this.clickButton}
        className="waves-effect waves-light btn red darken-4"
      >
        -
      </button>
    );
  }
}
