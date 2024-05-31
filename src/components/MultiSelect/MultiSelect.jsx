import React, { useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import "./MultiSelect.css";

const MultiSelect = ({ options, placeholder, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
    onChange(selected);
  };

  return (
    <div className="multi-select">
      <Select
        isMulti
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        value={selectedOptions}
        placeholder={placeholder}
      />
    </div>
  );
};

/* Validation of props */
MultiSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

MultiSelect.defaultProps = {
  placeholder: "Select...",
  onChange: () => {},
};

export default MultiSelect;
