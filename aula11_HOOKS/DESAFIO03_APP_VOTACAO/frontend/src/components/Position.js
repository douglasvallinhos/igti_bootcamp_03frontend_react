import React from 'react';

export default function Position(props) {
  return (
    <div style={{ marginRight: '5px', fontSize: '2rem', fontWeight: 'bold' }}>
      {props.children}
    </div>
  );
}
