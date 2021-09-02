import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';
import classNames from 'classnames';
import './style.scss';

export default function Form({ onFormSubmit, inputValue, onChangeInputValue }) {
  const [error, setError] = useState();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('je soumet le formulaire');

    if (inputValue.length > 2) {
      setError('');
      // la fonction qu'on va recevoir dans les props
      // sera exécuter à chaque fois qu'on soumettra le formulaire
      onFormSubmit();
    }
    else {
      setError('Vous devez mettre au moins 2 caractères');
    }
  };

  const handleOnChange = (event) => {
    console.log('je tape des lettres au clavier ', event.target.value);
    onChangeInputValue(event.target.value);
  };

  return (
    <form
      className="form"
      onSubmit={handleOnSubmit}
    >
      {error && <p className="error-message">Vous devez mettre au moins 2 caractères </p>}
      <input
        type="text"
        className={classNames('form__input', {'form__input--error' : error})}
        placeholder="Saisissez votre message..."
        value={inputValue}
        onChange={handleOnChange}
      />
      <button
        className="form__button"
        type="submit"
      >
        <Send color="#1da5ff" size={48} />
      </button>
    </form>
  );
}
Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};
