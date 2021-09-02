import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

import './style.scss';
import axios from 'axios';

export default function Settings({ onClickToggler, isOpen, onFormSubmit }) {
  const handleClick = () => {
    console.log('isOpen', isOpen);
    onClickToggler();
  };

  const classnames = isOpen ? 'settings settings--open' : 'settings';

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log(`submit du form`);
    // axios.post('http://localhost:3001/login', {
    //   email: 'acidman@herocorp.io',
    //   password: 'fructis',
    // })
    //   .then((response) => console.log('response', response))
    //   .catch((error) => console.log('error', error));
    onFormSubmit();
  };
  return (
    <div className={classnames}>
      <button
        className="settings__toggler"
        type="button"
        onClick={handleClick}
      >
        +
      </button>
      <form
        className="settings__form"
        onSubmit={handleOnSubmit}
      >
        <Field
          type="email"
          name="email"
          placeholder="Email"
        />
        <Field
          type="password"
          name="password"
          placeholder="Mot de passe"
        />
        <button
          className="settings__submit"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

Settings.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClickToggler: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
