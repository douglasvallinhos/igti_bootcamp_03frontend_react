import React, { useState, useEffect } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredPopulation, setFilteredPopulation] = useState(0);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      const json = await res.json();

      const allCountries = json.map((item) => {
        return {
          id: item.numericCode,
          name: item.name,
          flag: item.flag,
          population: item.population,
        };
      });

      const totalPopulation = allCountries.reduce((a, b) => {
        return a + b.population;
      }, 0);

      setAllCountries(allCountries);
      setFilteredCountries(Object.assign([], allCountries));
      setFilteredPopulation(totalPopulation);
    };
    fetchCountries();
  }, []);

  const handleChangeFilter = (newText) => {
    setFilter(newText);

    const filteredCountries = allCountries.filter((item) => {
      return item.name.toLowerCase().includes(newText.toLowerCase());
    });
    const totalPopulation = filteredCountries.reduce((a, b) => {
      return a + b.population;
    }, 0);

    setFilteredCountries(filteredCountries);
    setFilteredPopulation(totalPopulation);
  };

  return (
    <div className="container">
      <h1 style={styles.centeredTitle}>React Countries</h1>
      <Header
        filter={filter}
        countryCount={filteredCountries.length}
        onChangeFilter={handleChangeFilter}
        totalPopulation={filteredPopulation}
      />
      <Countries countries={filteredCountries} />
    </div>
  );
}

const styles = {
  centeredTitle: { textAlign: 'center' },
};
