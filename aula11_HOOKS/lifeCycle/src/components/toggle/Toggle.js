/* toggle é o switch para mostrar ou nao mostrar usuarios */
import React from 'react';

export default function Toggle(props) {
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    props.onToggle(isChecked);
  };

  const { enabled } = props;
  return (
    <div className="switch">
      <label>
        Mostrar Usuários:
        <input type="checkbox" onChange={handleChange} checked={enabled} />
        <span className="lever"></span>
      </label>
    </div>
  );
}
