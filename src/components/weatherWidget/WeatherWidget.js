import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown/Dropdown';
import SingleDay from '../singleDay/SingleDay';
import { dayNames, monthNames, weatherIcons, celsiusToFarenheit, getDaySufix } from '../../helpers/helpers';

const WeatherWidgetWrapper = styled.div`
  flex-basis: 100%;
  max-width: 1000px;
  padding: 30px;
  border: 2px solid #eeeeee;
  box-shadow: 0 5px 10px 0 rgba(33, 33, 33, 0.1);
`;

const DropdownWrapper = styled.div`
  margin-bottom: 10px;
`;

const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 425px) {
    justify-content: flex-start;
  }

  img {
    width: 75px;
  }

  h5 {
    padding-left: 10px;
    font-size: 45px;
    font-weight: 700;

    span {
      display: inline-block;
      color: #aaaaaa;
      font-size: 20px;
      font-weight: 400;
      transform: translateY(-75%);
    }
  }
`;

const MoreInfo = styled.ul`
  list-style: none;

  li {
    text-align: center;
    font-size: 18px;
    line-height: 23px;
    color: #777777;

    @media (min-width: 425px) {
      text-align: left;
    }
  }

  span {
    font-weight: 700;
  }
`;

const InnerWrapper = styled.div`
  padding: 40px 0;

  @media (min-width: 425px) {
    display: flex;
  }
`;

const Column = styled.div`
  flex-basis: 50%;
`;

const DaysWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SubHeading = styled.p`
  line-height: 22px;
  font-size: 17px;
  font-weight: 700;
  color: #777777;

  @media (min-width: 768px) {
    line-height: 26px;
    font-size: 20px;
  }
`;

const WeatherWidget = ({ cities, onChange, activeCity }) => {
  const currentDay = activeCity.length > 0 ? activeCity[0] : null;

  return (
    currentDay && (
      <WeatherWidgetWrapper>
        <DropdownWrapper>
          <Dropdown cities={cities} onChange={onChange} />
        </DropdownWrapper>
        <SubHeading>
          {dayNames[new Date(currentDay.date).getDay()]}, {monthNames[new Date(currentDay.date).getMonth()]} {new Date(currentDay.date).getDate()}
          {getDaySufix(new Date(currentDay.date).getDate())}
        </SubHeading>
        <SubHeading>{currentDay.type.split(/(?=[A-Z])/).join(' ')}</SubHeading>
        <InnerWrapper>
          <Column>
            <Temperature>
              <img src={weatherIcons[currentDay.type]} alt="weather-icon" />
              <h5>
                {celsiusToFarenheit(currentDay.temperature)}
                <span>&deg;F</span>
              </h5>
            </Temperature>
          </Column>
          <Column>
            <MoreInfo>
              <li>
                Precipitation: <span>{currentDay.precipitation}%</span>
              </li>
              <li>
                Humidity: <span>{currentDay.humidity}%</span>
              </li>
              <li>
                Wind: <span>{`${currentDay.windInfo.speed} mph ${currentDay.windInfo.direction}`}</span>
              </li>
              <li>
                Pollen Count: <span>{currentDay.pollenCount}</span>
              </li>
            </MoreInfo>
          </Column>
        </InnerWrapper>
        <DaysWrapper>
          {activeCity.map(day => (
            <SingleDay key={day.date} day={day} />
          ))}
        </DaysWrapper>
      </WeatherWidgetWrapper>
    )
  );
};

WeatherWidget.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
  activeCity: PropTypes.arrayOf(PropTypes.object),
};

WeatherWidget.defaultProps = {
  cities: [],
  activeCity: [],
};

export default WeatherWidget;
