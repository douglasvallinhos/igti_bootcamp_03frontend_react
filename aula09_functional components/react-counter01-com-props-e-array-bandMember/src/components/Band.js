import React, { Component } from 'react';

export default class Band extends Component {
  constructor() {
    super();
    this.state = {
      bandName: 'Rush',
      bandMembers: [
        {
          id: 1,
          name: 'Alex Lifeson',
          instrument: 'Guitarra',
        },
        {
          id: 2,
          name: 'Neil Peart',
          instrument: 'Bateria',
        },
        {
          id: 3,
          name: 'Geddy Lee',
          instrument: 'Baixo',
        },
      ],
    };
  }
  render() {
    const { bandMembers, bandName } = this.state;
    return (
      <div>
        <h4>{bandName}</h4>
        <ul>
          {bandMembers.map((item) => {
            return (
              <li key={item.id}>
                {item.name} - {item.instrument}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
