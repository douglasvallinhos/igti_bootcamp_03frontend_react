import React, { useState } from 'react';

const BAND_MEMBERS = [
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
];
export default function Band() {
  const [bandMembers, setBandMembers] = useState(BAND_MEMBERS);
  const [bandName, setBandName] = useState('Rush');

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
