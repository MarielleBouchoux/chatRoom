// == Import : npm
import React from 'react';
import { render } from 'react-dom';
// pour donner le store à l'application, on passe par un composant de react-redux : Provider
// on englobe l'application avec ce composant et on va lui donner le store
import { Provider } from 'react-redux';
import store from 'src/store';

// == Import : local
// Composants
import Chatroom from 'src/containers/Chatroom';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <Chatroom />
  </Provider>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
