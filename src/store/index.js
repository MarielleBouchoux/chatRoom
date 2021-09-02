// Pour mettre en place le state, on va passer par Redux
// il faut donc importer la fonction createStore
// celle-ci va nous aider à créer le store qui sera le gardien du state
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
// import logger from 'src/middlewares/logger';
import auth from 'src/middlewares/auth';
import socket from 'src/middlewares/socket';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// le store à sa création à besoin d'une "moulinette" : le reducer
const store = createStore(reducer, composeEnhancers(
  // on ajoute nos middlewares dans la fonction applyMiddleware
  applyMiddleware(auth, socket),
));

// const store = createStore(
//   reducer,
//   // © Marielle
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// ne pas oublier d'exporter / exposer le store
export default store;
