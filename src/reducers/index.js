import {
  CHANGE_VALUE,
  ADD_MESSAGE,
  CHANGE_INPUT_VALUE,
  TOGGLE_SETTINGS,
  SAVE_PSEUDO,
} from 'src/actions';
import { getHighestId } from 'src/selectors';
/*
const getHighestId = (items) => {
  const ids = items.messages.map((item) => item.id);
  const maxId = Math.max(...ids);

  return maxId;
};
*/

const initialState = {
  messages: [
    {
      id: 1,
      author: 'Super chat',
      content: 'Salut, ça boum?',
    },
    {
      id: 2,
      author: 'Super chat',
      content: 'Viva la vida Baby',
    },
    {
      id: 3,
      author: 'Super chat',
      content: 'Hasta luego Poncho',
    },
    {
      id: 4,
      author: 'Anonyme',
      content: 'Where is Brian?',
    },
  ],
  pseudo: 'Anonyme',
  newMessage: '',
  openSettings: true,
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessages = [
        ...state.messages,
        action.message,
      ];

      return {
        ...state,
        newMessage: '',
        messages: newMessages,
      };

      // return {
      //   ...state,
      //   messages: [
      //     ...state.messages,
      //     action.message,
      //   ],
      // };
    }
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        newMessage: action.value,
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        openSettings: !state.openSettings,
      };
    case CHANGE_VALUE:
      // if (action.key === 'email') {
      //   return {
      //     ...state,
      //     email: action.value,
      //   };
      // }

      // // ici je veux récupérer la valeur du champs
      // // et modifier le state en conséquence
      // return {
      //   ...state,
      //   password: action.value,
      // };

      return {
        ...state,
        // on peut cibler une propriété d'un objet de manière dynamique
        // on ouvre les crochets et on place la valeur String à l'intérieur
        [action.key]: action.value,
      };
    case SAVE_PSEUDO:
      return {
        ...state,
        pseudo: action.pseudo,
      };
    default:
      return state;
  }
};

export default reducer;
