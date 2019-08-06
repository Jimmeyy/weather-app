import React from 'react';
import styled from 'styled-components';
import arrowDownIcon from '../../assets/icons/arrow-down.png';

const DropdownCities = styled.select`
  padding: 0 60px 0 10px;
  border: 2px solid #eeeeee;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Open sans', sans-serif;
  background: url(${arrowDownIcon}) no-repeat right 20px center / 18px;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;

  @media (min-width: 768px) {
    padding: 5px 60px 5px 20px;
    font-size: 40px;
  }

  &::-ms-expand {
    display: none;
  }

  option {
    font-size: 16px;
  }
`;

const Dropdown = () => {
  return (
    <DropdownCities>
      <option value="1">Warsaw</option>
      <option value="2">Cracov</option>
      <option value="3">Silesia</option>
    </DropdownCities>
  );
};

export default Dropdown;
