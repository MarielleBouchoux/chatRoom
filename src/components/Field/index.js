import React from 'react';
import Form from 'src/components/Form';
import PropTypes from 'prop-types';

import './style.scss';

export default function Field({
  type,
  name,
  placeholder,
  value,
  onChangeValue,
}) {
  const handleOnChange = (event) => {
    onChangeValue(event.target.value);
  };
  return (
    <div className="field">
      <input
        className="settings__input"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}

Field.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
};
