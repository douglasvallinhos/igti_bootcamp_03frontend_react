import React, { useState, useEffect } from 'react';
import User from './User';

export default function Users(props) {
  const [secondsVisible, setSecondsVisible] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsVisible(secondsVisible + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [secondsVisible]);

  // componentDidMount() {
  //   console.log('Mount Users.js');

  //   this.interval = setInterval(() => {
  //     const { secondsVisible } = this.state;
  //     this.setState({
  //       secondsVisible: secondsVisible + 1,
  //     });
  //   }, 1000);
  // }
  // componentDidUpdate() {
  //   console.log('Update Users.js');
  // }
  // componentWillUnmount() {
  //   console.log('UnMount Users.js');
  //   clearInterval(this.interval);
  // }

  const { users } = props;
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
