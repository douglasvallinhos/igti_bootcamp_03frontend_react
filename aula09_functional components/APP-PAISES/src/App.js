import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: '',
    };
  }
  async componentDidMount() {
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

    this.setState({
      allCountries: allCountries,
      filteredCountries: Object.assign([], allCountries),
      filteredPopulation: totalPopulation,
    });
  }

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });

    const filteredCountries = this.state.allCountries.filter((item) => {
      return item.name.toLowerCase().includes(newText.toLowerCase());
    });
    const totalPopulation = filteredCountries.reduce((a, b) => {
      return a + b.population;
    }, 0);

    this.setState({
      filteredCountries: filteredCountries,
      filteredPopulation: totalPopulation,
    });
  };
  render() {
    const { filteredCountries, filter, filteredPopulation } = this.state;
    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>React Countries</h1>
        <Header
          filter={filter}
          countryCount={filteredCountries.length}
          onChangeFilter={this.handleChangeFilter}
          totalPopulation={filteredPopulation}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}

const styles = {
  centeredTitle: { textAlign: 'center' },
};
