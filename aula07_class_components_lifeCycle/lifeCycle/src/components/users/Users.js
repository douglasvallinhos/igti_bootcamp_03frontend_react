import React, { Component } from 'react';
import User from './User';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      secondsVisible: 0,
    };
    this.interval = null;
  }
  componentDidMount() {
    console.log('Mount Users.js');

    this.interval = setInterval(() => {
      const { secondsVisible } = this.state;
      this.setState({
        secondsVisible: secondsVisible + 1,
      });
    }, 1000);
  }
  componentDidUpdate() {
    console.log('Update Users.js');
  }
  componentWillUnmount() {
    console.log('UnMount Users.js');
    clearInterval(this.interval);
  }

  render() {
    const { users } = this.props;
    const { secondsVisible } = this.state;
    return (
      <div>
        <p>Componente Users visível por {secondsVisible} segundos</p>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.login.uuid}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
