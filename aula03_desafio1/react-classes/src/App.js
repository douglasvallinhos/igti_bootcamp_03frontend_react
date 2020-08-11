import React, { Component } from 'react';
import { getDataAtual } from './helpers/dateTimeHelpers.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = { clickArray: [] };
  }
  cliqueBotao = () => {
    const newClickArray = Object.assign([], this.state.clickArray);
    newClickArray.push(getDataAtual());
    this.setState({ clickArray: newClickArray });
  };
  componentDidUpdate() {
    document.title = this.state.clickArray.length;
  }
  render() {
    const { clickArray } = this.state;
    return (
      <div>
        <h1>
          React e <em>Class Components</em>
        </h1>
        <button onClick={this.cliqueBotao}>Clique aqui!</button>
        <ul>
          {clickArray.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
