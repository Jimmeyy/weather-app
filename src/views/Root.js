import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GlobalStyles from '../theme/GlobalStyles';
import WeatherWidget from '../components/weatherWidget/WeatherWidget';
import { convertDateFormat } from '../helpers/helpers';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 15px;
`;

class Root extends Component {
  state = {
    cities: [],
    activeCity: {
      id: null,
      data: [],
    },
  };

  async componentDidMount() {
    convertDateFormat(new Date());
    try {
      const response = await axios.get('http://dev-weather-api.azurewebsites.net/api/city');
      const dataCities = [...response.data];

      const id = dataCities.length ? dataCities[0].id : null;
      const dataActiveCity = await this.fetchData(id);

      this.setState({
        cities: dataCities,
        activeCity: {
          id,
          data: dataActiveCity,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  fetchData = async id => {
    const response = await axios.get(`http://dev-weather-api.azurewebsites.net/api/city/${id}/weather`, {
      params: {
        date: convertDateFormat(new Date()),
      },
    });

    return response.data;
  };

  handleDropdownChange = async event => {
    const id = event.target.value;
    const data = await this.fetchData(id);
    this.setState({
      activeCity: {
        data,
        id,
      },
    });
  };

  render() {
    const { cities, activeCity } = this.state;

    return (
      <AppWrapper>
        <GlobalStyles />
        <WeatherWidget cities={cities} onChange={this.handleDropdownChange} activeCity={activeCity.data} />
      </AppWrapper>
    );
  }
}

export default Root;
