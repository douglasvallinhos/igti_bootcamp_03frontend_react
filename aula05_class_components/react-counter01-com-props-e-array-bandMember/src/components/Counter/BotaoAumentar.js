import React, { Component } from 'react';

export default class BotaoAumentar extends Component {
  clickButton = () => {
    this.props.onIncrement('+');
  };
  render() {
    return (
      <button
        onClick={this.clickButton}
        className="waves-effect waves-light btn green darken-4"
      >
        +
      </button>
    );
  }
}
