// Action types
// auto-complétion + gestion des erreurs si on se trompe dans le nom
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';
export const WS_CONNECT = 'WS_CONNECT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

// Action creators
// générer un objet action
// permet d'injecter des data dans les propriétés de l'objet action, via les paramètres
// payload ici c'est le message
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  // value: value,
});
/* version longue avec retour explicite
doucle accolade serait en jsx serait un problème donc on met parenthèse
export const addMessage = () => {
  return {
    type: ADD_MESSAGE,
  }
};
*/
export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const changeValue = (value, key) => ({
  type: CHANGE_VALUE,
  value,
  key,
});

export const login = () => ({
  type: LOGIN,
});

export const savePseudo = (pseudo) => ({
  type: SAVE_PSEUDO,
  pseudo,
});

export const wsConnect = () => ({
  type: WS_CONNECT,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
