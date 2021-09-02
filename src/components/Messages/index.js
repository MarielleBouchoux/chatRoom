import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from 'src/containers/Message';

import './style.scss';

export default function Messages({ messages }) {
  const messagesList = messages.map((message) => (
    <Message
      key={message.id}
      {...message}
    />
  ));

  // qd on veut intéragir avec un composant React qui se trouve
  // dans le DOM réel, on peut utiliser useRef qui va placer
  // une référence sur ce composant. On aura plus qu'à pointer cette référence
  // pour cibler l'élément React une fois dans le DOM.
  // penser à .current
  const messagesRef = useRef();

  // on veut qu'à chaque rendu du composant Messages
  // le scrollTop soit égal au scrollHeight
  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <div ref={messagesRef} className="messages">
      {messagesList}
    </div>
  );
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
