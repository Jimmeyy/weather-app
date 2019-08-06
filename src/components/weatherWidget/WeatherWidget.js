import React from 'react';
import styled from 'styled-components';
import Dropdown from '../dropdown/Dropdown';
import SingleDay from '../singleDay/SingleDay';
import iconSunny from '../../assets/icons/sunny.png';

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

  span {
    padding-left: 10px;
    font-size: 45px;
    font-weight: 700;
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

const WeatherWidget = () => {
  return (
    <WeatherWidgetWrapper>
      <DropdownWrapper>
        <Dropdown />
      </DropdownWrapper>
      <SubHeading>Tuesday, April 15th</SubHeading>
      <SubHeading>Overcast</SubHeading>
      <InnerWrapper>
        <Column>
          <Temperature>
            <img src={iconSunny} alt="weather-icon" />
            <span>58&deg;</span>
          </Temperature>
        </Column>
        <Column>
          <MoreInfo>
            <li>
              Precipitation: <span>100%</span>
            </li>
            <li>
              Humidity: <span>97%</span>
            </li>
            <li>
              Wind: <span>4 mph SW</span>
            </li>
            <li>
              Pollen Count: <span>36</span>
            </li>
          </MoreInfo>
        </Column>
      </InnerWrapper>
      <DaysWrapper>
        <SingleDay />
        <SingleDay />
        <SingleDay />
        <SingleDay />
        <SingleDay />
        <SingleDay />
        <SingleDay />
      </DaysWrapper>
    </WeatherWidgetWrapper>
  );
};

export default WeatherWidget;
