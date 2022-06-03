import React from 'react';

import PropTypes from 'prop-types';

const Input = (props) => {
  const { value, onchange, placeholder } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="select"
      value={value}
      onChange={(e) => onchange(e.target.value)}
    />
  );
};

export default Input;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onchange: PropTypes.instanceOf(Function).isRequired,
  placeholder: PropTypes.string.isRequired,
};
