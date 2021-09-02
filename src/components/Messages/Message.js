import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

export default function Message({ author, content, isMine }) {
  // avec une ternaire (sans utiliser l'utilitaire classNames)
  // const classnames = author === pseudo ? 'message message--is-mine' : 'message';
  // en utilisant classNames
  // const classnames = classNames('message', { 'message--is-mine': author === pseudo });
  const classnames = classNames('message', { 'message--is-mine': isMine });

  return (
    <div className={classnames}>
      <p className="message__author">{author}</p>
      <p className="message__content">{content}</p>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};
