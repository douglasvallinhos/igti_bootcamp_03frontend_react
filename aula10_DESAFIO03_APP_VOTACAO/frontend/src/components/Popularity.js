import React from 'react';
const stars = {
  empty: '☆',
  full: '★',
};

export default function Popularity(props) {
  const fullstars = stars.full.repeat(props.value);
  const emptystars = stars.empty.repeat(10 - props.value);
  return (
    <div style={{ color: 'orange', fontSize: '2rem' }}>
      {fullstars}
      {emptystars}
    </div>
  );
}
