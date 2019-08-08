import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const Dropdown = ({ cities, onChange }) => {
  return (
    <DropdownCities onChange={onChange}>
      {cities.map(city => (
        <option key={city.id} value={city.id}>
          {city.name}
        </option>
      ))}
    </DropdownCities>
  );
};

Dropdown.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  cities: [],
};

export default Dropdown;
