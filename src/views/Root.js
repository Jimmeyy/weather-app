import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../theme/GlobalStyles';
import WeatherWidget from '../components/weatherWidget/WeatherWidget';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 15px;
`;

class Root extends Component {
  state = {};

  render() {
    return (
      <AppWrapper>
        <GlobalStyles />
        <WeatherWidget />
      </AppWrapper>
    );
  }
}

export default Root;
