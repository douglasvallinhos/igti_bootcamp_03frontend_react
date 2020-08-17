import React from 'react';
import css from './header.module.css';
import { formatNumber } from '../../helpers/formatHelpers';

export default function Header(props) {
  const handleInputChange = (event) => {
    const newText = event.target.value;
    props.onChangeFilter(newText);
  };

  const { filter, countryCount, totalPopulation } = props;
  return (
    <div className={css.flexRow}>
      <input
        type="text"
        value={filter}
        onChange={handleInputChange}
        placeholder="Filtro"
      ></input>
      <span className={css.countries}>Países: {countryCount} </span>
      <span className={css.population}>
        População: {formatNumber(totalPopulation)}{' '}
      </span>
    </div>
  );
}
