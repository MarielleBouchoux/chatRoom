import axios from 'axios';
// pour traiter un type d'action spécifique on importe l'action type
import { LOGIN, savePseudo } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    // on traite l'action de type LOGIN dans ce middleware
    case LOGIN: {
      // console.log(`case`, LOGIN);

      // ici on va venir récupérer le state courant grâce au store
      const state = store.getState();

      // ici on va traiter notre requête API
      axios.post('http://localhost:3001/login', {
        email: state.email,
        password: state.password,
      })
        .then((response) => {
          // console.log(`response`, response)
          // ici on veut stocker dans le state les informations de notre réponse
          // on veut donc modifier le state => dispatch d'action
          console.log(`savePseudo`, savePseudo(response.data.pseudo));
          const savePseudoAction = savePseudo(response.data.pseudo);

          store.dispatch(savePseudoAction);
        })
        .catch((error) => console.log(`error`, error));

      // je choisis de ne pas laisser passer l'action jusqu'au reducer
      // next(action);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
