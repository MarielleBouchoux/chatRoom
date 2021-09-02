import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import './style.scss';

export default function Chatroom({ wsConnect }) {
  // au 1e rendu de Chatroom je veux exécuter une fonction
  // qui me permettra de me connecter au websocket
  useEffect(() => {
    wsConnect();
  }, []);

  return (
    <div className="chatroom">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
}

Chatroom.propTypes = {
  wsConnect: PropTypes.func.isRequired,
};
