
// on passe par tous les middlewares listés dans applyMiddleware, dans l'ordre avant d'arriver
// dans le reducer
const logger = (store) => (next) => (action) => {
  // si on a accès au store, on a aussi accès à ses fonctions
  // pour récupérer le state courant, on utiliser getState()
 
  // il faut exécuter la contion next avec l'action en argument
  // pour passer au prochain middleware ou au reducer
  next(action);
};

export default logger;
// on exporte le middlewre, il faut bien penser à l'importer dans le store
