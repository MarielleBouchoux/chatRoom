import { WS_CONNECT, SEND_MESSAGE, addMessage } from 'src/actions';

let socket;

export default (store) => (next) => (action) => {
  // console.log(`action`, action);

  switch (action.type) {
    case WS_CONNECT: {
      // console.log(`case`, WS_CONNECT);

      // on crée un canal d'échange entre l'app et le server websocket
      // notre application tourne sur le serveur localhost:8080
      // il faut donc préciser l'adresse du serveur websocket
      socket = window.io('http://localhost:3001');

      // on écoute les messages que va nous envoyer le serveur
      // une fois ici, on va vouloir stocker dans notre state
      // le nouveau message
      // modifier le state => dispatch d'action
      socket.on('server_message', (message) => {
        // on prépare l'action en lui passant le message à stocker dans le state
        // console.log(`le serveur envoie un message`, message);
        const addMessageAction = addMessage(message);
        store.dispatch(addMessageAction);
      });

      // on envoie un message de test directement au serveur
      // socket.emit('client_message', { author: 'Burt', content: 'blabla' });

      // si je veux laisser passer l'action, il faut utiliser la fonction next
      // next(action);
      break;
    }
    case SEND_MESSAGE: {
      // console.log('case', SEND_MESSAGE);
      const state = store.getState();
      const message = {
        author: state.pseudo,
        content: state.newMessage,
      };
      // j'anvoie l'évènement 'client_message' au server WS
      // et je lui passe les données : le message
      socket.emit('client_message', message);
      break;
    }
    default:
      next(action);
  }
};
