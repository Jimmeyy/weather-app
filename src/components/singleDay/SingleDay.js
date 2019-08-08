import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { weatherIcons, celsiusToFarenheit, dayNames, convertDateFormat } from '../../helpers/helpers';

const SingleDayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }

  @media (min-width: 768px) {
    flex-direction: column;
    flex-basis: 14.28%;
    padding: 0;
    border: 0;

    &:first-child {
      border: 0;
    }
  }

  img {
    width: 75px;
  }

  p {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.veryDarkGrey};

    @media (min-width: 500px) {
      display: inline-block;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.mediumGrey};
  }
`;

const SingleDay = ({ day }) => {
  return (
    <SingleDayWrapper>
      <h4>{convertDateFormat(new Date()) === convertDateFormat(new Date(day.date)) ? 'Today' : dayNames[new Date(day.date).getDay()]}</h4>
      <img src={weatherIcons[day.type]} alt="weather-icon" />
      <p>
        {celsiusToFarenheit(day.temperature)}&deg; <span>{day.temperature}&deg;</span>
      </p>
      <p>
        Pollen: <span>{day.pollenCount}</span>
      </p>
    </SingleDayWrapper>
  );
};

SingleDay.propTypes = {
  day: PropTypes.objectOf(PropTypes.any),
};

SingleDay.defaultProps = {
  day: {},
};

export default SingleDay;
