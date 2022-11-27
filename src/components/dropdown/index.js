import React from 'react';
import Select from 'react-select';

const Dropdown = ({ options, handleChange }) => {
  return (
    <Select
      options={options}
      data-test="dropdownTest"
      onChange={handleChange}
      placeholder="Select Place"
      aria-label="Select place"
    />
  );
};

export default Dropdown;
