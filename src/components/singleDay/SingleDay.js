import React from 'react';
import styled from 'styled-components';
import iconCloudy from '../../assets/icons/cloudy.png';

const SingleDayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #dddddd;

  &:first-child {
    border-top: 1px solid #dddddd;
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
    color: #333;

    @media (min-width: 500px) {
      display: inline-block;
    }
  }

  span {
    color: #aaaaaa;
  }
`;

const SingleDay = () => {
  return (
    <SingleDayWrapper>
      <h4>Today</h4>
      <img src={iconCloudy} alt="weather-icon" />
      <p>
        68&deg; <span>36&deg;</span>
      </p>
      <p>
        Pollen <span>36</span>
      </p>
    </SingleDayWrapper>
  );
};

export default SingleDay;
