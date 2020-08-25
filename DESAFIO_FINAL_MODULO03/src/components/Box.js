import React from 'react';

export default function Box({ children }) {
  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '4px',
        width: '150px',
        height: '80px',
        margin: '5px',
        padding: '5px',
      }}
    >
      {children}
    </div>
  );
}
